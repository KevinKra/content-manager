import { render, screen } from "@testing-library/react";
import SelectMedia from "./SelectMedia";

jest.mock("react-redux", () => {
  return {
    ...jest.requireActual("react-redux"),
    useSelector: jest.fn().mockImplementation(() => ({})),
    useDispatch: () => jest.fn(),
  };
});

describe("SelectMedia", () => {
  describe("when the component mounts", () => {
    beforeEach(() => {
      render(<SelectMedia />);
    });

    test("no video is selected", () => {
      expect(screen.getByTestId(/video-player-disabled/i)).toBeInTheDocument();
    });

    test("the source url input is enabled", () => {
      expect(screen.getByTestId(/input-source-url/i)).toBeEnabled();
    });

    test("sourceLanguage selection input is disabled", () => {
      expect(
        screen.getByTestId(/input-select-source-language/i)
      ).toBeDisabled();
    });

    test("targetLanguage selection input is disabled", () => {
      expect(
        screen.getByTestId(/input-select-target-language/i)
      ).toBeDisabled();
    });

    test("the submit button is disabled", () => {
      expect(
        screen.getByRole("button", { name: /build lesson/i })
      ).toBeDisabled();
    });
  });

  describe("when a user inputs a url for a youtube video", () => {
    beforeEach(() => {
      render(<SelectMedia />);
    });

    // todo figure out how to trigger an update to redux:
    // todo video found -> update author and media

    describe("if the url is valid", () => {
      test.skip("the VideoPlayer activates with the provided content", () => {
        expect(
          screen.queryByTestId(/video-player-enabled/i)
        ).toBeInTheDocument();
      });

      test.skip("the sourceLanguage input is no longer disabled", () => {
        expect(
          screen.getByTestId(/input-select-source-language/i)
        ).toBeEnabled();
      });

      test.skip("the targetLanguage input is no longer disabled", () => {
        expect(
          screen.getByTestId(/input-select-target-language/i)
        ).toBeEnabled();
      });

      test.skip("the submit button is still disabled", () => {
        expect(
          screen.getByRole("button", { name: /build lesson/i })
        ).toBeDisabled();
      });
    });

    describe("if the url is invalid", () => {
      test.todo("the VideoPlayer does not activate");
      // test.todo("a failure snackbar appears");
      test.todo("the sourceLanguage remains disabled");
      test.todo("the targetLanguage remains disabled");
      test.todo("the submit button remains disabled");
    });
  });
  describe("when all inputs have values", () => {
    test.todo("the submit button is no longer disabled");
    describe("when the submit button is clicked", () => {
      test.todo("the submit button changes to the loading variant");
      test.todo("once the job is complete, a success snackbar appears");
      test.todo("after a delay, the page changes");
    });
  });
});
