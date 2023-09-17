import theme from "../styles/theme";
import { Box } from "@mui/material";

const TitleLine = () => {
    return (
        <Box
            className="title-line"
            sx={{
                height: "1px",
                width: "30px",
                bgcolor: theme.palette.secondary.main,
            }}
        />
    );
};

export default TitleLine;
