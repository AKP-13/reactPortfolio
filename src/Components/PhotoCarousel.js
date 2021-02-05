import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

function PhotoCarousel() {
    const [countries, setCountryValues] = useState({
        england: false,
        spain: false,
        france: false,
        croatia: false,
        lithuania: false,
        malaysia: false,
        singapore: false,
        indonesia: false,
        cambodia: false,
        vietnam: false,
        laos: false,
        thailand: false,
    });

    const changeHandler = (e) => {
        e.preventDefault();
        setCountryValues((countries) => {
            return { ...countries, [e.target.name]: !e.target.value };
        });
    };

    return (
        <>
            <Carousel>
                <Carousel.Item interval={10000}>
                    <img
                        className="w-100 carousel-photo thumb"
                        src="https://res.cloudinary.com/de8a23w1z/image/upload/c_scale,h_100,q_10/v1610984558/portfolio/englandPhoto_iiuiup.jpg"
                        alt="England"
                        style={{
                            display: countries.england
                                ? "none"
                                : "inline-block",
                        }}
                    />
                    <img
                        onLoad={(e) => {
                            changeHandler(e);
                        }}
                        style={{ opacity: countries.england ? 1 : 0 }}
                        className="d-block w-100 carousel-photo full"
                        src="https://res.cloudinary.com/de8a23w1z/image/upload/q_auto:best,f_auto/v1610754700/portfolio/F1824CE4-B1A6-42AF-9DA8-B089111F9BD1_lwfgkg.jpg"
                        alt="England"
                        name="england"
                    />
                    <Carousel.Caption>
                        <h3 className="countryNames">
                            <span
                                className="iconify"
                                data-icon="emojione:flag-england"
                                data-inline="false"
                            ></span>{" "}
                            England
                        </h3>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item interval={5000}>
                    <img
                        className="w-100 carousel-photo thumb"
                        src="https://res.cloudinary.com/de8a23w1z/image/upload/c_scale,h_100,q_10,f_auto/v1610729753/portfolio/IMG_0531_enftpw.jpg"
                        alt="Spain"
                        style={{
                            display: countries.spain ? "none" : "inline-block",
                        }}
                    />
                    <img
                        onLoad={(e) => {
                            changeHandler(e);
                        }}
                        style={{ opacity: countries.spain ? 1 : 0 }}
                        className="d-block w-100 carousel-photo full"
                        src="https://res.cloudinary.com/de8a23w1z/image/upload/q_auto:best,f_auto/v1610729753/portfolio/IMG_0531_enftpw.jpg"
                        alt="Spain"
                        name="spain"
                    />
                    <Carousel.Caption>
                        <h3 className="countryNames">
                            <span
                                className="iconify"
                                data-icon="emojione:flag-for-spain"
                                data-inline="false"
                            ></span>{" "}
                            Spain
                        </h3>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item interval={5000}>
                    <img
                        className="w-100 carousel-photo thumb"
                        src="https://res.cloudinary.com/de8a23w1z/image/upload/c_scale,h_100,q_10,f_auto/v1610732012/portfolio/IMG_1907_oa8clh.jpg"
                        alt="France"
                        style={{
                            display: countries.france ? "none" : "inline-block",
                        }}
                    />
                    <img
                        onLoad={(e) => {
                            changeHandler(e);
                        }}
                        style={{ opacity: countries.france ? 1 : 0 }}
                        className="d-block w-100 carousel-photo full"
                        src="https://res.cloudinary.com/de8a23w1z/image/upload/q_auto:best,f_auto/v1610732012/portfolio/IMG_1907_oa8clh.jpg"
                        alt="France"
                        name="france"
                    />
                    <Carousel.Caption>
                        <h3 className="countryNames">
                            <span
                                className="iconify"
                                data-icon="emojione:flag-for-france"
                                data-inline="false"
                            ></span>{" "}
                            France
                        </h3>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item interval={5000}>
                    <img
                        className="w-100 carousel-photo thumb"
                        src="https://res.cloudinary.com/de8a23w1z/image/upload/c_scale,h_100,q_10,f_auto,f_auto/v1610729786/portfolio/IMG_2995_v2gfy3.jpg"
                        alt="Croatia"
                        style={{
                            display: countries.croatia
                                ? "none"
                                : "inline-block",
                        }}
                    />
                    <img
                        onLoad={(e) => {
                            changeHandler(e);
                        }}
                        style={{ opacity: countries.croatia ? 1 : 0 }}
                        className="d-block w-100 carousel-photo full"
                        src="https://res.cloudinary.com/de8a23w1z/image/upload/q_auto:best,f_auto/v1610729786/portfolio/IMG_2995_v2gfy3.jpg"
                        alt="Croatia"
                        name="croatia"
                    />
                    <Carousel.Caption>
                        <h3 className="countryNames">
                            <span
                                className="iconify"
                                data-icon="emojione:flag-for-croatia"
                                data-inline="false"
                            ></span>{" "}
                            Croatia
                        </h3>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item interval={5000}>
                    <img
                        className="w-100 carousel-photo thumb"
                        src="https://res.cloudinary.com/de8a23w1z/image/upload/c_scale,h_100,q_10,f_auto,f_auto/v1610732074/portfolio/IMG_0465_imjmcw.jpg"
                        alt="Lithuania"
                        style={{
                            display: countries.lithuania
                                ? "none"
                                : "inline-block",
                        }}
                    />
                    <img
                        onLoad={(e) => {
                            changeHandler(e);
                        }}
                        style={{ opacity: countries.lithuania ? 1 : 0 }}
                        className="d-block w-100 carousel-photo full"
                        src="https://res.cloudinary.com/de8a23w1z/image/upload/q_auto:best,f_auto/v1610732074/portfolio/IMG_0465_imjmcw.jpg"
                        alt="Lithuania"
                        name="lithuania"
                    />
                    <Carousel.Caption>
                        <h3 className="countryNames">
                            <span
                                className="iconify"
                                data-icon="emojione:flag-for-lithuania"
                                data-inline="false"
                            ></span>{" "}
                            Lithuania
                        </h3>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item interval={5000}>
                    <img
                        className="w-100 carousel-photo thumb"
                        src="https://res.cloudinary.com/de8a23w1z/image/upload/c_scale,h_100,q_10,f_auto,f_auto/v1610732113/portfolio/IMG_3950_v4e22o.jpg"
                        alt="Malaysia"
                        style={{
                            display: countries.malaysia
                                ? "none"
                                : "inline-block",
                        }}
                    />
                    <img
                        onLoad={(e) => {
                            changeHandler(e);
                        }}
                        style={{ opacity: countries.malaysia ? 1 : 0 }}
                        className="d-block w-100 carousel-photo full"
                        src="https://res.cloudinary.com/de8a23w1z/image/upload/q_auto:best,f_auto/v1610732113/portfolio/IMG_3950_v4e22o.jpg"
                        alt="Malaysia"
                        name="malaysia"
                    />
                    <Carousel.Caption>
                        <h3 className="countryNames">
                            <span
                                className="iconify"
                                data-icon="emojione:flag-for-malaysia"
                                data-inline="false"
                            ></span>{" "}
                            Malaysia
                        </h3>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item interval={5000}>
                    <img
                        className="w-100 carousel-photo thumb"
                        src="https://res.cloudinary.com/de8a23w1z/image/upload/c_scale,h_100,q_10,f_auto,f_auto/v1600948599/portfolio/IMG_2006_sknklq.jpg"
                        alt="Singapore"
                        style={{
                            display: countries.singapore
                                ? "none"
                                : "inline-block",
                        }}
                    />
                    <img
                        onLoad={(e) => {
                            changeHandler(e);
                        }}
                        style={{ opacity: countries.singapore ? 1 : 0 }}
                        className="d-block w-100 carousel-photo full"
                        src="https://res.cloudinary.com/de8a23w1z/image/upload/q_auto:best,f_auto/v1600948599/portfolio/IMG_2006_sknklq.jpg"
                        alt="Singapore"
                        name="singapore"
                    />
                    <Carousel.Caption>
                        <h3 className="countryNames">
                            <span
                                className="iconify"
                                data-icon="emojione:flag-for-singapore"
                                data-inline="false"
                            ></span>{" "}
                            Singapore
                        </h3>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item interval={5000}>
                    <img
                        className="w-100 carousel-photo thumb"
                        src="https://res.cloudinary.com/de8a23w1z/image/upload/c_scale,h_100,q_10,f_auto,f_auto/v1610732072/portfolio/IMG_3095_h5ffgn.jpg"
                        alt="Indonesia"
                        style={{
                            display: countries.indonesia
                                ? "none"
                                : "inline-block",
                        }}
                    />
                    <img
                        onLoad={(e) => {
                            changeHandler(e);
                        }}
                        style={{ opacity: countries.indonesia ? 1 : 0 }}
                        className="d-block w-100 carousel-photo full"
                        src="https://res.cloudinary.com/de8a23w1z/image/upload/q_auto:best,f_auto/v1610732072/portfolio/IMG_3095_h5ffgn.jpg"
                        alt="Indonesia"
                        name="indonesia"
                    />
                    <Carousel.Caption>
                        <h3 className="countryNames">
                            <span
                                className="iconify"
                                data-icon="emojione:flag-for-indonesia"
                                data-inline="false"
                            ></span>{" "}
                            Indonesia
                        </h3>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item interval={5000}>
                    <img
                        className="w-100 carousel-photo thumb"
                        src="https://res.cloudinary.com/de8a23w1z/image/upload/c_scale,h_100,q_10,f_auto,f_auto/v1608314600/portfolio/IMG_4328_uz4xxp.jpg"
                        alt="Cambodia"
                        style={{
                            display: countries.cambodia
                                ? "none"
                                : "inline-block",
                        }}
                    />
                    <img
                        onLoad={(e) => {
                            changeHandler(e);
                        }}
                        style={{ opacity: countries.cambodia ? 1 : 0 }}
                        className="d-block w-100 carousel-photo full"
                        src="https://res.cloudinary.com/de8a23w1z/image/upload/q_auto:best,f_auto/v1608314600/portfolio/IMG_4328_uz4xxp.jpg"
                        alt="Cambodia"
                        name="cambodia"
                    />
                    <Carousel.Caption>
                        <h3 className="countryNames">
                            <span
                                className="iconify"
                                data-icon="emojione:flag-for-indonesia"
                                data-inline="false"
                            ></span>{" "}
                            Cambodia
                        </h3>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item interval={5000}>
                    <img
                        className="w-100 carousel-photo thumb"
                        src="https://res.cloudinary.com/de8a23w1z/image/upload/c_scale,h_100,q_10,f_auto,f_auto/v1599147896/portfolio/IMG_5418_uecow9.jpg"
                        alt="Vietnam"
                        style={{
                            display: countries.vietnam
                                ? "none"
                                : "inline-block",
                        }}
                    />
                    <img
                        onLoad={(e) => {
                            changeHandler(e);
                        }}
                        style={{ opacity: countries.vietnam ? 1 : 0 }}
                        className="d-block w-100 carousel-photo full"
                        src="https://res.cloudinary.com/de8a23w1z/image/upload/q_auto:best,f_auto/v1599147896/portfolio/IMG_5418_uecow9.jpg"
                        alt="Vietnam"
                        name="vietnam"
                    />
                    <Carousel.Caption>
                        <h3 className="countryNames">
                            <span
                                className="iconify"
                                data-icon="emojione:flag-for-vietnam"
                                data-inline="false"
                            ></span>{" "}
                            Vietnam
                        </h3>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item interval={5000}>
                    <img
                        className="w-100 carousel-photo thumb"
                        src="https://res.cloudinary.com/de8a23w1z/image/upload/c_scale,h_100,q_10,f_auto,f_auto/v1610729772/portfolio/IMG_6767_x17saw.jpg"
                        alt="Laos"
                        style={{
                            display: countries.laos ? "none" : "inline-block",
                        }}
                    />
                    <img
                        onLoad={(e) => {
                            changeHandler(e);
                        }}
                        style={{ opacity: countries.laos ? 1 : 0 }}
                        className="d-block w-100 carousel-photo full"
                        src="https://res.cloudinary.com/de8a23w1z/image/upload/q_auto:best,f_auto/v1610729772/portfolio/IMG_6767_x17saw.jpg"
                        alt="Laos"
                        name="laos"
                    />
                    <Carousel.Caption>
                        <h3 className="countryNames">
                            <span
                                className="iconify"
                                data-icon="emojione:flag-for-laos"
                                data-inline="false"
                            ></span>{" "}
                            Laos
                        </h3>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item interval={5000}>
                    <img
                        className="w-100 carousel-photo thumb"
                        src="https://res.cloudinary.com/de8a23w1z/image/upload/c_scale,h_100,q_10,f_auto,f_auto/v1610732035/portfolio/IMG_7171_v4jvv3.jpg"
                        alt="Thailand"
                        style={{
                            display: countries.thailand
                                ? "none"
                                : "inline-block",
                        }}
                    />
                    <img
                        onLoad={(e) => {
                            changeHandler(e);
                        }}
                        style={{ opacity: countries.thailand ? 1 : 0 }}
                        className="d-block w-100 carousel-photo full"
                        src="https://res.cloudinary.com/de8a23w1z/image/upload/q_auto:best,f_auto/v1610732035/portfolio/IMG_7171_v4jvv3.jpg"
                        alt="Thailand"
                        name="thailand"
                    />

                    <Carousel.Caption>
                        <h3 className="countryNames">
                            <span
                                className="iconify"
                                data-icon="emojione:flag-for-thailand"
                                data-inline="false"
                            ></span>{" "}
                            Thailand
                        </h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
}

export default PhotoCarousel;
