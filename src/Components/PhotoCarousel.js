import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import { InlineIcon } from "@iconify/react";

import flagEngland from "@iconify-icons/emojione/flag-england";
import flagForSpain from "@iconify-icons/emojione/flag-for-spain";
import flagForFrance from "@iconify-icons/emojione/flag-for-france";
import flagForCroatia from "@iconify-icons/emojione/flag-for-croatia";
import flagForLithuania from "@iconify-icons/emojione/flag-for-lithuania";
import flagForMalaysia from "@iconify-icons/emojione/flag-for-malaysia";
import flagForSingapore from "@iconify-icons/emojione/flag-for-singapore";
import flagForIndonesia from "@iconify-icons/emojione/flag-for-indonesia";
import flagForCambodia from "@iconify-icons/emojione/flag-for-cambodia";
import flagForVietnam from "@iconify-icons/emojione/flag-for-vietnam";
import flagForLaos from "@iconify-icons/emojione/flag-for-laos";
import flagForThailand from "@iconify-icons/emojione/flag-for-thailand";

class PhotoCarousel extends Component {
    render() {
        return (
            <>
                <Carousel>
                    <Carousel.Item interval={5000}>
                        <img
                            className="d-block w-100 carousel-photo"
                            src="https://res.cloudinary.com/de8a23w1z/image/upload/q_auto:best,f_auto/v1610754700/portfolio/F1824CE4-B1A6-42AF-9DA8-B089111F9BD1_lwfgkg.jpg"
                            alt="England"
                        />

                        <Carousel.Caption>
                            <h3 className="countryNames">
                                <InlineIcon icon={flagEngland} /> England
                            </h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={5000}>
                        <img
                            className="d-block w-100 carousel-photo"
                            src="https://res.cloudinary.com/de8a23w1z/image/upload/q_auto:best,f_auto/v1610729753/portfolio/IMG_0531_enftpw.jpg"
                            alt="Spain"
                        />

                        <Carousel.Caption>
                            <h3 className="countryNames">
                                <InlineIcon icon={flagForSpain} /> Spain
                            </h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={5000}>
                        <img
                            className="d-block w-100 carousel-photo"
                            src="https://res.cloudinary.com/de8a23w1z/image/upload/q_auto:best,f_auto/v1610732012/portfolio/IMG_1907_oa8clh.jpg"
                            alt="France"
                        />

                        <Carousel.Caption>
                            <h3 className="countryNames">
                                <InlineIcon icon={flagForFrance} /> France
                            </h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={5000}>
                        <img
                            className="d-block w-100 carousel-photo"
                            src="https://res.cloudinary.com/de8a23w1z/image/upload/q_auto:best,f_auto/v1610729786/portfolio/IMG_2995_v2gfy3.jpg"
                            alt="Croatia"
                        />

                        <Carousel.Caption>
                            <h3 className="countryNames">
                                <InlineIcon icon={flagForCroatia} /> Croatia
                            </h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={5000}>
                        <img
                            className="d-block w-100 carousel-photo"
                            src="https://res.cloudinary.com/de8a23w1z/image/upload/q_auto:best,f_auto/v1610732074/portfolio/IMG_0465_imjmcw.jpg"
                            alt="Lithuania"
                        />

                        <Carousel.Caption>
                            <h3 className="countryNames">
                                <InlineIcon icon={flagForLithuania} /> Lithuania
                            </h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={5000}>
                        <img
                            className="d-block w-100 carousel-photo"
                            src="https://res.cloudinary.com/de8a23w1z/image/upload/q_auto:best,f_auto/v1610732113/portfolio/IMG_3950_v4e22o.jpg"
                            alt="Malaysia"
                        />

                        <Carousel.Caption>
                            <h3 className="countryNames">
                                <InlineIcon icon={flagForMalaysia} /> Malaysia
                            </h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={5000}>
                        <img
                            className="d-block w-100 carousel-photo"
                            src="https://res.cloudinary.com/de8a23w1z/image/upload/q_auto:best,f_auto/v1600948599/portfolio/IMG_2006_sknklq.jpg"
                            alt="Singapore"
                        />

                        <Carousel.Caption>
                            <h3 className="countryNames">
                                <InlineIcon icon={flagForSingapore} /> Singapore
                            </h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={5000}>
                        <img
                            className="d-block w-100 carousel-photo"
                            src="https://res.cloudinary.com/de8a23w1z/image/upload/q_auto:best,f_auto/v1610732072/portfolio/IMG_3095_h5ffgn.jpg"
                            alt="Indonesia"
                        />

                        <Carousel.Caption>
                            <h3 className="countryNames">
                                <InlineIcon icon={flagForIndonesia} /> Indonesia
                            </h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={5000}>
                        <img
                            className="d-block w-100 carousel-photo"
                            src="https://res.cloudinary.com/de8a23w1z/image/upload/q_auto:best,f_auto/v1608314600/portfolio/IMG_4328_uz4xxp.jpg"
                            alt="Cambodia"
                        />

                        <Carousel.Caption>
                            <h3 className="countryNames">
                                <InlineIcon icon={flagForCambodia} /> Cambodia
                            </h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={5000}>
                        <img
                            className="d-block w-100 carousel-photo"
                            src="https://res.cloudinary.com/de8a23w1z/image/upload/q_auto:best,f_auto/v1599147896/portfolio/IMG_5418_uecow9.jpg"
                            alt="Vietnam"
                        />

                        <Carousel.Caption>
                            <h3 className="countryNames">
                                <InlineIcon icon={flagForVietnam} /> Vietnam
                            </h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={5000}>
                        <img
                            className="d-block w-100 carousel-photo"
                            src="https://res.cloudinary.com/de8a23w1z/image/upload/q_auto:best,f_auto/v1610729772/portfolio/IMG_6767_x17saw.jpg"
                            alt="Laos"
                        />

                        <Carousel.Caption>
                            <h3 className="countryNames">
                                <InlineIcon icon={flagForLaos} /> Laos
                            </h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={5000}>
                        <img
                            className="d-block w-100 carousel-photo"
                            src="https://res.cloudinary.com/de8a23w1z/image/upload/q_auto:best,f_auto/v1610732035/portfolio/IMG_7171_v4jvv3.jpg"
                            alt="Thailand"
                        />

                        <Carousel.Caption>
                            <h3 className="countryNames">
                                <InlineIcon icon={flagForThailand} /> Thailand
                            </h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </>
        );
    }
}

export default PhotoCarousel;
