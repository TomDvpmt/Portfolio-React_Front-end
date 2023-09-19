import ProjectsListTitle from "./ProjectsListTitle";
import { render, screen } from "@testing-library/react";
import theme from "../styles/theme";

describe("ProjectsListTitle", () => {
    it("should render without crashing", async () => {
        render(<ProjectsListTitle label={"something"} />);
    });
    it("should display the label with the first letter in uppercase", async () => {
        render(<ProjectsListTitle label={"something"} />);
        const title = screen.getByTestId("title").textContent;
        expect(title).toEqual("Something");
    });
    it("should display 2 lines around title on large screens", async () => {
        const largeScreenQuery = theme.breakpoints
            .up("lg")
            .replace(/@media /, "");

        window.matchMedia = jest.fn().mockImplementation((query) => ({
            matches: query === largeScreenQuery,
            media: "",
            onChange: null,
            addListener: jest.fn(),
            removeListener: jest.fn(),
        }));

        render(<ProjectsListTitle label={"something"} />);
        const lines = screen.getAllByTestId("title-line");
        expect(lines.length).toEqual(2);
    });
});
