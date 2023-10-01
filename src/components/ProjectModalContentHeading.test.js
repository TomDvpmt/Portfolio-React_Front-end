import ProjectModalContentHeading from "./ProjectModalContentHeading";
import { render, screen } from "@testing-library/react";

describe("ProjectModalContentHeading", () => {
    it("should render without crashing", () => {
        render(<ProjectModalContentHeading />);
    });
    it("should display a line element and a label", async () => {
        const { container } = render(
            <ProjectModalContentHeading
                label={"Some title"}
                linePosition={"left"}
            />
        );
        const line = container.querySelectorAll(".title-line").item(0);
        const heading = screen.getByTestId("content-heading");
        expect(line && heading).toBeTruthy();
    });
    it("should display the label passed in props", async () => {
        const { container } = render(
            <ProjectModalContentHeading
                label={"Some title"}
                linePosition={"left"}
            />
        );
        const heading = screen.getByText("Some title");
        expect(heading).toBeTruthy();
    });
});
