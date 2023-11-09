import { ReactComponent as ReactLogo } from "../img/techs/logo-react.svg";
import { ReactComponent as CSSLogo } from "../img/techs/logo-css3.svg";
import { ReactComponent as HTMLLogo } from "../img/techs/logo-html5.svg";
import { ReactComponent as JavaScriptLogo } from "../img/techs/logo-javascript.svg";
import { ReactComponent as NodeJsLogo } from "../img/techs/logo-nodejs.svg";
import { ReactComponent as GitLogo } from "../img/techs/logo-git.svg";
import { ReactComponent as SassLogo } from "../img/techs/logo-sass.svg";
import { ReactComponent as MongoDBLogo } from "../img/techs/logo-mongodb.svg";
import { ReactComponent as MySQLLogo } from "../img/techs/logo-mysql.svg";
import { ReactComponent as JWTLogo } from "../img/techs/logo-jwt.svg";
import { ReactComponent as ReduxLogo } from "../img/techs/logo-redux.svg";
import { ReactComponent as MaterialUILogo } from "../img/techs/logo-materialUI.svg";
import { ReactComponent as SocketIoLogo } from "../img/techs/logo-socket-io.svg";
import { ReactComponent as LinuxLogo } from "../img/techs/logo-linux.svg";
import { ReactComponent as WordPressLogo } from "../img/techs/logo-wordpress.svg";
import { ReactComponent as JestLogo } from "../img/techs/logo-jest.svg";
import { ReactComponent as TwigLogo } from "../img/techs/logo-twig.svg";
import phpLogo from "../img/techs/logo-php.png";
import nodemailerLogo from "../img/techs/logo-nodemailer_200x136.png";
import expressLogo from "../img/techs/logo-expressjs.png";

import theme from "../../styles/theme";

const TYPES_ARRAY = ["langages", "back-end", "front-end", "autres"];

const ALL_TECHS = [
    {
        label: "HTML",
        type: "langages",
        imgElement: <HTMLLogo title="HTML" />,
    },
    {
        label: "CSS",
        type: "langages",
        imgElement: <CSSLogo title="CSS" />,
    },
    {
        label: "JavaScript",
        type: "langages",
        imgElement: <JavaScriptLogo title="JavaScript" />,
    },
    {
        label: "PHP",
        type: "langages",
        imgElement: (
            <img
                src={phpLogo}
                alt="PHP"
                title="PHP"
                width={theme.maxWidth.techIcon}
            />
        ),
    },
    {
        label: "Git / GitHub",
        type: "autres",
        imgElement: <GitLogo title="Git / GitHub" />,
    },
    {
        label: "MySQL",
        type: "back-end",
        imgElement: <MySQLLogo title="MySQL" />,
    },
    {
        label: "MongoDB",
        type: "back-end",
        imgElement: <MongoDBLogo title="MongoDB" />,
    },
    {
        label: "Node.js",
        type: "back-end",
        imgElement: <NodeJsLogo title="Node.js" />,
    },
    {
        label: "Express",
        type: "back-end",
        imgElement: (
            <img
                src={expressLogo}
                alt="Express"
                title="Express"
                width={theme.maxWidth.techIcon}
            />
        ),
    },
    {
        label: "JWT",
        type: "back-end",
        imgElement: <JWTLogo title="JWT" />,
    },
    {
        label: "Nodemailer",
        type: "back-end",
        imgElement: (
            <img
                src={nodemailerLogo}
                alt="Nodemailer"
                title="Nodemailer"
                width={theme.maxWidth.techIcon}
            />
        ),
    },
    {
        label: "React.js",
        type: "front-end",
        imgElement: <ReactLogo title="React.js" />,
    },
    {
        label: "Redux",
        type: "front-end",
        imgElement: <ReduxLogo title="Redux" />,
    },
    {
        label: "Sass",
        type: "front-end",
        imgElement: <SassLogo title="Sass" />,
    },
    {
        label: "Twig",
        type: "front-end",
        imgElement: <TwigLogo title="Twig" />,
    },
    {
        label: "Material UI",
        type: "front-end",
        imgElement: <MaterialUILogo title="Material UI" />,
    },
    {
        label: "Linux",
        type: "autres",
        imgElement: <LinuxLogo title="Linux" />,
    },
    {
        label: "WordPress",
        type: "autres",
        imgElement: <WordPressLogo title="WordPress" />,
    },
    {
        label: "Socket.io",
        type: "back-end",
        imgElement: <SocketIoLogo title="Socket.io" />,
    },
    {
        label: "Jest",
        type: "autres",
        imgElement: <JestLogo title="Jest" />,
    },
];

export { ALL_TECHS, TYPES_ARRAY };
