import React from "react";
import "./Navigation.css";
import logo from "../../assets/images/logo.png";

const Navigation = () => {
    return (
        <navigation id="navigation-container">
            <p id="navigation-container__title">Dropdown</p>
            <div id="navigation-container__contact">
                <p>Contact us!</p>
                <p>888-888-8888</p>
            </div>
            <div id="logo-container">
                <img id="logo" alt="logo" src={logo} />
                {/* <span> */}
                <h1 id="navigation-container__header">
                    Exemplary Valet Services
                </h1>
            </div>
        </navigation>
    );
};

export default Navigation;
