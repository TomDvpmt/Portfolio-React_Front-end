import { render, screen } from "@testing-library/react";
import SocialLinks from "./SocialLinks";
import About from "../sections/About";

describe("SocialLinks", () => {
    it("should render without crash", async () => {
        render(<SocialLinks tabIndex={0} />);
    });
    it("should include a LinkedIn link", async () => {
        render(<SocialLinks tabIndex={0} />);
        const link = screen.getByTestId("linkedin");
        expect(link.href).toMatch(/linkedin/);
    });
    it("should include a GitHub link", async () => {
        render(<SocialLinks tabIndex={0} />);
        const link = screen.getByTestId("github");
        expect(link.href).toMatch(/github/);
    });
    // it("should be navigable with the keyboard when visible", async () => {

    // });
});
