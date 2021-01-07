import React, { Component } from "react";
import AboutTabs from "./AboutTabs";
// import Image from "react-bootstrap/Image";
import Figure from "react-bootstrap/Figure";
import "../styles/about.css";

class About extends Component {
    componentDidMount() {
        document.body.style.background = "#fff";
    }

    render() {
        return (
            <>
                <h1 id="about-me-title">Hi, I'm Alex</h1>
                <Figure id="about-figure">
                    <Figure.Image
                        id="about-figure-image"
                        width={300}
                        height={300}
                        alt="Me!"
                        src="https://res.cloudinary.com/de8a23w1z/image/upload/v1602251966/portfolio/IMG_1698_emyb0u.png"
                    />
                </Figure>
                <AboutTabs />
            </>
        );
    }
}

export default About;
