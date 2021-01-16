import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "../styles/navbar.css";

class Navbar extends Component {
    render() {
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
                        <li className="nav-item">
                            <NavLink
                                className="nav-link"
                                to="/"
                                activeClassName="current"
                            >
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                className="nav-link"
                                to="/about"
                                activeClassName="current"
                            >
                                About
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                className="nav-link"
                                to="/projects"
                                activeClassName="current"
                            >
                                Projects
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                className="nav-link"
                                to="/photography"
                                activeClassName="current"
                            >
                                Photography
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                className="nav-link"
                                to="/contact"
                                activeClassName="current"
                            >
                                Contact
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Navbar;
