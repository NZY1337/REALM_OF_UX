import { publishComment, getComments, removeComment } from "./comments";
import { makeRequest } from "./utils";
import {
  ADD_COMMENT_ROUTE,
  GET_COMMENTS_ROUTE,
  DELETE_COMMENT_ROUTE,
} from "./apis";

console.log(makeRequest);

jest.mock("./apis", () => ({
  ADD_COMMENT_ROUTE: "add-comment",
  GET_COMMENTS_ROUTE: (projectId) => `get-comments/${projectId}`,
  DELETE_COMMENT_ROUTE: "delete-comment",
}));

jest.mock("./utils", () => ({
  makeRequest: jest.fn(),
}));

describe("publishComment", () => {
  it("should make a POST request to ADD_COMMENT_ROUTE with the provided comment and return the userComment from the response", async () => {
    const comment = { text: "This is a test comment" };
    const response = { userComment: { id: 1, text: "This is a test comment" } };
    makeRequest.mockResolvedValue(response);

    const result = await publishComment(comment);
    expect(result).toEqual(response.userComment);
    expect(makeRequest).toHaveBeenCalledWith(
      "post",
      ADD_COMMENT_ROUTE,
      comment
    );
  });

  it("should return the userComment from the response", async () => {
    makeRequest.mockResolvedValue({ userComment: { text: "Test comment" } });

    const result = await publishComment({});

    expect(result).toEqual({ text: "Test comment" });
  });
});

describe("getComments", () => {
  it("should make a GET request to the get-comments route with the given projectId", async () => {
    makeRequest.mockResolvedValue({});

    const projectId = "123";

    await getComments(projectId);

    expect(makeRequest).toHaveBeenCalledWith(
      "get",
      GET_COMMENTS_ROUTE(projectId)
    );
  });

  it("should return the data from the response", async () => {
    makeRequest.mockResolvedValue({ comments: [{ text: "Test comment" }] });

    const result = await getComments("123");

    expect(result).toEqual({ comments: [{ text: "Test comment" }] });
  });
});

describe("removeComment", () => {
  it("should make a DELETE request to the delete-comment route with the given commentId", async () => {
    makeRequest.mockResolvedValue({});

    const commentId = "123";

    await removeComment(commentId);

    expect(makeRequest).toHaveBeenCalledWith("delete", DELETE_COMMENT_ROUTE, {
      commentId,
    });
  });

  it("should return the data from the response", async () => {
    makeRequest.mockResolvedValue({ success: true });

    const result = await removeComment("123");

    expect(result).toEqual({ success: true });
  });
});
