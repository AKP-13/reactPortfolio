import React, { useEffect, useState } from "react";
import AboutTabs from "./AboutTabs";
import Container from "react-bootstrap/Container";
import "../styles/about.css";

const About = () => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        document.body.style.background = "#fff";
    });

    return (
        <Container fluid>
            <div className="row" id="about-heading">
                <h1 id="about-me-title">Hi, I'm Alex </h1>
                <div id="headshotDiv">
                    <img
                        className="thumb"
                        id="about-figure-image"
                        alt="Me!"
                        src="https://res.cloudinary.com/de8a23w1z/image/upload/c_scale,h_468,q_10,f_auto/v1610983198/portfolio/headshotB_W_byq2l1.png"
                        style={{
                            display: isLoaded ? "none" : "inline-block",
                        }}
                    />
                    <img
                        onLoad={() => {
                            setIsLoaded(true);
                        }}
                        className="full"
                        id="about-figure-image"
                        style={{ opacity: isLoaded ? 1 : 0 }}
                        alt="Me!"
                        src="https://res.cloudinary.com/de8a23w1z/image/upload/q_auto:best,f_auto/v1602251966/portfolio/IMG_1698_emyb0u.png"
                    />
                </div>
            </div>

            <div id="aboutAlex">
                <AboutTabs />
            </div>
        </Container>
    );
};

export default About;
