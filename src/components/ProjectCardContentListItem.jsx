import React from "react";

import { ListItem, ListItemText, ListItemIcon } from "@mui/material";
import { ChevronRight } from "@mui/icons-material";

import theme from "../styles/theme";

import PropTypes from "prop-types";

const ProjectCardContentListItem = ({ item }) => {
    ProjectCardContentListItem.propTypes = {
        item: PropTypes.string.isRequired,
    };
    return (
        <ListItem
            disablePadding
            sx={{
                mb: ".5rem",
                alignItems: "start",
                gap: ".5rem",
            }}>
            <ListItemIcon
                sx={{
                    minWidth: "max-content",
                    color: theme.palette.text.content,
                }}>
                <ChevronRight fontSize="small" />
            </ListItemIcon>
            <ListItemText
                sx={{
                    m: "0",
                    "& span": {
                        fontSize: {
                            md: "1rem",
                        },
                    },
                }}>
                {item}
            </ListItemText>
        </ListItem>
    );
};

export default ProjectCardContentListItem;
