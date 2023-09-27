import {
    SET_NAME,
    SET_EMAIL,
    SET_PASSWORD,
    REGISTER_USER_SUCCESS,
    SET_USER_ID,
  } from "../actionTypes"; 
  
export const setName = (name) => {
  return {
    type: SET_NAME,
    payload: name,
  };
};

export const setEmail = (email) => {
  return {
    type: SET_EMAIL,
    payload: email,
  };
};

export const setPassword = (password) => {
  return {
    type: SET_PASSWORD,
    payload: password,
  };
};

export const registerUserSuccess = (userId) => ({
  type: REGISTER_USER_SUCCESS,
  payload: userId,
});

export const setUserId = (userId) => {
  return {
    type: SET_USER_ID,
    payload: userId,
  };
};