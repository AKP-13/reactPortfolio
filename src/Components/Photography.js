import React, { Component } from "react";
import "../styles/photography.css";

import PhotoCarousel from "./PhotoCarousel";
import PhotoGrid from "./PhotoGrid";

class Photography extends Component {
    componentDidMount() {
        document.body.style.background = "#fff";
    }

    render() {
        return (
            <>
                <PhotoCarousel />
                <PhotoGrid />
            </>
        );
    }
}

export default Photography;
