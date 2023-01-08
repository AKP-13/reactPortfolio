import React, { useEffect } from "react";
import "../styles/projects.css";

import { PROJECT_CATALOGUE } from "./helpers";

const Projects = () => {
    useEffect(() => {
        document.body.style.background = "#fff";
    }, []);

    return (
        <main>
            <h1 id="projectsTitle">My work</h1>
            <div className="projects row row-cols-1 row-cols-md-2 row-cols-lg-3">
                {PROJECT_CATALOGUE.map((project) => (
                    <div className="col mb-4" key={project.title}>
                        <div className="card h-100">
                            <a href={project.projectLink}>
                                <img
                                    src={project.imageLink}
                                    className="card-img-top"
                                    alt={project.imageAlt}
                                />
                            </a>
                            <div className="card-body">
                                <h5 className="card-title">
                                    <a href={project.projectLink}>
                                        {project.title}
                                    </a>
                                </h5>
                                <span className="techLogos">
                                    {project.techIcons.map((icon) => (
                                        <span
                                            className="iconify"
                                            data-icon={icon}
                                            key={`${project.title}-${icon}`}
                                        ></span>
                                    ))}
                                </span>
                                <hr />
                                <p className="card-text">
                                    {project.description}
                                </p>
                            </div>
                            <div className="card-footer linksFooter">
                                <small className="text-muted links">
                                    {project.footerIcons.map((icon) => {
                                        if (icon === "bx:bx-link-external") {
                                            return (
                                                <a
                                                    href={project.projectLink}
                                                    key={`${project.title}-${icon}`}
                                                >
                                                    <span
                                                        className="iconify"
                                                        data-icon="bx:bx-link-external"
                                                    ></span>
                                                </a>
                                            );
                                        } else if (
                                            icon === "logos:github-icon"
                                        ) {
                                            return (
                                                <a
                                                    href={project.gitHubLink}
                                                    key={`${project.title}-${icon}`}
                                                >
                                                    <span
                                                        className="iconify"
                                                        data-icon={icon}
                                                    ></span>
                                                </a>
                                            );
                                        } else {
                                            return (
                                                <span
                                                    className="iconify"
                                                    data-icon={icon}
                                                    key={`${project.title}-${icon}`}
                                                ></span>
                                            );
                                        }
                                    })}
                                </small>
                            </div>
                            <div className="card-footer">
                                <small className="text-muted">
                                    Contributors:{" "}
                                    {project.contributors.map(
                                        (contributor, idx) => (
                                            <span
                                                key={`${project.title}-${contributor.name}`}
                                            >
                                                <a href={contributor.link}>
                                                    {contributor.name}
                                                </a>
                                                {idx !==
                                                    project.contributors
                                                        .length -
                                                        1 && (
                                                    <span>
                                                        {idx !==
                                                        project.contributors
                                                            .length -
                                                            2
                                                            ? ", "
                                                            : " & "}
                                                    </span>
                                                )}
                                            </span>
                                        )
                                    )}
                                </small>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
};

export default Projects;
