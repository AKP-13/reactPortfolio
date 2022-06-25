import React, { Component } from "react";
import "../styles/skills.css";

const Skills = () => {
    const DATA_ICONS = [
        "logos:html-5",
        "logos:css-3",
        "logos:javascript",
        "logos:react",
        "logos:redux",
        "logos:python",
        "logos:flask",
        "logos:django-icon",
        "logos:postgresql",
        "vscode-icons:file-type-mongo",
        "simple-icons:express",
    ];

    return (
        <p className="about-para icons">
            {DATA_ICONS.map((icon) => (
                <span
                    className="iconify"
                    data-icon={icon}
                    data-inline="false"
                    key={icon}
                ></span>
            ))}
        </p>
    );
};

export default Skills;
