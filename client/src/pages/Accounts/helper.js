import axios from "../../axiosConfig";
import {
  signupUserError,
  signupUserInProgress,
  signupUserSuccess,
} from "../../redux/reducers/Auth/index";

export const signupUser = async (user, dispatch) => {
  try {
    dispatch(signupUserInProgress());
    let response = await axios.post("/signup", user);
    if (response.data.success) {
      dispatch(signupUserSuccess());
    } else {
      dispatch(signupUserError(response.data.message));
    }
    return response.data;
  } catch (error) {
    await dispatch(signupUserError());
  }
};
