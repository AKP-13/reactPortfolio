import React, { Component } from "react";
import "../styles/contact.css";
import { Icon, InlineIcon } from "@iconify/react";
import linkedinFilled from "@iconify-icons/ant-design/linkedin-filled";
import githubFilled from "@iconify-icons/ant-design/github-filled";
import mediumCircleFilled from "@iconify-icons/ant-design/medium-circle-filled";
import npmIcon from "@iconify-icons/cib/npm";
import ContactForm from "./ContactForm";

class Contact extends Component {
    componentDidMount() {
        document.body.style.background = "#fff";
    }

    render() {
        return (
            <>
                <h1 id="contact-title">Contact me</h1>
                <div className="container">
                    <p>
                        For more information about hiring me, please fill out
                        the form below and your message will be sent to
                        futureproof's team. Alternatively, contact me directly
                        using one of the links below.
                    </p>
                    <div id="contact-page-div" className="row">
                        <div
                            id="contact-links-div"
                            className="col-sm-2 col-lg-2 m-0"
                        >
                            <h4>
                                <a href="https://github.com/AKP-13">
                                    <Icon icon={githubFilled} color="#FCA311" />{" "}
                                </a>
                            </h4>
                            <h4>
                                <a href="https://www.linkedin.com/in/alexander-peirson-b445b3191/">
                                    <Icon
                                        icon={linkedinFilled}
                                        color="#FCA311"
                                    />{" "}
                                </a>
                            </h4>
                            <h4>
                                <a href="https://www.npmjs.com/~akp-13">
                                    <Icon icon={npmIcon} color="#FCA311" />{" "}
                                </a>
                            </h4>
                            <h4>
                                <a href="https://medium.com/@alexpeirson">
                                    <Icon
                                        icon={mediumCircleFilled}
                                        color="#FCA311"
                                    />
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
