import { UPDATE_USER_ROUTE } from "./apis";

import { makeRequest } from "./utils";

export const updateUser = async (updatedUser, token) => {
  const data = await makeRequest(
    "patch",
    UPDATE_USER_ROUTE,
    updatedUser,
    token
  );
  return data;
};
