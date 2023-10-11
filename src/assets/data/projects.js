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
import flixVideo from "../vids/flixx.webm";

const projects = [
    {
        title: "Application de covoiturage avec module de réservation",
        shortTitle: "Covoiturage",
        logoUrl: "",
        imgUrl: covoitImg,
        videoUrl: covoitVideo,
        description:
            "Création d'une application de covoiturage avec module de réservation",
        context:
            'Projet supplémentaire réalisé en fin de formation "Développeur web" en 2023.',
        objectives: [
            "utiliser Redux pour gérer le state sur toute l'application",
            "implémenter des notifications par mail",
        ],
        tools: [
            "base de données (MongoDB Atlas + Mongoose)",
            "authentification (JWT) et compte utilisateur",
            "sécurité : mot de passe chiffré en BDD",
            "routeurs en back-end (Express) et front-end (React Router)",
            "typage des props (prop-types)",
            "state manager (Redux)",
            "envoi d'emails depuis le formulaire de contact (Nodemailer)",
            "API externe pour les noms de communes",
        ],
        features: [
            "module de recherche de trajet",
            "système de réservations",
            "notifications par mail pour les réservations",
            "messagerie interne entre utilisateurs",
        ],
        mainTechs: ["MongoDB", "React.js", "Redux"],
        techs: [
            "MongoDB",
            "HTML",
            "CSS",
            "JavaScript",
            "Node.js",
            "Express",
            "JWT",
            "React.js",
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
        title: "Application de recherche de films (avec API externe)",
        shortTitle: "Recherche de films",
        logoUrl: flixLogo,
        imgUrl: flixImg,
        videoUrl: flixVideo,
        description:
            "Création d'une application de recherche de films avec une API externe",
        context:
            'Projet personnel développé en parallèle de la formation "Développeur web" en 2023.',
        objectives: ["entraînement aux interactions avec une API externe"],
        tools: [
            "base de données pour les fonctionnalités utilisateur (MongoDB Atlas + Mongoose)",
            "authentification (JWT) et compte utilisateur",
            "sécurité : mot de passe chiffré en BDD + token dans un cookie httpOnly",
            "routeurs en back-end (Express) et front-end (React Router)",
            "typage des props (prop-types)",
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
        mainTechs: ["MongoDB", "React.js", "Redux"],
        techs: [
            "MongoDB",
            "HTML",
            "CSS",
            "JavaScript",
            "Node.js",
            "Express",
            "JWT",
            "React.js",
            "Redux",
            "Material UI",
        ],
        projectType: "fullstack",
        gitHubLink: "https://github.com/TomDvpmt/80s-90s-Flixx-frontend",
        url: "https://flixx80s90s.netlify.app/",
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
        context:
            'Projet réalisé au cours de la formation "Développeur web" en 2023.',
        objectives: [
            "créer et gérer une base de données relationnelle avec opérations CRUD",
            "implémenter une interface de chat en temps réel",
        ],
        tools: [
            "base de données (MySQL, sans ORM/ODM)",
            "authentification (JWT) et compte utilisateur",
            "sécurité : mot de passe chiffré en BDD",
            "routeurs en back-end (Express) et front-end (React Router)",
            "typage des props (prop-types)",
            "state manager (Redux)",
            "canal de communication bidirectionnelle serveur-client (Socket.io)",
        ],
        features: [
            "forum avec posts et commentaires",
            "possibilité de poster des images",
            "système de likes",
            "chat en temps réel",
        ],
        mainTechs: ["MySQL", "React.js", "Redux"],
        techs: [
            "MySQL",
            "HTML",
            "CSS",
            "JavaScript",
            "Node.js",
            "Express",
            "JWT",
            "React.js",
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
        title: "Site de e-commerce (en cours de développement)",
        shortTitle: "E-commerce (en cours)",
        logoUrl: "",
        imgUrl: hikeImg,
        videoUrl: "",
        description: "Site de vente d'articles de randonnée",
        context: "Projet personnel développé en 2023.",
        objectives: [
            "entraînement à la programmation orientée objet et à l'architecture MVC en PHP",
        ],
        tools: [
            "programmation orientée objet",
            "architecture MVC",
            "routing",
            "authentification",
        ],
        features: [
            "compte utilisateur",
            "autorisations selon statut (admin ou client)",
            "CMS maison pour gérer les produits",
            "plusieurs catégories de produits",
            "aperçu et page dédiée pour chaque produit",
            "consitution d'un panier",
            "tunnel de commande (facturation, validation, paiement, confirmation)",
        ],
        mainTechs: ["PHP", "MySQL", "Sass"],
        techs: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "Sass"],
        projectType: "fullstack",
        gitHubLink: "https://github.com/TomDvpmt/php-oop-mvc-training-2",
        url: "",
        done: false,
    },
    {
        title: "Portfolio",
        shortTitle: "Portfolio",
        logoUrl: "",
        imgUrl: portfolioImg,
        videoUrl: portfolioVideo,
        description: "Création d'un portfolio d'applications",
        context:
            'Projet réalisé à la suite de la formation "Développeur web" en 2023.',
        objectives: [
            "présenter les différents projets réalisés",
            "proposer un formulaire de contact lié à une adresse email",
        ],
        tools: [
            "typage des props avec prop-types",
            "back-end minimal, uniquement pour le formulaire de contact (NodeMailer)",
            "tests unitaires (Jest)",
        ],
        features: [
            "navigation horizontale",
            "mosaïque de projets",
            "aperçu vidéo de chaque projet",
            "fiche détaillée pour chaque projet, avec liste des outils de développement, fonctionnalités et technologies",
            "liens GitHub et liens de test des applications",
            "formulaire de contact",
        ],
        mainTechs: ["React.js", "Jest", "Material UI"],
        techs: [
            "HTML",
            "CSS",
            "JavaScript",
            "Node.js",
            "React.js",
            "Material UI",
            "Jest",
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
        context:
            'Projet réalisé au cours de la formation "Développeur web" en 2023.',
        objectives: [
            "intégrer les 4 pages de la maquette Figma dans une Single Page Application avec React",
            "récupérer les données par des requêtes HTTP",
            "créer les animations CSS décrites dans le cahier des charges",
        ],
        tools: [
            "navigation avec routeur (React Router)",
            "modules CSS",
            "données récupérées par des requêtes HTTP vers un fichier JSON",
        ],
        features: ["animations", "responsive (mobile-first)", "slider"],
        mainTechs: ["React.js"],
        techs: ["HTML", "CSS", "JavaScript", "React.js"],
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
        context:
            'Projet réalisé au cours de la formation "Développeur web" en 2023.',
        objectives: [
            "intégrer précisément la maquette Figma",
            "créer les animations CSS décrites dans le cahier des charges",
        ],
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
