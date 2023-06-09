import mockImg from "../img/projects/mock-img.jpg";
import mockImg2 from "../img/projects/mock-img2.jpg";

import groupomaniaLogo from "../img/projects/groupomania-logo.png";

import kasaImg from "../img/projects/kasa.webp";
import groupomaniaImg from "../img/projects/groupomania.webp";
import covoitImg from "../img/projects/covoit.webp";
import ohmyfoodImg from "../img/projects/ohmyfood.webp";

import kasaVideo from "../vids/kasa.webm";
import groupomaniaVideo from "../vids/groupomania.webm";
import covoitVideo from "../vids/covoit.webm";
import ohmyfoodVideo from "../vids/ohmyfood.webm";

const projects = [
    {
        id: 1,
        title: "Application de covoiturage avec module de réservation",
        shortTitle: "Covoiturage",
        logoUrl: "",
        imgUrl: covoitImg,
        videoUrl: covoitVideo,
        description:
            "Création d'une application de covoiturage avec module de réservation",
        features: [
            "Single Page Application",
            "authentification (JWT)",
            "base de données : MongoDB Atlas + Mongoose",
            "module de recherche de trajet",
            "système de réservations",
            "notifications par mail (Nodemailer)",
            "messagerie interne entre utilisateurs",
            "API externe pour les noms de communes",
        ],
        mainTechs: ["MongoDB", "React", "Redux"],
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
        stackType: "fullstack",
        gitHubLink: "https://github.com/TomDvpmt/Covoit",
        url: "",
    },

    {
        id: 2,
        title: "Application de recherche de films avec une API externe",
        shortTitle: "Recherche de films",
        logoUrl: "",
        imgUrl: mockImg,
        videoUrl: "",
        description:
            "Création d'une application de recherche de films avec une API externe",
        features: [
            "Single Page Application",
            "authentification (JWT)",
            "base de données : MongoDB Atlas + Mongoose",
            "module de recherche de film",
            "filtrage par date et genre",
            "tableau de bord avec films favoris, films vus et films à voir",
        ],
        mainTechs: ["MongoDB", "React", "Redux"],
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
        stackType: "fullstack",
        gitHubLink: "https://github.com/TomDvpmt/80s-90s-Flix",
        url: "",
    },
    {
        id: 3,
        title: "Réseau social avec forum et chat en temps réel",
        shortTitle: "Réseau social",
        logoUrl: groupomaniaLogo,
        imgUrl: groupomaniaImg,
        videoUrl: groupomaniaVideo,
        description:
            "Création d'un réseau social avec forum et chat en temps réel",
        features: [
            "Single Page Application",
            "authentification (JWT)",
            "base de données : MySQL (sans ORM/ODM)",
            "forum avec posts et commentaires",
            "possibilité de poster des images (Multer)",
            "système de likes",
            "chat en temps réel avec Socket.io",
        ],
        mainTechs: ["MySQL", "React", "Redux"],
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
        stackType: "fullstack",
        gitHubLink: "https://github.com/TomDvpmt/OC_DevWeb_OldP7_Groupomania",
        url: "",
    },
    {
        id: 4,
        title: "Application de location immobilière à partir d'une maquette Figma (front-end)",
        shortTitle: "Location immobilière",
        logoUrl: "",
        imgUrl: kasaImg,
        videoUrl: kasaVideo,
        description:
            "Création du front-end d'une application de location immobilière à partir d'une maquette Figma",
        features: [
            "Single Page Application",
            "menus déroulants",
            "slider",
            "modules CSS",
            "mobile-first",
            "responsive",
        ],
        mainTechs: ["React"],
        techs: ["JavaScript", "React"],
        stackType: "front-end",
        gitHubLink: "https://github.com/TomDvpmt/OC_DevWeb_P7_Kasa",
        url: "",
    },
    {
        id: 5,
        title: "Intégration de la maquette Figma d'une application de menus en ligne",
        shortTitle: "Menus en ligne",
        logoUrl: "",
        imgUrl: ohmyfoodImg,
        videoUrl: ohmyfoodVideo,
        description:
            "Intégration de la maquette Figma d'une application de menus en ligne",
        features: ["Animations CSS", "mobile-first", "responsive"],
        mainTechs: ["Sass"],
        techs: ["JavaScript", "Sass"],
        stackType: "front-end",
        gitHubLink: "https://github.com/TomDvpmt/OC_DevWeb_P3_OhMyFood",
        url: "",
    },
];

export default projects;