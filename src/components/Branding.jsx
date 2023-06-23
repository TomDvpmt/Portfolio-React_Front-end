import theme from "../styles/theme";
import { Link, Typography } from "@mui/material";

const Branding = () => {
    return (
        <Link href="/" underline="none">
            <Typography
                sx={{
                    color: theme.palette.text.title,
                    fontSize: "1rem",
                    textAlign: "center",
                }}>
                <Typography component="span" textTransform="uppercase">
                    Portfolio
                </Typography>
                <Typography component="span" color="secondary">
                    {" | "}
                </Typography>
                <Typography component="span">Thomas Boussion</Typography>
            </Typography>
        </Link>
    );
};

export default Branding;
