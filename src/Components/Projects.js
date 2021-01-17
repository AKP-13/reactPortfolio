import React, { Component } from "react";
import "../styles/projects.css";

class Projects extends Component {
    componentDidMount() {
        document.body.style.background = "#fff";
    }

    render() {
        return (
            <main>
                <h1 id="projectsTitle">My work</h1>
                <div className="projects row row-cols-1 row-cols-md-2 row-cols-lg-3">
                    <div className="col mb-4">
                        <div className="card h-100">
                            <a href="https://obscure-thicket-12063.herokuapp.com/">
                                <img
                                    src="https://res.cloudinary.com/de8a23w1z/image/upload/c_scale,w_900/v1601411793/portfolio/Screenshot_2020-08-29_at_21.13.24_tea3ut.png"
                                    className="card-img-top"
                                    alt="Link to YelpCamp"
                                />
                            </a>
                            <div className="card-body">
                                <h5 className="card-title">
                                    <a href="https://obscure-thicket-12063.herokuapp.com/">
                                        YelpCamp
                                    </a>
                                </h5>
                                <span className="techLogos">
                                    <span
                                        className="iconify"
                                        data-icon="vscode-icons:file-type-html"
                                    ></span>
                                    <span
                                        className="iconify"
                                        data-icon="vscode-icons:file-type-css"
                                    ></span>
                                    <span
                                        className="iconify"
                                        data-icon="logos:javascript"
                                    ></span>
                                    <span
                                        className="iconify"
                                        data-icon="logos:nodejs-icon"
                                    ></span>
                                    <span
                                        className="iconify"
                                        data-icon="vscode-icons:file-type-ejs"
                                    ></span>
                                    <span
                                        className="iconify"
                                        data-icon="logos:express"
                                    ></span>
                                    <span
                                        className="iconify"
                                        data-icon="file-icons:moment"
                                    ></span>
                                    <span
                                        className="iconify"
                                        data-icon="vscode-icons:file-type-mongo"
                                    ></span>
                                    <span
                                        className="iconify"
                                        data-icon="logos:passport"
                                    ></span>
                                    <span
                                        className="iconify"
                                        data-icon="file-icons:leaflet"
                                    ></span>
                                    <span
                                        className="iconify"
                                        data-icon="logos:bootstrap"
                                    ></span>
                                </span>
                                <hr />
                                <p className="card-text">
                                    A campground viewing website that allows
                                    users, with secure authorisation and
                                    authentication, to login and submit, review
                                    and comment on a range of potential
                                    campsites. Built with Express, EJS, MongoDB,
                                    Mongoose and Passport.
                                </p>
                            </div>
                            <div className="card-footer linksFooter">
                                <small className="text-muted links">
                                    <a href="https://obscure-thicket-12063.herokuapp.com/">
                                        <span
                                            className="iconify"
                                            data-icon="bx:bx-link-external"
                                        ></span>
                                    </a>
                                    <span
                                        className="iconify"
                                        data-icon="et:mobile"
                                    ></span>
                                </small>
                            </div>
                            <div className="card-footer">
                                <small className="text-muted">
                                    Contributors:{" "}
                                    <a href="https://github.com/AKP-13">
                                        Alex Peirson
                                    </a>{" "}
                                    {"&"}{" "}
                                    <a href="https://www.youtube.com/channel/UCrqAGUPPMOdo0jfQ6grikZw">
                                        Colt Steele
                                    </a>
                                    .
                                </small>
                            </div>
                        </div>
                    </div>
                    <div className="col mb-4">
                        <div className="card h-100">
                            <a href="https://akp13.pythonanywhere.com/#/">
                                <img
                                    src="https://res.cloudinary.com/de8a23w1z/image/upload/c_scale,w_900/v1603385584/portfolio/Screenshot_2020-10-22_at_17.52.28_ecgbpi.png"
                                    className="card-img-top"
                                    alt="Link to FIFA 21 Random Match Generator"
                                />
                            </a>
                            <div className="card-body">
                                <h5 className="card-title">
                                    <a href="https://akp13.pythonanywhere.com/#/">
                                        FIFA 21 Random Match Generator
                                    </a>
                                </h5>
                                <span className="techLogos">
                                    <span
                                        className="iconify"
                                        data-icon="vscode-icons:file-type-html"
                                    ></span>
                                    <span
                                        className="iconify"
                                        data-icon="vscode-icons:file-type-css"
                                    ></span>
                                    <span
                                        className="iconify"
                                        data-icon="logos:javascript"
                                    ></span>
                                    <span
                                        className="iconify"
                                        data-icon="vscode-icons:file-type-python"
                                    ></span>
                                    <span
                                        className="iconify"
                                        data-icon="logos:django"
                                    ></span>
                                    <span
                                        className="iconify"
                                        data-icon="logos:react"
                                    ></span>
                                    <span
                                        className="iconify"
                                        data-icon="logos:redux"
                                    ></span>
                                    <span
                                        className="iconify"
                                        data-icon="vscode-icons:file-type-babel2"
                                    ></span>
                                    <span
                                        className="iconify"
                                        data-icon="logos:webpack"
                                    ></span>
                                    <span
                                        className="iconify"
                                        data-icon="logos:bootstrap"
                                    ></span>
                                </span>
                                <hr />
                                <p className="card-text">
                                    Allows users to generate two random teams
                                    for themselves and a friend to play with in
                                    a FIFA 21 match with the option of logging
                                    in to record their results.
                                </p>
                            </div>
                            <div className="card-footer linksFooter">
                                <small className="text-muted links">
                                    <a href="https://akp13.pythonanywhere.com/#/">
                                        <span
                                            className="iconify"
                                            data-icon="bx:bx-link-external"
                                        ></span>
                                    </a>
                                    <span
                                        className="iconify"
                                        data-icon="et:mobile"
                                    ></span>
                                    <a href="https://github.com/AKP-13/fifa_match_generator">
                                        <span
                                            className="iconify"
                                            data-icon="logos:github-icon"
                                        ></span>
                                    </a>
                                </small>
                            </div>
                            <div className="card-footer">
                                <small className="text-muted">
                                    Contributors:{" "}
                                    <a href="https://github.com/AKP-13">
                                        Alex Peirson
                                    </a>
                                    .
                                </small>
                            </div>
                        </div>
                    </div>
                    <div className="col mb-4">
                        <div className="card h-100">
                            <a href="https://github-clone-alex-mugisha.netlify.app/">
                                <img
                                    src="https://res.cloudinary.com/de8a23w1z/image/upload/c_scale,w_900/v1601199704/portfolio/Screenshot_2020-09-27_at_10.41.01_zwktiy.png"
                                    className="card-img-top"
                                    alt="Link to GitHub clone"
                                />
                            </a>
                            <div className="card-body">
                                <h5 className="card-title">
                                    <a href="https://github-clone-alex-mugisha.netlify.app/">
                                        GitHub Clone
                                    </a>
                                </h5>
                                <span className="techLogos">
                                    <span
                                        className="iconify"
                                        data-icon="vscode-icons:file-type-html"
                                    ></span>
                                    <span
                                        className="iconify"
                                        data-icon="vscode-icons:file-type-css"
                                    ></span>
                                    <span
                                        className="iconify"
                                        data-icon="logos:javascript"
                                    ></span>
                                    <span
                                        className="iconify"
                                        data-icon="logos:react"
                                    ></span>
                                    <span
                                        className="iconify"
                                        data-icon="vscode-icons:file-type-babel2"
                                    ></span>
                                    <span
                                        className="iconify"
                                        data-icon="logos:webpack"
                                    ></span>
                                    <span
                                        className="iconify"
                                        data-icon="simple-icons:jest"
                                    ></span>
                                </span>
                                <hr />
                                <p className="card-text">
                                    Allows users to search for a{" "}
                                    <a href="https://github.com/">GitHub</a>{" "}
                                    username and retrieve information about that
                                    user's repositories via the GitHub API.
                                    Information received includes the repository
                                    name, a link to each repository along with
                                    stargazer, fork and issues count.
                                </p>
                            </div>
                            <div className="card-footer linksFooter">
                                <small className="text-muted links">
                                    <a href="https://github-clone-alex-mugisha.netlify.app/">
                                        <span
                                            className="iconify"
                                            data-icon="bx:bx-link-external"
                                        ></span>
                                    </a>
                                    <span
                                        className="iconify"
                                        data-icon="et:mobile"
                                    ></span>
                                    <a href="https://github.com/AKP-13/GitHubClone">
                                        <span
                                            className="iconify"
                                            data-icon="logos:github-icon"
                                        ></span>
                                    </a>
                                </small>
                            </div>
                            <div className="card-footer">
                                <small className="text-muted">
                                    Contributors:{" "}
                                    <a href="https://github.com/AKP-13">
                                        Alex Peirson
                                    </a>{" "}
                                    {"&"}{" "}
                                    <a href="https://mugisha-portfolio.netlify.app/">
                                        Mugisha Uwiragiye
                                    </a>
                                    .
                                </small>
                            </div>
                        </div>
                    </div>
                    <div className="col mb-4">
                        <div className="card h-100">
                            <a href="https://healthshack.netlify.app/">
                                <img
                                    src="https://res.cloudinary.com/de8a23w1z/image/upload/c_scale,w_900/v1601411115/portfolio/Screenshot_2020-08-27_at_11.46.52_crnefi.png"
                                    className="card-img-top"
                                    alt="Link to Healthshack"
                                />
                            </a>
                            <div className="card-body">
                                <h5 className="card-title">
                                    <a href="https://healthshack.netlify.app/">
                                        Health Shack
                                    </a>
                                </h5>
                                <span className="techLogos">
                                    <span
                                        className="iconify"
                                        data-icon="vscode-icons:file-type-html"
                                    ></span>
                                    <span
                                        className="iconify"
                                        data-icon="vscode-icons:file-type-css"
                                    ></span>
                                    <span
                                        className="iconify"
                                        data-icon="logos:bootstrap"
                                    ></span>
                                </span>
                                <hr />
                                <p className="card-text">
                                    A landing page for a company called
                                    'Healthshack' showcasing recipes they offer
                                    along with the locations of their shops.
                                    Built using Bootstrap.
                                </p>
                            </div>
                            <div className="card-footer linksFooter">
                                <small className="text-muted links">
                                    <a href="https://healthshack.netlify.app/">
                                        <span
                                            className="iconify"
                                            data-icon="bx:bx-link-external"
                                        ></span>
                                    </a>
                                    <span
                                        className="iconify"
                                        data-icon="et:mobile"
                                    ></span>
                                    <a href="https://github.com/AKP-13/healthShack">
                                        <span
                                            className="iconify"
                                            data-icon="logos:github-icon"
                                        ></span>
                                    </a>
                                </small>
                            </div>
                            <div className="card-footer">
                                <small className="text-muted">
                                    Contributors:{" "}
                                    <a href="https://github.com/AKP-13">
                                        Alex Peirson
                                    </a>{" "}
                                    {"&"}{" "}
                                    <a href="https://bhuma-portfolio.netlify.app/">
                                        Bhuma Limbu
                                    </a>
                                    .
                                </small>
                            </div>
                        </div>
                    </div>
                    <div className="col mb-4">
                        <div className="card h-100">
                            <a href="https://majc-blogs.netlify.app/index.html">
                                <img
                                    src="https://res.cloudinary.com/de8a23w1z/image/upload/c_scale,w_900/v1601411186/portfolio/Screenshot_2020-08-27_at_11.52.30_dzdwu1.png"
                                    className="card-img-top"
                                    alt="Link to MAJC Blogs"
                                />
                            </a>
                            <div className="card-body">
                                <h5 className="card-title">
                                    <a href="https://majc-blogs.netlify.app/index.html">
                                        MAJC Blogs
                                    </a>
                                </h5>
                                <span className="techLogos">
                                    <span
                                        className="iconify"
                                        data-icon="vscode-icons:file-type-html"
                                    ></span>
                                    <span
                                        className="iconify"
                                        data-icon="vscode-icons:file-type-css"
                                    ></span>
                                    <span
                                        className="iconify"
                                        data-icon="logos:javascript"
                                    ></span>
                                    <span
                                        className="iconify"
                                        data-icon="logos:json"
                                    ></span>
                                    <span
                                        className="iconify"
                                        data-icon="logos:express"
                                    ></span>
                                    <span
                                        className="iconify"
                                        data-icon="logos:chai"
                                    ></span>
                                    <span
                                        className="iconify"
                                        data-icon="logos:jsdom"
                                    ></span>
                                    <span
                                        className="iconify"
                                        data-icon="logos:mocha"
                                    ></span>
                                    <span
                                        className="iconify"
                                        data-icon="vscode-icons:file-type-nyc"
                                    ></span>
                                    <span
                                        className="iconify"
                                        data-icon="logos:puppeteer"
                                    ></span>
                                </span>
                                <hr />
                                <p className="card-text">
                                    An application that allows users to
                                    anonymously create blog posts with the
                                    option of adding a GIF via the GIPHY API.
                                    Users can search for existing blog entries
                                    and react to them with a comment or a choice
                                    of emojis. Built with Vanilla JavaScript
                                    using DOM manipulation to dynamically render
                                    content from a JSON file.
                                </p>
                            </div>
                            <div className="card-footer linksFooter">
                                <small className="text-muted links">
                                    <a href="https://majc-blogs.netlify.app/index.html">
                                        <span
                                            className="iconify"
                                            data-icon="bx:bx-link-external"
                                        ></span>
                                    </a>
                                    <span
                                        className="iconify"
                                        data-icon="et:mobile"
                                    ></span>
                                    <a href="https://github.com/AKP-13/Project-1-Journal">
                                        <span
                                            className="iconify"
                                            data-icon="logos:github-icon"
                                        ></span>
                                    </a>
                                </small>
                            </div>
                            <div className="card-footer">
                                <small className="text-muted">
                                    Contributors:{" "}
                                    <a href="https://github.com/AKP-13">
                                        Alex Peirson
                                    </a>
                                    ,{" "}
                                    <a href="https://cindywfeng.netlify.app/">
                                        Cindy Feng
                                    </a>
                                    ,{" "}
                                    <a href="https://www.jamiesear.com/">
                                        Jamie Sear
                                    </a>{" "}
                                    {"&"}{" "}
                                    <a href="https://mugisha-portfolio.netlify.app/">
                                        Mugisha Uwiragiye
                                    </a>
                                    .
                                </small>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        );
    }
}

export default Projects;
