import React, {
  useReducer,
  useContext,
  useMemo,
  useCallback,
  useEffect,
} from "react";
import {
  DISPLAY_ALERT,
  CLEAR_ALERT,
  REGISTER_USER_BEGIN,
  REGISTER_USER_SUCCESS,
  LOGIN_USER_BEGIN,
  LOGIN_USER_SUCCESS,
  LOGOUT_USER,
  TOGGLE_MEMBER,
  HANDLE_CHANGE,
} from "./actions";
import reducer from "./reducer";
import axios from "axios";
import { notify } from "../../helpers";
import { uploadImageToPublicFolder } from "../../services/image_upload";
import { initialState } from "./utils";

const UserContext = React.createContext();

const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log("STATE CHHANGED");

  const registerUser = useCallback(async (currentUser) => {
    dispatch({
      type: REGISTER_USER_BEGIN,
    });

    try {
      const response = await axios.post("/api/v1/auth/register", currentUser);
      const { user, token } = response.data;

      dispatch({
        type: REGISTER_USER_SUCCESS,
        payload: { token, user },
      });
      notify("success", `User created successfully!`);

      // add user to localStorage
      addUserToLocalStorage({ user, token });
    } catch (error) {
      notify("warning", error.response.data.msg);
    }
    clearAlert();
  }, []);

  const loginUser = useCallback(async (currentUser) => {
    console.log("LOGIN");
    dispatch({
      type: LOGIN_USER_BEGIN,
    });

    try {
      const { data } = await axios.post("/api/v1/auth/login", currentUser);
      const { user, token } = data;

      dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: { token, user },
      });
      notify("success", `Welcome back, ${user.name}`);
      // add user to localStorage
      addUserToLocalStorage({ user, token });
    } catch (error) {
      notify("warning", error.response.data.msg);
    }
    clearAlert();
  }, []);

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      const {
        userInfo: { name, email, password, isMember },
      } = state;

      if (!email || !password || (!isMember && !name)) {
        notify("warning", "Please provide all values!");
        return;
      }

      const currentUser = { name, email, password };

      if (isMember) {
        loginUser(currentUser);
      } else {
        registerUser(currentUser);
      }
    },
    [loginUser, registerUser, state]
  );

  const handleChange = useCallback(
    async (e) => {
      if (e.target.files) {
        console.log("file");
        const { src: avatar, msg: error } = await uploadImageToPublicFolder(
          e.target.files[0],
          state.userInfo.name
        );

        dispatch({
          type: HANDLE_CHANGE.IMAGE,
          payload: { targetImage: e.target, avatar },
        });
      } else {
        console.log("text");
        dispatch({
          type: HANDLE_CHANGE.TEXT,
          payload: { targetText: e.target },
        });
      }
    },
    [state.userInfo.name]
  );

  const toggleMember = useCallback(() => {
    dispatch({ type: TOGGLE_MEMBER });
  }, []);

  const displayAlert = useCallback(() => {
    dispatch({ type: DISPLAY_ALERT });

    clearAlert();
  }, []);

  const clearAlert = () => {
    setTimeout(() => {
      dispatch({ type: CLEAR_ALERT });
    }, 3000);
  };

  const addUserToLocalStorage = ({ user, token }) => {
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("token", token);
  };

  const removeUserFromLocalStorage = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  };

  const logoutUser = useCallback(() => {
    dispatch({ type: LOGOUT_USER });
    removeUserFromLocalStorage();
    notify("success", "You successfully logged out!");
  }, []);

  return (
    <UserContext.Provider
      value={useMemo(
        () => ({
          ...state,
          displayAlert,
          registerUser,
          loginUser,
          logoutUser,
          toggleMember,
          handleChange,
          onSubmit,
        }),
        [
          state,
          displayAlert,
          registerUser,
          loginUser,
          logoutUser,
          toggleMember,
          handleChange,
          onSubmit,
        ]
      )}
    >
      {children}
    </UserContext.Provider>
  );
};

const useUserContext = () => useContext(UserContext);

export { UserProvider, useUserContext, initialState };
