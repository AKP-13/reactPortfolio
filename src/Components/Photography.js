import React, { Component } from "react";
import "../styles/photography.css";

// function handleClick(e) {
//     console.log(e.nativeEvent.path[0].childNodes[0].innerText);
// }

class Photography extends Component {
    state = {
        Malaysia: false,
        Sinagpore: false,
        Bali: false,
        Cambodia: true,
        Vietnam: false,
        Laos: false,
        Thailand: false,
    };

    componentDidMount() {
        document.body.style.background = "#fff";
    }

    render() {
        return (
            <>
                <div className="expanding-cards">
                    <div
                        className={
                            this.state.Malaysia ? "panel active" : "panel"
                        }
                        style={{
                            backgroundImage:
                                "url(" +
                                "https://res.cloudinary.com/de8a23w1z/image/upload/v1600948783/portfolio/IMG_1179_cdkysl.jpg" +
                                ")",
                        }}
                        onClick={() =>
                            this.setState({ Malaysia: !this.state.Malaysia })
                        }
                    >
                        <h3>Malaysia</h3>
                    </div>
                    <div
                        className={
                            this.state.Singapore ? "panel active" : "panel"
                        }
                        style={{
                            backgroundImage:
                                "url(" +
                                "https://res.cloudinary.com/de8a23w1z/image/upload/v1600948599/portfolio/IMG_2006_sknklq.jpg" +
                                ")",
                        }}
                        onClick={() =>
                            this.setState({ Singapore: !this.state.Singapore })
                        }
                    >
                        <h3>Sinagpore</h3>
                    </div>
                    <div
                        className={this.state.Bali ? "panel active" : "panel"}
                        style={{
                            backgroundImage:
                                "url(" +
                                "https://res.cloudinary.com/de8a23w1z/image/upload/v1599147878/portfolio/IMG_4216_2_qmiwqz.jpg" +
                                ")",
                        }}
                        onClick={() =>
                            this.setState({ Bali: !this.state.Bali })
                        }
                    >
                        <h3>Bali</h3>
                    </div>
                    <div
                        className={
                            this.state.Cambodia ? "panel active" : "panel"
                        }
                        style={{
                            backgroundImage:
                                "url(" +
                                "https://res.cloudinary.com/de8a23w1z/image/upload/v1608314600/portfolio/IMG_4328_uz4xxp.jpg" +
                                ")",
                        }}
                        onClick={() =>
                            this.setState({ Cambodia: !this.state.Cambodia })
                        }
                    >
                        <h3>Cambodia</h3>
                    </div>
                    <div
                        className={
                            this.state.Vietnam ? "panel active" : "panel"
                        }
                        style={{
                            backgroundImage:
                                "url(" +
                                "https://res.cloudinary.com/de8a23w1z/image/upload/v1599147896/portfolio/IMG_5418_uecow9.jpg" +
                                ")",
                        }}
                        onClick={() =>
                            this.setState({ Vietnam: !this.state.Vietnam })
                        }
                    >
                        <h3>Vitenam</h3>
                    </div>
                    <div
                        className={this.state.Laos ? "panel active" : "panel"}
                        style={{
                            backgroundImage:
                                "url(" +
                                "https://res.cloudinary.com/de8a23w1z/image/upload/v1599147901/portfolio/IMG_6805_zeb0wi.jpg" +
                                ")",
                        }}
                        onClick={() =>
                            this.setState({ Laos: !this.state.Laos })
                        }
                    >
                        <h3>Laos</h3>
                    </div>
                    <div
                        className={
                            this.state.Thailand ? "panel active" : "panel"
                        }
                        style={{
                            backgroundImage:
                                "url(" +
                                "https://res.cloudinary.com/de8a23w1z/image/upload/v1599147904/portfolio/IMG_7166_pfmlex.jpg" +
                                ")",
                        }}
                        onClick={() =>
                            this.setState({ Thailand: !this.state.Thailand })
                        }
                    >
                        <h3>Thailand</h3>
                    </div>
                </div>
            </>
        );
    }
}

export default Photography;
