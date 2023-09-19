import TechsList from "./TechsList";
import { render, screen } from "@testing-library/react";
import { ALL_TECHS } from "../assets/data/techs";

describe("TechsList", () => {
    const someTechs = ALL_TECHS.filter((item) => item.type === "front-end");

    it("should render without crashing", async () => {
        render(<TechsList techsArray={ALL_TECHS} location={"About"} />);
    });

    it("should display all techs from the array of techs received as prop", async () => {
        render(<TechsList techsArray={someTechs} location={"About"} />);
        const techElements = screen.getAllByTestId("tech");

        expect(techElements.length).toEqual(someTechs.length);
    });

    it("should only display techs from the array received as prop", async () => {
        render(<TechsList techsArray={someTechs} location={"About"} />);
        const techNamesSupposedToBeRendered = someTechs.map(
            (item) => item.label
        );
        const renderedTechNames = screen
            .getAllByTestId("tech-name")
            .map((item) => item.textContent);

        expect(renderedTechNames).toEqual(techNamesSupposedToBeRendered);
    });
});
