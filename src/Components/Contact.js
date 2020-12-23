import React, { Component } from "react";
import "../styles/contact.css";
import { Icon, InlineIcon } from "@iconify/react";
import linkedinFilled from "@iconify-icons/ant-design/linkedin-filled";
import githubFilled from "@iconify-icons/ant-design/github-filled";
import mediumCircleFilled from "@iconify-icons/ant-design/medium-circle-filled";
import npmIcon from "@iconify-icons/cib/npm";

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
                        futureproof's team. Alternatively, contact me directly.
                    </p>
                    <div id="contact-page-div" className="row">
                        <div
                            id="contact-links-div"
                            className="col-sm-4 col-lg-3 m-0"
                        >
                            <h3>Links</h3>
                            <h4>
                                <Icon icon={githubFilled} color="#FCA311" />{" "}
                                <span>- GitHub</span>
                            </h4>
                            <h4>
                                <Icon icon={linkedinFilled} color="#FCA311" />{" "}
                                <span>- LinkedIn</span>
                            </h4>
                            <h4>
                                <Icon icon={npmIcon} color="#FCA311" />{" "}
                                <span>- npm</span>
                            </h4>
                            <h4>
                                <Icon
                                    icon={mediumCircleFilled}
                                    color="#FCA311"
                                />
                                <span> - Medium</span>
                            </h4>
                        </div>
                        <div
                            id="contact-form-div"
                            className="col-sm-8 col-lg-9 m-0"
                        ></div>
                    </div>
                </div>
            </>
        );
    }
}

export default Contact;
