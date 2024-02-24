const express = require("express");
const db = require("./src/database/config");
const router = require("./src/routes/accounts/signUp");
const signInRoute = require("./src/routes/accounts/signIn");

const app = express();

const port = 5000;
app.listen(port, () => {
  console.log(`App running at port: ${port}`);
});
app.use(express.json());
app.use("/audiophile", router);
app.use("/audiophile", signInRoute);
