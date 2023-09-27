import {
  SET_NAME,
  SET_EMAIL,
  SET_PASSWORD,
  REGISTER_USER_SUCCESS,
  SET_USER_ID,
} from "../actionTypes";

const initialState = {
  name: "",
  email: "",
  password: "",
  isRegistered: false,
  userId: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_NAME:
      return {
        ...state,
        name: action.payload,
      };

    case SET_EMAIL:
      return {
        ...state,
        email: action.payload,
      };

    case SET_PASSWORD:
      return {
        ...state,
        password: action.payload,
      };

    case REGISTER_USER_SUCCESS:
      return {
        ...state,
        isRegistered: true,
        userId: action.payload,
      };

    case SET_USER_ID:
      return {
        ...state,
        userId: action.payload,
      };
      
    default:
      return state;
  }
};

export default userReducer;
