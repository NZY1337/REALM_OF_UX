import { UPDATE_USER_ROUTE, UPDATE_USER_PASSWORD } from "./apis";

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

export const updateUserPassword = async (passwords, token) => {
    console.log(passwords)
    const data = await makeRequest(
        "patch",
        UPDATE_USER_PASSWORD,
        passwords,
        token
    );
    
    return data;
}
