import TitleLine from "./TitleLine";

import theme from "../styles/theme";
import { Box, Typography } from "@mui/material";
import { ExpandMore } from "@mui/icons-material";

import PropTypes from "prop-types";

const DropDownHeading = ({ condition, label, handleClick }) => {
    DropDownHeading.propTypes = {
        condition: PropTypes.bool.isRequired,
        label: PropTypes.string.isRequired,
        handleClick: PropTypes.func.isRequired,
    };

    return (
        <Box
            sx={{
                mb: "1rem",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                "&:hover": {
                    cursor: {
                        xs: "pointer",
                        md: "initial",
                    },
                },
                "& svg": {
                    transition: "transform ease 300ms",
                    transform: condition && "rotate(180deg)",
                },
            }}
            onClick={handleClick}>
            <Box sx={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                <TitleLine />
                <Typography
                    component="h4"
                    variant="h4"
                    color={theme.palette.text.title}>
                    {label}
                </Typography>
            </Box>
            <ExpandMore
                sx={{
                    display: {
                        xs: "initial",
                        md: "none",
                    },
                }}
            />
        </Box>
    );
};

export default DropDownHeading;
