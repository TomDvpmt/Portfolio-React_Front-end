import theme from "../styles/theme";
import { Box, Typography } from "@mui/material";

import PropTypes from "prop-types";

const CarouselMosaic = ({ projectsData, setCarouselPosition }) => {
    CarouselMosaic.propTypes = {
        projectsData: PropTypes.array.isRequired,
        setCarouselPosition: PropTypes.func.isRequired,
    };

    const handleMosaicClick = (e) => {
        setCarouselPosition(parseInt(e.currentTarget.id));
    };

    const showTextStyle = {
        "& img": {
            opacity: "0.3",
        },
        "& .over-text": {
            opacity: "1",
            textAlign: "center",
        },
    };

    return (
        <Box
            sx={{
                maxWidth: theme.maxWidth.carousel,
                mb: "2rem",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: ".5rem",
            }}>
            {projectsData?.map((project, index) => (
                <Box
                    key={index}
                    id={index}
                    className="thumbnail"
                    width={`${100 / projectsData.length - 2}%`}
                    onClick={handleMosaicClick}
                    sx={{
                        bgcolor: "black",
                        position: "relative",
                        "&.active-thumbnail": {
                            boxShadow: `inset 0 0 2px 3px ${theme.palette.secondary.main}`,
                            ...showTextStyle,
                        },
                        "& img": {
                            minHeight: "100%",
                            objectFit: "cover",
                            transition: "opacity ease 200ms",
                        },
                        "&:hover": {
                            cursor: "pointer",
                            ...showTextStyle,
                        },
                    }}>
                    <img
                        src={project.imgUrl}
                        alt={project.title}
                        width="100%"
                    />
                    <Box
                        className="over-text"
                        sx={{
                            opacity: "0",
                            position: "absolute",
                            top: "0",
                            right: "0",
                            bottom: "0",
                            left: "0",
                            zIndex: "2",
                            p: ".5rem",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}>
                        <Typography color="white">
                            {project.shortTitle}
                        </Typography>
                    </Box>
                </Box>
            ))}
        </Box>
    );
};

export default CarouselMosaic;
