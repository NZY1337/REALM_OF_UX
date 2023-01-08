const token = localStorage.getItem("token");
const user = localStorage.getItem("user");
const userInfo = user ? JSON.parse(user) : null;

export const initialState = {
  isLoading: false,
  user: user ? JSON.parse(user) : null,
  userInfo: {
    name: (userInfo && userInfo.name) || "",
    email: (userInfo && userInfo.email) || "",
    avatar: (userInfo && userInfo.avatar) || "",
    password: "",
    newPassword: "",
    isMember: true, // only a switch used to toggle from login/register inputs
  },
  token: token,
};
