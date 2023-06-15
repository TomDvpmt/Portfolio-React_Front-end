import theme from "../styles/theme";
import { ButtonGroup, Button } from "@mui/material";

import PropTypes from "prop-types";

const ProjectsCarouselNavigation = ({ handleSwipeLeft, handleSwipeRight }) => {
    ProjectsCarouselNavigation.propTypes = {
        handleSwipeLeft: PropTypes.func.isRequired,
        handleSwipeRight: PropTypes.func.isRequired,
    };
    return (
        <ButtonGroup
            variant="outlined"
            color="secondary"
            sx={{
                m: ".5rem 0",
                display: "flex",
                justifyContent: "center",
            }}>
            <Button size="small" onClick={handleSwipeLeft}>
                Projet précédent
            </Button>
            <Button size="small" onClick={handleSwipeRight}>
                Projet suivant
            </Button>
        </ButtonGroup>
    );
};

export default ProjectsCarouselNavigation;
