import React, { Component } from "react";
import "../styles/about.css";

class About extends Component {
    componentDidMount() {
        document.body.style.background = "#fff";
    }

    render() {
        return (
            <>
                <h1 className="title">About</h1>
            </>
        );
    }
}

export default About;
