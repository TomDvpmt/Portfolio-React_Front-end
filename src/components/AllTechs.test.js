import { ALL_TECHS, TYPES_ARRAY } from "../assets/data/techs";
import AllTechs from "./AllTechs";
import { render, screen } from "@testing-library/react";

describe("AllTechs", () => {
    it("should render without crashing", async () => {
        render(
            <AllTechs
                typesArray={TYPES_ARRAY}
                techsArray={ALL_TECHS}
                hasTitle={true}
            />
        );
    });
    it("should display all techs", async () => {
        const { container } = render(
            <AllTechs
                typesArray={TYPES_ARRAY}
                techsArray={ALL_TECHS}
                hasTitle={true}
            />
        );
        const techs = container.getElementsByClassName("tech");
        expect(techs).toHaveLength(ALL_TECHS.length);
    });
    it("should display techs in as many columns as there are types of techs", async () => {
        const { container } = render(
            <AllTechs
                typesArray={TYPES_ARRAY}
                techsArray={ALL_TECHS}
                hasTitle={true}
            />
        );
        const columns = container.getElementsByClassName("tech-type-column");
        expect(columns.length).toEqual(TYPES_ARRAY.length);
    });
});
