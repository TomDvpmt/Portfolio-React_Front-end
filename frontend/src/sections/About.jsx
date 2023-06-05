import SectionHeading from "../components/SectionHeading";

import { Box, Typography } from "@mui/material";

const About = () => {
    return (
        <>
            <SectionHeading slug="about" />
            <Box sx={{ display: "flex" }}>
                <Box>
                    <img src="" alt="Thomas Boussion" />
                </Box>
                <Typography textAlign="justify">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Fusce quis nunc mi. Aenean vestibulum lacus ante, sit amet
                    iaculis sapien convallis vestibulum. Nam tristique facilisis
                    est quis tristique. Nulla vestibulum tincidunt diam, eget
                    elementum ex tincidunt quis. Pellentesque pellentesque sit
                    amet mi mattis imperdiet. Aliquam fermentum ultrices ante,
                    at vehicula felis mattis elementum. Orci varius natoque
                    penatibus et magnis dis parturient montes, nascetur
                    ridiculus mus. In sem enim, tempor non est quis, consectetur
                    hendrerit libero. Nam vel arcu quam. Orci varius natoque
                    penatibus et magnis dis parturient montes, nascetur
                    ridiculus mus.
                </Typography>
            </Box>
        </>
    );
};

export default About;
