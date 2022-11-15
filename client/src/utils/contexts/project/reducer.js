import { GET_PROJECTS, ADD_PROJECT, DELETE_PROJECT } from "./actions";

const reducer = (state, action) => {
  switch (action.type) {
    case ADD_PROJECT:
      return {
        ...state,
        project: { ...action.payload.project },
      };

    // case REGISTER_USER_SUCCESS:
    //   return {
    //     ...state,
    //     isLoading: false,
    //     token: action.payload.token,
    //     user: action.payload.user,
    //     showAlert: true,
    //     alertType: "success",
    //     alertText: "User created! Redirecting...",
    //   };

    default:
      throw new Error(`no such action: ${action.type}`);
  }
};

export default reducer;
