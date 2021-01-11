import React, { Component } from "react";
import { InlineIcon } from "@iconify/react";
import html5 from "@iconify-icons/logos/html-5";
import css3 from "@iconify-icons/logos/css-3";
import javascriptIcon from "@iconify-icons/logos/javascript";
import reactIcon from "@iconify-icons/logos/react";
import reduxIcon from "@iconify-icons/logos/redux";
import pythonIcon from "@iconify-icons/logos/python";
import flaskIcon from "@iconify-icons/logos/flask";
import djangoIcon from "@iconify-icons/logos/django-icon";
import postgresqlIcon from "@iconify-icons/logos/postgresql";
import fileTypeMongo from "@iconify-icons/vscode-icons/file-type-mongo";
import expressIcon from "@iconify-icons/simple-icons/express";

import "../styles/skills.css";

class Skills extends Component {
    render() {
        return (
            <>
                <p className="about-para icons">
                    <InlineIcon icon={html5} />
                    <InlineIcon icon={css3} />
                    <InlineIcon icon={javascriptIcon} />
                    <InlineIcon icon={reactIcon} />
                    <InlineIcon icon={reduxIcon} />
                    <InlineIcon icon={pythonIcon} />
                    <InlineIcon icon={flaskIcon} />
                    <InlineIcon icon={djangoIcon} />
                    <InlineIcon icon={postgresqlIcon} />
                    <InlineIcon icon={fileTypeMongo} />
                    <InlineIcon icon={expressIcon} />
                </p>
            </>
        );
    }
}

export default Skills;
