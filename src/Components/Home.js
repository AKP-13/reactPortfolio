import React, { Component } from "react";
import "../styles/home.css";

const mainBg = {
    backgroundImage:
        'url("https://res.cloudinary.com/de8a23w1z/image/upload/v1599157042/portfolio/portfolioBackground450PPI_jpspsi.jpg")',
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
};

class Home extends Component {
    componentDidMount() {
        document.body.style = { mainBg };
    }

    render() {
        return (
            <>
                <h1 id="homeTitle">Alex Peirson</h1>
            </>
        );
    }
}

export default Home;
