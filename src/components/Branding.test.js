import Branding from "./Branding";

import { render } from "@testing-library/react";

describe("Branding", () => {
    it("should render without crashing", async () => {
        render(<Branding />);
    });
    it("should display 'Portfolio | Thomas Boussion'", async () => {
        const { getByRole } = render(<Branding />);
        const link = getByRole("link", {
            name: "Portfolio | Thomas Boussion",
        });
        expect(link).toBeTruthy();
    });
    it("should send home when clicked", () => {
        const { getByRole } = render(<Branding />);
        const link = getByRole("link", {
            name: "Portfolio | Thomas Boussion",
        });
        const protocol = window.location.protocol;
        const hostname = window.location.hostname;
        expect(link.href).toEqual(protocol + "//" + hostname + "/");
    });
});
