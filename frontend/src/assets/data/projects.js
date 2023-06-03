import mockImg from "../img/projects/mock-img.jpg";
import mockImg2 from "../img/projects/mock-img2.jpg";

const projects = [
    {
        id: 1,
        title: "Réseau social d'entreprise (Groupomania)",
        imgUrl: mockImg,
        description:
            "Création du back-end et front-end d'un réseau social avec forum et chat, avec React et Redux",
        features:
            "Single Page Application, authentification (JWT), BDD : MySQL sans ORM/ODM, forum avec posts et commentaires, possibilité de poster des images (Multer), système de likes, chat en temps réel avec WebSocket",
        techs: [
            "MySQL",
            "JavaScript",
            "Node.js",
            "Express",
            "JWT",
            "React",
            "Redux",
            "MaterialUI",
            "Socket.io",
        ],
        gitHubLink: "https://github.com/TomDvpmt/OC_DevWeb_OldP7_Groupomania",
        url: "",
    },
    {
        id: 2,
        title: "Application de covoiturage (Covoit')",
        imgUrl: mockImg2,
        description:
            "Création d'une application de covoiturage avec React et Redux",
        features:
            "Single Page Application, authentification (JWT), BDD : MongoDB Atlas + Mongoose, module de recherche de trajet, système de réservations, notifications par mail (Nodemailer), messagerie interne entre utilisateurs, API externe pour les noms de communes",
        techs: [
            "MongoDB",
            "JavaScript",
            "Node.js",
            "Express",
            "JWT",
            "React",
            "Redux",
            "MaterialUI",
            "Nodemailer",
        ],
        gitHubLink: "https://github.com/TomDvpmt/Covoit",
        url: "",
    },
    {
        id: 3,
        title: "Application de recherche de films (80s-90s Flix)",
        imgUrl: mockImg,
        description:
            "Création d'une application de recherche de films avec React, Redux et une API externe",
        features:
            "Single Page Application, authentification (JWT), BDD : MongoDB Atlas + Mongoose, module de recherche de film, filtrage par date et genre, tableau de bord avec films favoris, films vus et films à voir.",
        techs: [
            "MongoDB",
            "JavaScript",
            "Node.js",
            "Express",
            "JWT",
            "React",
            "Redux",
            "MaterialUI",
        ],
        gitHubLink: "https://github.com/TomDvpmt/80s-90s-Flix",
        url: "",
    },
    {
        id: 4,
        title: "Application de commandes en ligne (Oh My Food)",
        imgUrl: mockImg,
        description:
            "Création d'une application mobile-first de commandes de repas en ligne avec Sass, à partir d'une maquette et d'un brief créatif",
        features: "Animations CSS, mobile-first, responsive",
        techs: ["JavaScript", "Sass"],
        gitHubLink: "https://github.com/TomDvpmt/OC_DevWeb_P3_OhMyFood",
        url: "",
    },
    {
        id: 5,
        title: "Application de location immobilière (Kasa)",
        imgUrl: mockImg2,
        description:
            "Création du front-end d'une application de location immobilière avec React, à partir d'une maquette Figma",
        features:
            "Single Page Application, menus déroulants, slider, modules CSS, mobile-first, responsive",
        techs: ["JavaScript", "React"],
        gitHubLink: "https://github.com/TomDvpmt/OC_DevWeb_P7_Kasa",
        url: "",
    },
];

export default projects;
