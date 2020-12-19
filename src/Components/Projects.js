import React, { Component } from "react";
import "../styles/projects.css";

class Projects extends Component {
    componentDidMount() {
        document.body.style.background = "#fff";
    }

    render() {
        return (
            <>
                <h1 className="title">Projects</h1>
            </>
        );
    }
}

export default Projects;
