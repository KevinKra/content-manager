import axios from "axios";
import { mocked } from "ts-jest/utils";
import { IPostMediaToS3Res, postMediaToS3 } from "./postMediaToS3";

jest.mock("axios");

const mockedAxios = mocked(axios);
const mockedAxiosPost = mocked(mockedAxios.post);

describe("postMediaToS3()", () => {
  describe("success response", () => {
    beforeEach(() => {
      mockedAxiosPost.mockResolvedValue({
        data: {
          type: "success",
          message: "file uploaded.",
          data: {
            mediaFormat: "mp4",
            bucketURI: "s3...",
          },
        },
      } as IPostMediaToS3Res);
    });

    test("handles success", async () => {
      const result = await postMediaToS3("mock");
      expect(result).toStrictEqual({
        type: "success",
        message: "file uploaded.",
        data: {
          mediaFormat: "mp4",
          bucketURI: "s3...",
        },
      });
    });
  });

  describe("failure response", () => {
    beforeEach(() => {
      mockedAxiosPost.mockRejectedValue({
        response: {
          data: {
            type: "error",
            message: "failed to upload file.",
          },
        } as IPostMediaToS3Res,
      });
    });

    test("handles failure", async () => {
      const result = await postMediaToS3("mock");
      expect(result).toStrictEqual({
        type: "error",
        message: "failed to upload file.",
      });
    });
  });

  describe("failure response -- incoming type mismatch", () => {
    beforeEach(() => {
      mockedAxiosPost.mockRejectedValue({});
    });

    test("handles failure edge case", async () => {
      const result = await postMediaToS3("mock");
      expect(result).toStrictEqual({
        type: "error",
        message: "Oops, something went wrong.",
      });
    });
  });
});
