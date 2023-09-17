import groupomaniaLogo from "../img/projects/groupomania-logo.png";
import flixLogo from "../img/projects/flix-logo.png";

import hikeImg from "../img/projects/hike.jpg";
import kasaImg from "../img/projects/kasa.webp";
import groupomaniaImg from "../img/projects/groupomania.webp";
import covoitImg from "../img/projects/covoit.webp";
import portfolioImg from "../img/projects/portfolio.webp";
import ohmyfoodImg from "../img/projects/ohmyfood.webp";
import flixImg from "../img/projects/flix2.webp";

import kasaVideo from "../vids/kasa.webm";
import groupomaniaVideo from "../vids/groupomania.webm";
import covoitVideo from "../vids/covoit.webm";
import portfolioVideo from "../vids/portfolio.webm";
import ohmyfoodVideo from "../vids/ohmyfood.webm";
import flixVideo from "../vids/flix.webm";

const projects = [
    {
        title: "Site de e-commerce (en cours de développement)",
        shortTitle: "E-commerce (en cours)",
        logoUrl: "",
        imgUrl: hikeImg,
        videoUrl: "",
        description: "Site de vente d'articles de randonnée",
        tools: [
            "programmation orientée objet",
            "architecture MVC",
            "routing",
            "authentification",
        ],
        features: [
            "compte utilisateur",
            "plusieurs catégories de produits",
            "aperçu et page dédiée pour chaque produit",
            "consitution d'un panier",
            "tunnel de commande (facturation, confirmation, paiement)",
        ],
        mainTechs: ["PHP", "MySQL", "Sass"],
        techs: ["HTML", "CSS", "PHP", "MySQL", "Sass"],
        projectType: "fullstack",
        gitHubLink: "https://github.com/TomDvpmt/php-oop-mvc-training-2",
        url: "",
        done: false,
    },
    {
        title: "Application de recherche de films (avec API externe)",
        shortTitle: "Recherche de films",
        logoUrl: flixLogo,
        imgUrl: flixImg,
        videoUrl: flixVideo,
        description:
            "Création d'une application de recherche de films avec une API externe",
        tools: [
            "base de données pour les fonctionnalités utilisateur (MongoDB Atlas + Mongoose)",
            "authentification (JWT) et compte utilisateur",
            "sécurité : mot de passe chiffré en BDD + token dans un cookie httpOnly",
            "routeurs en back-end (Express) et front-end (React Router)",
            "state manager (Redux)",
            "dialogue avec API externe pour les données cinéma (The Movie Database)",
        ],
        features: [
            "module de recherche par titre",
            "filtrage par date et genre",
            "choix de la langue pour toute l'application (français / anglais)",
            "profil d'utilisateur avec photo",
            "tableau de bord avec films favoris, films vus et films à voir",
            "fiches individuelles avec filmographie complète pour les réalisateurs, scénaristes et acteurs",
        ],
        mainTechs: ["MongoDB", "ReactJS", "Redux"],
        techs: [
            "MongoDB",
            "HTML",
            "CSS",
            "JavaScript",
            "Node.js",
            "Express",
            "JWT",
            "ReactJS",
            "Redux",
            "Material UI",
        ],
        projectType: "fullstack",
        gitHubLink: "https://github.com/TomDvpmt/80s-90s-Flixx-frontend",
        url: "https://flixx80s90s.netlify.app/",
        done: true,
    },
    {
        title: "Application de covoiturage avec module de réservation",
        shortTitle: "Covoiturage",
        logoUrl: "",
        imgUrl: covoitImg,
        videoUrl: covoitVideo,
        description:
            "Création d'une application de covoiturage avec module de réservation",
        tools: [
            "base de données (MongoDB Atlas + Mongoose)",
            "authentification (JWT) et compte utilisateur",
            "sécurité : mot de passe chiffré en BDD",
            "routeurs en back-end (Express) et front-end (React Router)",
            "state manager (Redux)",
        ],
        features: [
            "module de recherche de trajet",
            "système de réservations",
            "notifications par mail (Nodemailer)",
            "messagerie interne entre utilisateurs",
            "API externe pour les noms de communes",
        ],
        mainTechs: ["MongoDB", "ReactJS", "Redux"],
        techs: [
            "MongoDB",
            "HTML",
            "CSS",
            "JavaScript",
            "Node.js",
            "Express",
            "JWT",
            "ReactJS",
            "Redux",
            "Material UI",
            "Nodemailer",
        ],
        projectType: "fullstack",
        gitHubLink: "https://github.com/TomDvpmt/covoit-frontend",
        url: "https://covoit.onrender.com/",
        done: true,
    },
    {
        title: "Réseau social avec forum et chat en temps réel",
        shortTitle: "Réseau social",
        logoUrl: groupomaniaLogo,
        imgUrl: groupomaniaImg,
        videoUrl: groupomaniaVideo,
        description:
            "Création d'un réseau social avec forum et chat en temps réel",
        tools: [
            "base de données (MySQL, sans ORM/ODM)",
            "authentification (JWT) et compte utilisateur",
            "sécurité : mot de passe chiffré en BDD",
            "routeurs en back-end (Express) et front-end (React Router)",
            "state manager (Redux)",
            "canal de communication bidirectionnelle serveur-client (Socket.io)",
        ],
        features: [
            "forum avec posts et commentaires",
            "possibilité de poster des images",
            "système de likes",
            "chat en temps réel",
        ],
        mainTechs: ["MySQL", "ReactJS", "Redux"],
        techs: [
            "MySQL",
            "HTML",
            "CSS",
            "JavaScript",
            "Node.js",
            "Express",
            "JWT",
            "ReactJS",
            "Redux",
            "Material UI",
            "Socket.io",
        ],
        projectType: "fullstack",
        gitHubLink: "https://github.com/TomDvpmt/groupomania-frontend",
        url: "",
        done: true,
    },
    {
        title: "Portfolio",
        shortTitle: "Portfolio",
        logoUrl: "",
        imgUrl: portfolioImg,
        videoUrl: portfolioVideo,
        description: "Création d'un portfolio d'applications",
        tools: [
            "typage des props avec prop-types",
            "back-end minimal, uniquement pour le formulaire de contact (NodeMailer)",
        ],
        features: [
            "navigation horizontale",
            "mosaïque de projets",
            "aperçu vidéo de chaque projet",
            "fiche détaillée pour chaque projet, avec liste des outils de développement, fonctionnalités et technologies",
            "liens GitHub et liens de test des applications",
            "formulaire de contact",
        ],
        mainTechs: ["ReactJS", "Material UI"],
        techs: [
            "HTML",
            "CSS",
            "JavaScript",
            "Node.js",
            "ReactJS",
            "Material UI",
            "Nodemailer",
        ],
        projectType: "front-end",
        gitHubLink: "https://github.com/TomDvpmt/Portfolio-React_Front-end",
        url: "",
        done: true,
    },
    {
        title: "Intégration avec React de la maquette Figma d'une application immobilière",
        shortTitle: "Location immobilière",
        logoUrl: "",
        imgUrl: kasaImg,
        videoUrl: kasaVideo,
        description:
            "Création du front-end d'une application de location immobilière à partir d'une maquette Figma",
        tools: ["navigation avec routeur (React Router)", "modules CSS"],
        features: ["animations", "responsive (mobile-first)", "slider"],
        mainTechs: ["ReactJS"],
        techs: ["HTML", "CSS", "JavaScript", "ReactJS"],
        projectType: "front-end",
        gitHubLink: "https://github.com/TomDvpmt/OC_DevWeb_P7_Kasa",
        url: "https://tomdvpmt-kasa.netlify.app/",
        done: true,
    },
    {
        title: "Intégration de la maquette Figma d'une application de menus en ligne",
        shortTitle: "Menus en ligne",
        logoUrl: "",
        imgUrl: ohmyfoodImg,
        videoUrl: ohmyfoodVideo,
        description:
            "Intégration de la maquette Figma d'une application de menus en ligne",
        tools: [],
        features: ["animations CSS", "responsive (mobile-first)"],
        mainTechs: ["Sass"],
        techs: ["HTML", "CSS", "JavaScript", "Sass"],
        projectType: "front-end",
        gitHubLink: "https://github.com/TomDvpmt/OC_DevWeb_P3_OhMyFood",
        url: "https://tomdvpmt-ohmyfood.netlify.app/",
        done: true,
    },
];

export default projects;
