import React, { Component } from "react";

class ContactForm extends Component {
    componentDidMount() {
        document.body.style.background = "#fff";
    }

    render() {
        return (
            <>
                <div id="formContainer">
                    <form
                        action="https://formspree.io/f/xknpopno"
                        method="POST"
                        id="contactForm"
                    >
                        <div className="form-row">
                            <div className="form-group col">
                                <label htmlFor="firstName">First Name</label>
                                <input
                                    type="text"
                                    id="firstName"
                                    name="firstName"
                                    placeholder="First Name"
                                />
                            </div>

                            <div className="form-group col">
                                <label htmlFor="lastName">Last Name</label>
                                <input
                                    type="text"
                                    id="lastName"
                                    name="lastName"
                                    placeholder="Last Name"
                                />
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="Email"
                                placeholder="name@email.com"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea
                                name="message"
                                id="message"
                                rows="5"
                                maxLength="2000"
                                placeholder="Enter your message here"
                            ></textarea>
                        </div>

                        <button type="submit" id="test-form-submit">
                            Submit
                        </button>
                    </form>
                </div>
            </>
        );
    }
}

export default ContactForm;
