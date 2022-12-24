import { fetchSingleProject } from "./project";
import { makeRequest } from "./utils";

import { GET_PROJECT_ROUTE } from "./apis";

jest.mock("./apis", () => ({
  GET_PROJECT_ROUTE: (projectId) => `get-project/${projectId}`,
}));

jest.mock("./utils", () => ({
  makeRequest: jest.fn(),
}));

describe("fetchSingleProject", () => {
  it("should make a GET request to GET_PROJECT_ROUTE with the provided projectId and return the response", async () => {
    const projectId = 1;
    const response = { project: { id: 1, name: "Test project" } };
    makeRequest.mockResolvedValue(response);

    const result = await fetchSingleProject(projectId);
    expect(result).toEqual(response);
    expect(makeRequest).toHaveBeenCalledWith(
      "get",
      GET_PROJECT_ROUTE(projectId)
    );
  });
});
