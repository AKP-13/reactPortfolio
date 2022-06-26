import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "../styles/navbar.css";

import { NAV_LINKS } from "./helpers";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-light">
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    {NAV_LINKS.map((navItem) => (
                        <li className="nav-item">
                            <NavLink
                                className="nav-link"
                                to={navItem.route}
                                activeClassName="current"
                            >
                                {navItem.name}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
