const signInModal = require("../../modal/accounts/signIn");
const signUpModal = require("../../modal/accounts/signUp");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const connectDB = require("../../database/config");
connectDB();

exports.signInUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await signUpModal.findOne({ email });

    if (!user) {
      return res.status(401).json({ error: "Authentication failed" });
    }
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ error: "Authentication failed" });
    }
    console.log("HERE", req.body, user._id, passwordMatch);

    const token = jwt.sign(
      { userId: user._id, userName: user.email, userContact: user.phone },
      "b22b547aeebb6fbb1396599bbc5eb132d5c105bbf105dae2cf01fba9a8d1a4b7",
      {
        expiresIn: "1h",
      }
    );
    console.log("HERE", req.body, user);
    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ error: "Login failed" });
  }
};
