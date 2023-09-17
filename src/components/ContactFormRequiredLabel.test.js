import ContactFormRequiredLabel from "./ContactFormRequiredLabel";
import { render, screen } from "@testing-library/react";

describe("ContactFormRequiredLabel", () => {
    it("should render without crashing", () => {
        render(<ContactFormRequiredLabel />);
    });
    it("should add a '*' to an input label", async () => {
        render(<ContactFormRequiredLabel label={"Something"} />);
        const label = screen.getByTestId("label").textContent;
        const asterisk = screen.getByTestId("asterisk").textContent;
        expect(label + asterisk).toEqual("Something *");
    });
});
