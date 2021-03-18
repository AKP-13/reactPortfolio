import React, { Component } from "react";
import "../styles/contact.css";
import ContactForm from "./ContactForm";

class Contact extends Component {
    componentDidMount() {
        document.body.style.background = "#fff";
    }

    render() {
        return (
            <>
                <h1 id="contact-title">Get in touch</h1>
                <div className="container">
                    <p>
                        Please don't hesitate to get in touch with me via the
                        form or other social media links below regarding any
                        bugs, improvements or anything else!
                    </p>
                    <div id="contact-page-div" className="row">
                        <div
                            id="contact-links-div"
                            className="col-sm-2 col-lg-2 m-0"
                        >
                            <h4>
                                <a href="https://github.com/AKP-13">
                                    <span
                                        className="iconify contact-icon"
                                        data-icon="ant-design:github-filled"
                                        data-inline="false"
                                    ></span>
                                </a>
                            </h4>
                            <h4>
                                <a href="https://www.linkedin.com/in/alexander-peirson/">
                                    <span
                                        className="iconify contact-icon"
                                        data-icon="ant-design:linkedin-filled"
                                        data-inline="false"
                                        color="#FCA311"
                                    ></span>
                                </a>
                            </h4>
                            <h4>
                                <a href="https://www.npmjs.com/~akp-13">
                                    <span
                                        className="iconify contact-icon"
                                        data-icon="cib:npm"
                                        data-inline="false"
                                    ></span>
                                </a>
                            </h4>
                            <h4>
                                <a href="https://medium.com/@alexpeirson">
                                    <span
                                        className="iconify contact-icon"
                                        data-icon="ant-design:medium-circle-filled"
                                        data-inline="false"
                                    ></span>
                                </a>
                            </h4>
                        </div>
                        <div
                            id="contact-form-div"
                            className="col-sm-8 col-lg-9 m-0"
                        >
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Contact;
