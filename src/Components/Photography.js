import React, { Component } from "react";
import "../styles/photography.css";

import PhotoCarousel from "./PhotoCarousel";

class Photography extends Component {
    componentDidMount() {
        document.body.style.background = "#fff";
    }

    render() {
        return (
            <>
                <PhotoCarousel />
            </>
        );
    }
}

export default Photography;
