import React from "react";
import PropTypes from "prop-types";

const newMessage1 = "Edinson";

export const FirstApp = ({ title, subTitle, name }) => {
    return (
        <div>
            <h1 data-testid='test-title'> {title} </h1>
            <h2>{subTitle}</h2>
            <h2>{subTitle}</h2>
            <h3>{name}</h3>
        </div>
    );
};

FirstApp.propTypes = {
    title: PropTypes.string,
    subTitle: PropTypes.string.isRequired,
};

FirstApp.defaultProps = {
    title: "No hay Título",
    subTitle: "No hay Título",
    name: "Edinson Madrid"
};
