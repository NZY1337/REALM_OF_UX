import {
  DISPLAY_ALERT,
  CLEAR_ALERT,
  REGISTER_USER_BEGIN,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_ERROR,
  LOGIN_USER_BEGIN,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_ERROR,
  LOGOUT_USER,
  TOGGLE_MEMBER,
  HANDLE_CHANGE,
} from "./actions";

import { initialState } from "./utils";

const reducer = (state, action) => {
  switch (action.type) {
    case HANDLE_CHANGE.TEXT:
      const { targetText } = action.payload; // e.target
      return {
        ...state,
        userInfo: {
          ...state.userInfo,
          [targetText.name]: targetText.value,
        },
      };

    case HANDLE_CHANGE.IMAGE:
      const { targetImage, avatar } = action.payload; // e.target
      console.log(targetImage, avatar);
      return {
        ...state,
        userInfo: {
          ...state.userInfo,
          [targetImage.name]: avatar,
        },
      };

    case TOGGLE_MEMBER:
      return {
        ...state,
        userInfo: {
          ...state.userInfo,
          isMember: !state.userInfo.isMember,
        },
      };

    case DISPLAY_ALERT:
      return {
        ...state,
        showAlert: true,
        alertType: "danger",
        alertText: "Please provide all values!",
      };

    case CLEAR_ALERT:
      return {
        ...state,
        showAlert: false,
        alertType: "",
        alertText: "",
      };

    case REGISTER_USER_BEGIN:
    case LOGIN_USER_BEGIN:
      return {
        ...state,
        isLoading: true,
      };

    case REGISTER_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        token: action.payload.token,
        user: action.payload.user,
        userInfo: {
          ...state.userInfo,
          email: action.payload.user.email,
          name: action.payload.user.name,
          password: "", // clear password, pw is not sent from backend
        },
        showAlert: true,
        alertType: "success",
        alertText: "User created! Redirecting...",
      };

    case REGISTER_USER_ERROR:
    case LOGIN_USER_ERROR:
      return {
        ...state,
        isLoading: false,
        showAlert: true,
        alertType: "danger",
        alertText: action.payload.msg,
      };

    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        token: action.payload.token,
        user: action.payload.user,
        userInfo: {
          ...state.userInfo,
          email: action.payload.user.email,
          name: action.payload.user.name,
          password: "", // clear password, pw is not sent from backend
        },
        showAlert: true,
        alertType: "success",
        alertText: "Login Successful! Redirecting...",
      };

    case LOGOUT_USER:
      return { ...initialState, user: null, token: null };

    default:
      throw new Error(`no such action: ${action.type}`);
  }
};

export default reducer;
