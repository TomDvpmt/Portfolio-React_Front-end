import SectionHeading from "./SectionHeading";
import { render } from "@testing-library/react";

describe("Sectionheading", () => {
    it("should render without crashing", async () => {
        render(<SectionHeading slug="testSlug" />);
    });
    it("should display the right title depending on the slug passed in props", async () => {
        const { getAllByTestId } = render(<SectionHeading slug="projects" />);
        const heading = getAllByTestId("section-title")[0].textContent;
        expect(heading).toEqual("Projets");
    });
});
