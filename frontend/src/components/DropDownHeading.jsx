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
            <Typography component="h4" variant="h4">
                {label}
            </Typography>
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
