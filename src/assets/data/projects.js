import groupomaniaLogo from "../img/projects/groupomania-logo.png";
import flixLogo from "../img/projects/flix-logo.png";

import kasaImg from "../img/projects/kasa.webp";
import groupomaniaImg from "../img/projects/groupomania.webp";
import covoitImg from "../img/projects/covoit.webp";
import ohmyfoodImg from "../img/projects/ohmyfood.webp";
import flixImg from "../img/projects/flix2.webp";

import kasaVideo from "../vids/kasa.webm";
import groupomaniaVideo from "../vids/groupomania.webm";
import covoitVideo from "../vids/covoit.webm";
import ohmyfoodVideo from "../vids/ohmyfood.webm";
import flixVideo from "../vids/flix.webm";

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
            "base de données (MongoDB Atlas + Mongoose)",
            "authentification (JWT)",
            "routeur (React Router)",
            "state manager (Redux)",
            "module de recherche de trajet",
            "système de réservations",
            "notifications par mail (Nodemailer)",
            "messagerie interne entre utilisateurs",
            "API externe pour les noms de communes",
        ],
        mainTechs: ["MongoDB", "ReactJS", "Redux"],
        techs: [
            "MongoDB",
            // "JavaScript",
            "Node.js",
            "Express",
            "JWT",
            "ReactJS",
            "Redux",
            "Material UI",
            "Nodemailer",
        ],
        projectType: "applications complètes",
        gitHubLink: "https://github.com/TomDvpmt/covoit-frontend",
        url: "https://covoit.onrender.com/",
    },

    {
        id: 2,
        title: "Application de recherche de films (avec API externe)",
        shortTitle: "Recherche de films",
        logoUrl: flixLogo,
        imgUrl: flixImg,
        videoUrl: flixVideo,
        description:
            "Création d'une application de recherche de films avec une API externe",
        features: [
            "base de données pour les fonctionnalités utilisateur (MongoDB Atlas + Mongoose)",
            "authentification (JWT)",
            "routeur (React Router)",
            "state manager (Redux)",
            "donnés cinéma issues d'une API externe (The Movie Database)",
            "module de recherche par titre",
            "filtrage par date et genre",
            "tableau de bord avec films favoris, films vus et films à voir",
            "fiches individuelles avec filmographie complète pour les réalisateurs, scénaristes et acteurs",
        ],
        mainTechs: ["MongoDB", "ReactJS", "Redux"],
        techs: [
            "MongoDB",
            // "JavaScript",
            "Node.js",
            "Express",
            "JWT",
            "ReactJS",
            "Redux",
            "Material UI",
        ],
        projectType: "applications complètes",
        gitHubLink: "https://github.com/TomDvpmt/80s-90s-Flicks-frontend",
        url: "https://flicks80s90s.onrender.com/",
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
            "base de données (MySQL, sans ORM/ODM)",
            "authentification (JWT)",
            "routeur (React Router)",
            "state manager (Redux)",
            "forum avec posts et commentaires",
            "possibilité de poster des images (Multer)",
            "système de likes",
            "chat en temps réel (Socket.io)",
        ],
        mainTechs: ["MySQL", "ReactJS", "Redux"],
        techs: [
            "MySQL",
            // "JavaScript",
            "Node.js",
            "Express",
            "JWT",
            "ReactJS",
            "Redux",
            "Material UI",
            "Socket.io",
        ],
        projectType: "applications complètes",
        gitHubLink: "https://github.com/TomDvpmt/groupomania-frontend",
        url: "",
    },
    {
        id: 4,
        title: "Intégration avec React de la maquette Figma d'une application immobilière",
        shortTitle: "Location immobilière",
        logoUrl: "",
        imgUrl: kasaImg,
        videoUrl: kasaVideo,
        description:
            "Création du front-end d'une application de location immobilière à partir d'une maquette Figma",
        features: [
            "navigation avec routeur (React Router)",
            "modules CSS",
            "responsive (mobile-first)",
            "animations CSS",
            "slider",
        ],
        mainTechs: ["ReactJS"],
        techs: [
            // "JavaScript",
            "ReactJS",
        ],
        projectType: "front-end",
        gitHubLink: "https://github.com/TomDvpmt/OC_DevWeb_P7_Kasa",
        url: "https://tomdvpmt-kasa.netlify.app/",
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
        features: ["Animations CSS", "responsive (mobile-first)"],
        mainTechs: ["Sass"],
        techs: [
            // "JavaScript",
            "Sass",
        ],
        projectType: "front-end",
        gitHubLink: "https://github.com/TomDvpmt/OC_DevWeb_P3_OhMyFood",
        url: "https://tomdvpmt-ohmyfood.netlify.app/",
    },
];

export default projects;
