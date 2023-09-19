import { useState as useStateMock } from "react";
import ProjectsListCard from "./ProjectsListCard";
import { getByText, render, screen } from "@testing-library/react";

jest.mock("react", () => ({
    ...jest.requireActual("react"),
    useState: jest.fn(),
}));
const setState = jest.fn();

describe("ProjectsListCard", () => {
    beforeEach(() => {
        useStateMock.mockImplementation((init) => [init, setState]);
    });
    const mockProject = {
        description: "Site de vente d'articles de randonnée",
        done: false,
        features: [
            "compte utilisateur",
            "plusieurs catégories de produits",
            "aperçu et page dédiée pour chaque produit",
            "consitution d'un panier",
            "tunnel de commande (facturation, confirmation, paiement)",
        ],
        gitHubLink: "https://github.com/TomDvpmt/php-oop-mvc-training-2",
        imgUrl: "/static/media/hike.c61c63f751c8ad697e85.jpg",
        logoUrl: "",
        mainTechs: ["PHP", "MySQL", "Sass"],
        projectType: "fullstack",
        shortTitle: "E-commerce (en cours)",
        techs: ["HTML", "CSS", "PHP", "MySQL", "Sass"],
        title: "Site de e-commerce (en cours de développement)",
        tools: [
            "programmation orientée objet",
            "architecture MVC",
            "routing",
            "authentification",
        ],
        url: "",
        videoUrl: "",
    };
    it("should render without crashing", async () => {
        render(
            <ProjectsListCard
                project={mockProject}
                tabIndex={0}
                setProjectToShow={setState}
                setShowDialog={setState}
            />
        );
    });
    it("should display the project's short title", async () => {
        render(
            <ProjectsListCard
                project={mockProject}
                tabIndex={0}
                setProjectToShow={setState}
                setShowDialog={setState}
            />
        );
        const title = screen.getByTestId("project-short-title");
        expect(title.textContent).toEqual(mockProject.shortTitle);
    });
    it("should display a thumbnail of the project with an alt text of project title", async () => {
        render(
            <ProjectsListCard
                project={mockProject}
                tabIndex={0}
                setProjectToShow={setState}
                setShowDialog={setState}
            />
        );
        const img = screen.getByTestId("thumbnail");
        expect(img.alt).toEqual(mockProject.title);
    });
    it("should display the project's main techs", async () => {
        const { container } = render(
            <ProjectsListCard
                project={mockProject}
                tabIndex={0}
                setProjectToShow={setState}
                setShowDialog={setState}
            />
        );
        const techElements = Array.from(container.querySelectorAll(".tech"));
        const techs = techElements.map(
            (tech) => tech.querySelector("span").textContent
        );
        expect(techs).toEqual(mockProject.mainTechs);
    });
});
