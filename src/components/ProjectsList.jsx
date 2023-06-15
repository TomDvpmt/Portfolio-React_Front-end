import { useState, useEffect, useContext } from "react";
import PositionContext from "../contexts/PositionContext";

import ProjectsListTitle from "./ProjectsListTitle";
import ProjectsListCard from "./ProjectsListCard";

import { Box } from "@mui/material";

import PropTypes from "prop-types";

const ProjectsList = ({
    projectType,
    projectsArray,
    setProjectToShow,
    setShowDialog,
}) => {
    ProjectsList.propTypes = {
        projectType: PropTypes.string.isRequired,
        projectsArray: PropTypes.array.isRequired,
        setProjectToShow: PropTypes.func.isRequired,
        setShowDialog: PropTypes.func.isRequired,
    };

    const sectionPosition = useContext(PositionContext);

    const [tabIndex, setTabIndex] = useState(-1);

    useEffect(() => {
        setTabIndex(sectionPosition === 1 ? 0 : -1);
    }, [sectionPosition]);

    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "3rem",
            }}>
            <ProjectsListTitle label={projectType} />
            <Box sx={{ display: "flex", flexDirection: "column", gap: "3rem" }}>
                {projectsArray?.map((project, index) => {
                    return (
                        <ProjectsListCard
                            key={index}
                            tabIndex={tabIndex}
                            project={project}
                            setProjectToShow={setProjectToShow}
                            setShowDialog={setShowDialog}
                        />
                    );
                })}
            </Box>
        </Box>
    );
};

export default ProjectsList;
