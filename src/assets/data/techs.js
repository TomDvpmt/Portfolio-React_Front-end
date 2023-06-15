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
import nodemailerLogo from "../img/techs/logo-nodemailer_200x136.png";
import expressLogo from "../img/techs/logo-expressjs.png";

import theme from "../../styles/theme";

const ALL_TECHS = [
    {
        label: "HTML",
        type: "languages",
        imgElement: <HTMLLogo title="HTML" />,
    },
    {
        label: "CSS",
        type: "languages",
        imgElement: <CSSLogo title="CSS" />,
    },
    {
        label: "JavaScript",
        type: "languages",
        imgElement: <JavaScriptLogo title="JavaScript" />,
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
                height={theme.maxWidth.techIcon}
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
                height={theme.maxWidth.techIcon}
            />
        ),
    },
    {
        label: "ReactJS",
        type: "front-end",
        imgElement: <ReactLogo title="ReactJS" />,
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
        label: "Material UI",
        type: "front-end",
        imgElement: <MaterialUILogo title="Material UI" />,
    },
    {
        label: "Socket.io",
        type: "autres",
        imgElement: <SocketIoLogo title="Socket.io" />,
    },
];

export default ALL_TECHS;