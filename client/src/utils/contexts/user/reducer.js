import {
  REGISTER_USER_BEGIN,
  REGISTER_USER_SUCCESS,
  LOGIN_USER_BEGIN,
  LOGIN_USER_SUCCESS,
  LOGOUT_USER,
  TOGGLE_MEMBER,
  HANDLE_CHANGE,
  UPDATE_USER_BEGIN,
  UPDATE_USER_SUCCESS,
  RESET_LOADING,
  UPDATE_USER_PASSWORD_BEGIN,
  UPDATE_USER_PASSWORD_SUCCESS,
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

    case REGISTER_USER_BEGIN:
    case LOGIN_USER_BEGIN:
    case UPDATE_USER_BEGIN:
    case UPDATE_USER_PASSWORD_BEGIN:
      return {
        ...state,
        isLoading: true,
      };

    case RESET_LOADING:
    case UPDATE_USER_PASSWORD_SUCCESS:
      return {
        ...state,
        isLoading: false,
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
          //   password: "", // clear password, pw is not sent from backend
        },
      };

    case UPDATE_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        token: action.payload.token,
        user: action.payload.user,
        userInfo: {
          ...state.userInfo,
          email: action.payload.user.email,
          name: action.payload.user.name,
          avatar: action.payload.user.avatar,
          //   password: "",
        },
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
          avatar: action.payload.user.avatar,
          //   password: "", // clear password, pw is not sent from backend
        },
      };

    case LOGOUT_USER:
      return {
        ...initialState,
        userInfo: {
          name: "",
          email: "",
          avatar: "",
          password: "",
          newPassword: "",
          isMember: true,
        },
        user: null,
        token: null,
      };

    default:
      throw new Error(`no such action: ${action.type}`);
  }
};

export default reducer;
