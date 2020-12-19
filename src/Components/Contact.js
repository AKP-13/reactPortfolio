import React, { Component } from "react";
import "../styles/contact.css";

class Contact extends Component {
    componentDidMount() {
        document.body.style.background = "#fff";
    }

    render() {
        return (
            <>
                <h1 className="title">Contact</h1>
            </>
        );
    }
}

export default Contact;
