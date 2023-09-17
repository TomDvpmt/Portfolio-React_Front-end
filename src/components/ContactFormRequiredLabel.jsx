import { Typography } from "@mui/material";

import PropTypes from "prop-types";

const ContactFormRequiredLabel = ({ label }) => {
    ContactFormRequiredLabel.propTypes = {
        label: PropTypes.string.isRequired,
    };

    return (
        <>
            <Typography component="span" data-testid="label">
                {label}
            </Typography>
            <Typography
                component="span"
                color="secondary"
                fontFamily="Arial"
                data-testid="asterisk">
                {" "}
                *
            </Typography>
        </>
    );
};

export default ContactFormRequiredLabel;
