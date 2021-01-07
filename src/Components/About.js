import React, { Component } from "react";
import AboutTabs from "./AboutTabs";
import Container from "react-bootstrap/Container";
import "../styles/about.css";

class About extends Component {
    componentDidMount() {
        document.body.style.background = "#fff";
    }

    render() {
        return (
            <>
                <Container fluid>
                    <div className="row" id="about-heading">
                        <h1 id="about-me-title">Hi, I'm Alex </h1>
                        <img
                            id="about-figure-image"
                            alt="Me!"
                            src="https://res.cloudinary.com/de8a23w1z/image/upload/v1602251966/portfolio/IMG_1698_emyb0u.png"
                        />
                    </div>

                    <div id="aboutAlex">
                        <AboutTabs />
                    </div>
                </Container>
            </>
        );
    }
}

export default About;
