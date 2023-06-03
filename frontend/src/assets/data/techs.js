import { ReactComponent as ReactLogo } from "../img/techs/logo-react.svg";
import { ReactComponent as JavaScriptLogo } from "../img/techs/logo-javascript.svg";
import { ReactComponent as NodeJsLogo } from "../img/techs/logo-nodejs.svg";
import { ReactComponent as ExpressLogo } from "../img/techs/logo-express.svg";
import { ReactComponent as SassLogo } from "../img/techs/logo-sass.svg";
import { ReactComponent as MongoDBLogo } from "../img/techs/logo-mongodb.svg";
import { ReactComponent as MySQLLogo } from "../img/techs/logo-mysql.svg";
import { ReactComponent as JWTLogo } from "../img/techs/logo-jwt.svg";
import { ReactComponent as ReduxLogo } from "../img/techs/logo-redux.svg";
import { ReactComponent as MaterialUILogo } from "../img/techs/logo-materialUI.svg";
import { ReactComponent as SocketIoLogo } from "../img/techs/logo-socket-io.svg";
import nodemailerLogo from "../img/techs/logo-nodemailer_200x136.png";
import { node } from "prop-types";

import theme from "../../styles/theme";

export const allTechs = [
    {
        label: "MongoDB",
        imgElement: <MongoDBLogo title="MongoDB" />,
    },
    {
        label: "MySQL",
        imgElement: <MySQLLogo title="MySQL" />,
    },
    {
        label: "JavaScript",
        imgElement: <JavaScriptLogo title="JavaScript" />,
    },
    {
        label: "Node.js",
        imgElement: <NodeJsLogo title="Node.js" />,
    },
    {
        label: "Express",
        imgElement: <ExpressLogo title="Express" />,
    },
    {
        label: "JWT",
        imgElement: <JWTLogo title="JWT" />,
    },
    {
        label: "Nodemailer",
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
        label: "React",
        imgElement: <ReactLogo title="React" />,
    },
    {
        label: "Redux",
        imgElement: <ReduxLogo title="Redux" />,
    },
    {
        label: "Sass",
        imgElement: <SassLogo title="Sass" />,
    },
    {
        label: "MaterialUI",
        imgElement: <MaterialUILogo title="MaterialUI" />,
    },
    {
        label: "Socket.io",
        imgElement: <SocketIoLogo title="Socket.io" />,
    },
];
