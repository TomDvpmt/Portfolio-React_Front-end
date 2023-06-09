import { Typography } from "@mui/material";

import PropTypes from "prop-types";

const ContactFormRequiredLabel = ({ label }) => {
    ContactFormRequiredLabel.propTypes = {
        label: PropTypes.string.isRequired,
    };

    return (
        <>
            {label}
            <Typography component="span" color="secondary" fontFamily="Arial">
                {" "}
                *
            </Typography>
        </>
    );
};

export default ContactFormRequiredLabel;
