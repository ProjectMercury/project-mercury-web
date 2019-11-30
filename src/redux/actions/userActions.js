import axios from "axios";
import { axiosWithAuth } from "../../utils/axiosWithAuth";
import {
  GET_USER_DETAILS,
  GET_RESPONSE_COUNT,
  LOADING_USER,
  GET_NOTIFICATION_COUNT
} from "../types";

export const userLogin = (email, password, history) => async dispatch => {
  try {
    let res = await axios.post(
      "https://us-central1-form-builder-97c3a.cloudfunctions.net/api/login",
      {
        email,
        password
      }
    );

    localStorage.setItem("token", `${res.data.token}`);
    localStorage.setItem("refreshToken", `${res.data.refreshToken}`);
    dispatch(getDetails());
    history.push("/dashboard");
  } catch (error) {
    console.error(error.message);
  }
};

export const getDetails = () => async dispatch => {
  try {
    dispatch({
      type: LOADING_USER
    });
    let info = await axiosWithAuth().get("/users");

    dispatch({
      type: GET_USER_DETAILS,
      payload: info.data
    });
    let responseCount = await axiosWithAuth().get("/forms/responses/count");
    dispatch({
      type: GET_RESPONSE_COUNT,
      payload: responseCount.data
    });

    let notificationCount = await axiosWithAuth().get("/notifications/count");
    dispatch({
      type: GET_NOTIFICATION_COUNT,
      payload: notificationCount.data
    });
  } catch (error) {
    console.error(error);
  }
};
