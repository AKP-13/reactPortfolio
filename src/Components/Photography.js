import React, { Component } from "react";
import "../styles/photography.css";

class Photography extends Component {
    componentDidMount() {
        document.body.style.background = "#fff";
    }

    render() {
        return (
            <>
                <h1 className="title">Photography</h1>
            </>
        );
    }
}

export default Photography;
