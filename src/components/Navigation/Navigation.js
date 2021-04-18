import React from "react";
import "./Navigation.css";

const Navigation = () => {
    return (
        <navigation id="navigation-container">
            <p id="navigation-container__title">Dropdown</p>
            <div id="navigation-container__contact">
                <p>Contact us!</p>
                <p>888-888-8888</p>
            </div>
            <h1 id="navigation-container__header">
                <i className="fas fa-circle"></i> Exemplary Valet Services
            </h1>
        </navigation>
    );
};

export default Navigation;
