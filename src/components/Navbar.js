import React from "react";
import ReactLogo from "../images/react-icon-small.png"

export default function Navbar() {
    return (
        <nav>

            <img src={ReactLogo}
                alt="React Logo"
                className="nav-logo" />
            <h3 className="nav-logo-text">React Facts</h3>

            <h4 className="nav-title">React Course - Project 1</h4>
        </nav>
    )
}