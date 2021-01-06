import React, { Component } from "react";
import AboutTabs from "./AboutTabs";
import "../styles/about.css";

class About extends Component {
    componentDidMount() {
        document.body.style.background = "#fff";
    }

    render() {
        return (
            <>
                <h1 id="about-me-title">Hi, I'm Alex</h1>
                <AboutTabs />
            </>
        );
    }
}

export default About;
