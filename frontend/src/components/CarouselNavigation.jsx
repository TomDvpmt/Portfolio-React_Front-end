import { ButtonGroup, Button } from "@mui/material";

const CarouselNavigation = ({ handleSwipeLeft, handleSwipeRight }) => {
    return (
        <ButtonGroup
            variant="outlined"
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

export default CarouselNavigation;
