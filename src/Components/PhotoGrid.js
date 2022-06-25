import React, { useEffect } from "react";
import LazyLoad from "react-lazyload";

const PhotoGrid = () => {
    useEffect(() => {
        document.body.style.background = "#fff";
    }, []);

    return (
        <div className="row">
            <div className="column">
                <LazyLoad
                    once={true}
                    placeholder={
                        <img src="https://res.cloudinary.com/de8a23w1z/image/upload/c_scale,h_50,q_10/v1600947969/portfolio/IMG_3097_bvtnss.jpg"></img>
                    }
                >
                    <img
                        src="https://res.cloudinary.com/de8a23w1z/image/upload/c_scale,w_900,q_auto:best,f_auto/v1600947969/portfolio/IMG_3097_bvtnss.jpg"
                        alt="Broken Beach - Nusa Penida, Bali"
                    />
                </LazyLoad>

                <LazyLoad
                    once={true}
                    placeholder={
                        <img
                            src="https://res.cloudinary.com/de8a23w1z/image/upload/c_scale,h_50,q_10,f_auto/v1600948081/portfolio/IMG_4719_wkuazh.jpg"
                            alt="Red Sand Dunes (Đồi Hồng) - Mũi Né, Vietnam."
                        />
                    }
                >
                    <img
                        src="https://res.cloudinary.com/de8a23w1z/image/upload/c_scale,w_900,q_auto:best,f_auto/v1600948081/portfolio/IMG_4719_wkuazh.jpg"
                        alt="Red Sand Dunes (Đồi Hồng) - Mũi Né, Vietnam."
                    />
                </LazyLoad>

                <LazyLoad
                    once={true}
                    placeholder={
                        <img
                            src="https://res.cloudinary.com/de8a23w1z/image/upload/c_scale,h_50,q_10,f_auto/v1599147867/portfolio/IMG_0194_chlcho.jpg"
                            alt="Boat on the Curonian Lagoon - Klaipėda, Lithuania."
                        />
                    }
                >
                    <img
                        src="https://res.cloudinary.com/de8a23w1z/image/upload/c_scale,w_900,q_auto:best,f_auto/v1599147867/portfolio/IMG_0194_chlcho.jpg"
                        alt="Boat on the Curonian Lagoon - Klaipėda, Lithuania."
                    />
                </LazyLoad>

                <LazyLoad
                    once={true}
                    placeholder={
                        <img
                            src="https://res.cloudinary.com/de8a23w1z/image/upload/c_scale,h_50,q_10,f_auto/v1600948295/portfolio/IMG_0211_ybcrbi.jpg"
                            alt="Sunset over the Curonian Lagoon - Klaipėda, Lithuania."
                        />
                    }
                >
                    <img
                        src="https://res.cloudinary.com/de8a23w1z/image/upload/c_scale,w_900,q_auto:best,f_auto/v1600948295/portfolio/IMG_0211_ybcrbi.jpg"
                        alt="Sunset over the Curonian Lagoon - Klaipėda, Lithuania."
                    />
                </LazyLoad>

                <LazyLoad
                    once={true}
                    placeholder={
                        <img
                            src="https://res.cloudinary.com/de8a23w1z/image/upload/c_scale,h_50,q_10,f_auto/v1600948207/portfolio/IMG_0495_pnnij5.jpg"
                            alt="Sand dunes on the Curonian Spit - Klaipėda, Lithuania."
                        />
                    }
                >
                    <img
                        src="https://res.cloudinary.com/de8a23w1z/image/upload/c_scale,w_900,q_auto:best,f_auto/v1600948207/portfolio/IMG_0495_pnnij5.jpg"
                        alt="Sand dunes on the Curonian Spit - Klaipėda, Lithuania."
                    />
                </LazyLoad>

                <LazyLoad
                    once={true}
                    placeholder={
                        <img
                            src="https://res.cloudinary.com/de8a23w1z/image/upload/c_scale,h_50,q_10,f_auto/v1600948393/portfolio/IMG_0463_bvwult.jpg"
                            alt="Forest - Klaipėda, Lithuania."
                        />
                    }
                >
                    <img
                        src="https://res.cloudinary.com/de8a23w1z/image/upload/c_scale,w_900,q_auto:best,f_auto/v1600948393/portfolio/IMG_0463_bvwult.jpg"
                        alt="Forest - Klaipėda, Lithuania."
                    />
                </LazyLoad>
            </div>
            <div className="column">
                <LazyLoad
                    once={true}
                    placeholder={
                        <img
                            src="https://res.cloudinary.com/de8a23w1z/image/upload/c_scale,w_50,q_10,f_auto/v1600948397/portfolio/IMG_0471_tiypbm.jpg"
                            alt="Wooden path among sand dunes - Klaipėda, Lithuania."
                        />
                    }
                >
                    <img
                        src="https://res.cloudinary.com/de8a23w1z/image/upload/c_scale,w_900,q_auto:best,f_auto/v1600948397/portfolio/IMG_0471_tiypbm.jpg"
                        alt="Wooden path among sand dunes - Klaipėda, Lithuania."
                    />
                </LazyLoad>

                <LazyLoad
                    once={true}
                    placeholder={
                        <img
                            src="https://res.cloudinary.com/de8a23w1z/image/upload/c_scale,w_50,q_10,f_auto/v1599147868/portfolio/IMG_0507_lilmdi.jpg"
                            alt="Close up of an ant on a tree - Klaipėda, Lithuania."
                        />
                    }
                >
                    <img
                        src="https://res.cloudinary.com/de8a23w1z/image/upload/c_scale,w_900,q_auto:best,f_auto/v1599147868/portfolio/IMG_0507_lilmdi.jpg"
                        alt="Close up of an ant on a tree - Klaipėda, Lithuania."
                    />
                </LazyLoad>

                <LazyLoad
                    once={true}
                    placeholder={
                        <img
                            src="https://res.cloudinary.com/de8a23w1z/image/upload/c_scale,w_50,q_10,f_auto/v1600948489/portfolio/IMG_0557_icmlg0.jpg"
                            alt="Sunrise over Mossy Forest - Cameron Highlands, Malaysia."
                        />
                    }
                >
                    <img
                        src="https://res.cloudinary.com/de8a23w1z/image/upload/c_scale,w_900,q_auto:best,f_auto/v1600948489/portfolio/IMG_0557_icmlg0.jpg"
                        alt="Sunrise over Mossy Forest - Cameron Highlands, Malaysia."
                    />
                </LazyLoad>

                <LazyLoad
                    once={true}
                    placeholder={
                        <img
                            src="https://res.cloudinary.com/de8a23w1z/image/upload/c_scale,w_50,q_10,f_auto/v1599147873/portfolio/IMG_0675_o3oaib.jpg"
                            alt="Sauna - Suviekas, Lithuania."
                        />
                    }
                >
                    <img
                        src="https://res.cloudinary.com/de8a23w1z/image/upload/c_scale,w_900,q_auto:best,f_auto/v1599147873/portfolio/IMG_0675_o3oaib.jpg"
                        alt="Sauna - Suviekas, Lithuania."
                    />
                </LazyLoad>

                <LazyLoad
                    once={true}
                    placeholder={
                        <img
                            src="https://res.cloudinary.com/de8a23w1z/image/upload/c_scale,w_50,q_10,f_auto/v1599147869/portfolio/IMG_0770_gqid4o.jpg"
                            alt="Sunset - Suviekas, Lithuania."
                        />
                    }
                >
                    <img
                        src="https://res.cloudinary.com/de8a23w1z/image/upload/c_scale,w_900,q_auto:best,f_auto/v1599147869/portfolio/IMG_0770_gqid4o.jpg"
                        alt="Sunset - Suviekas, Lithuania."
                    />
                </LazyLoad>

                <LazyLoad
                    once={true}
                    placeholder={
                        <img
                            src="https://res.cloudinary.com/de8a23w1z/image/upload/c_scale,w_50,q_10,f_auto/v1599147888/portfolio/IMG_2950_2_kwyhu9.jpg"
                            alt="Kelingking Beach - Nusa Penida, Bali."
                        />
                    }
                >
                    <img
                        src="https://res.cloudinary.com/de8a23w1z/image/upload/c_scale,w_900,q_auto:best,f_auto/v1599147888/portfolio/IMG_2950_2_kwyhu9.jpg"
                        alt="Kelingking Beach - Nusa Penida, Bali."
                    />
                </LazyLoad>
            </div>
            <div className="column">
                <LazyLoad
                    once={true}
                    placeholder={
                        <img
                            src="https://res.cloudinary.com/de8a23w1z/image/upload/c_scale,w_50,q_10,f_auto/v1599147871/portfolio/IMG_0795_vybzjp.jpg"
                            alt="Bonfire - Suviekas, Lithuania."
                        />
                    }
                >
                    <img
                        src="https://res.cloudinary.com/de8a23w1z/image/upload/c_scale,w_900,q_auto:best,f_auto/v1599147871/portfolio/IMG_0795_vybzjp.jpg"
                        alt="Bonfire - Suviekas, Lithuania."
                    />
                </LazyLoad>

                <LazyLoad
                    once={true}
                    placeholder={
                        <img
                            src="https://res.cloudinary.com/de8a23w1z/image/upload/c_scale,w_50,q_10,f_auto/v1599147896/portfolio/IMG_5418_uecow9.jpg"
                            alt="Up in the clouds - Hải Vân Pass, Vietnam."
                        />
                    }
                >
                    <img
                        src="https://res.cloudinary.com/de8a23w1z/image/upload/c_scale,w_900,q_auto:best,f_auto/v1599147896/portfolio/IMG_5418_uecow9.jpg"
                        alt="Up in the clouds - Hải Vân Pass, Vietnam."
                    />
                </LazyLoad>

                <LazyLoad
                    once={true}
                    placeholder={
                        <img
                            src="https://res.cloudinary.com/de8a23w1z/image/upload/c_scale,w_50,q_10,f_auto/v1599147873/portfolio/IMG_1010_rdnedb.jpg"
                            alt="Railay Beach - Krabi, Thailand."
                        />
                    }
                >
                    <img
                        src="https://res.cloudinary.com/de8a23w1z/image/upload/c_scale,w_900,q_auto:best,f_auto/v1599147873/portfolio/IMG_1010_rdnedb.jpg"
                        alt="Railay Beach - Krabi, Thailand."
                    />
                </LazyLoad>

                <LazyLoad
                    once={true}
                    placeholder={
                        <img
                            src="https://res.cloudinary.com/de8a23w1z/image/upload/c_scale,w_50,q_10,f_auto/v1599147874/portfolio/IMG_1035_iaghuv.jpg"
                            alt="Indo-Pacific Sergeant Fish - Krabi, Thailand."
                        />
                    }
                >
                    <img
                        src="https://res.cloudinary.com/de8a23w1z/image/upload/c_scale,w_900,q_auto:best,f_auto/v1599147874/portfolio/IMG_1035_iaghuv.jpg"
                        alt="Indo-Pacific Sergeant Fish - Krabi, Thailand."
                    />
                </LazyLoad>

                <LazyLoad
                    once={true}
                    placeholder={
                        <img
                            src="https://res.cloudinary.com/de8a23w1z/image/upload/c_scale,w_50,q_10,f_auto/v1599147874/portfolio/IMG_1670_lvgcga.jpg"
                            alt="Pink flower - Flower Dome, Singapore."
                        />
                    }
                >
                    <img
                        src="https://res.cloudinary.com/de8a23w1z/image/upload/c_scale,w_900,q_auto:best,f_auto/v1599147874/portfolio/IMG_1670_lvgcga.jpg"
                        alt="Pink flower - Flower Dome, Singapore."
                    />
                </LazyLoad>

                <LazyLoad
                    once={true}
                    placeholder={
                        <img
                            src="https://res.cloudinary.com/de8a23w1z/image/upload/c_scale,w_50,q_10,f_auto/v1599147878/portfolio/IMG_4216_2_qmiwqz.jpg"
                            alt="Green Turtle - Gili Air, Indonesia."
                        />
                    }
                >
                    <img
                        src="https://res.cloudinary.com/de8a23w1z/image/upload/c_scale,w_900,q_auto:best,f_auto/v1599147878/portfolio/IMG_4216_2_qmiwqz.jpg"
                        alt="Green Turtle - Gili Air, Indonesia."
                    />
                </LazyLoad>
            </div>
            <div className="column">
                <LazyLoad
                    once={true}
                    placeholder={
                        <img
                            src="https://res.cloudinary.com/de8a23w1z/image/upload/c_scale,w_50,q_10,f_auto/v1600948783/portfolio/IMG_1179_cdkysl.jpg"
                            alt="Views over Langkawi - Langkawi, Malaysia."
                        />
                    }
                >
                    <img
                        src="https://res.cloudinary.com/de8a23w1z/image/upload/c_scale,w_900,q_auto:best,f_auto/v1600948783/portfolio/IMG_1179_cdkysl.jpg"
                        alt="Views over Langkawi - Langkawi, Malaysia."
                    />
                </LazyLoad>

                <LazyLoad
                    once={true}
                    placeholder={
                        <img
                            src="https://res.cloudinary.com/de8a23w1z/image/upload/c_scale,w_50,q_10,f_auto/v1599147890/portfolio/IMG_1849_2_xcjzwe.jpg"
                            alt="Water lily - ArtScience Museum, Singapore."
                        />
                    }
                >
                    <img
                        src="https://res.cloudinary.com/de8a23w1z/image/upload/c_scale,w_900,q_auto:best,f_auto/v1599147890/portfolio/IMG_1849_2_xcjzwe.jpg"
                        alt="Water lily - ArtScience Museum, Singapore."
                    />
                </LazyLoad>

                <LazyLoad
                    once={true}
                    placeholder={
                        <img
                            src="https://res.cloudinary.com/de8a23w1z/image/upload/c_scale,w_50,q_10,f_auto/v1600948649/portfolio/IMG_1961_hb8zcz.jpg"
                            alt="Crystal Universe - ArtScience Museum, Singapore."
                        />
                    }
                >
                    <img
                        src="https://res.cloudinary.com/de8a23w1z/image/upload/c_scale,w_900,q_auto:best,f_auto/v1600948649/portfolio/IMG_1961_hb8zcz.jpg"
                        alt="Crystal Universe - ArtScience Museum, Singapore."
                    />
                </LazyLoad>

                <LazyLoad
                    once={true}
                    placeholder={
                        <img
                            src="https://res.cloudinary.com/de8a23w1z/image/upload/c_scale,w_50,q_10,f_auto/v1600948787/portfolio/IMG_1589_x48nqz.jpg"
                            alt="Marina Bay Sands - Gardens by the Bay, Sinagpore."
                        />
                    }
                >
                    <img
                        src="https://res.cloudinary.com/de8a23w1z/image/upload/c_scale,w_900,q_auto:best,f_auto/v1600948787/portfolio/IMG_1589_x48nqz.jpg"
                        alt="Marina Bay Sands - Gardens by the Bay, Sinagpore."
                    />
                </LazyLoad>

                <LazyLoad
                    once={true}
                    placeholder={
                        <img
                            src="https://res.cloudinary.com/de8a23w1z/image/upload/c_scale,w_50,q_10,f_auto/v1600948599/portfolio/IMG_2006_sknklq.jpg"
                            alt="Supertree Grove Trees - Gardens by the Bay, Singapore."
                        />
                    }
                >
                    <img
                        src="https://res.cloudinary.com/de8a23w1z/image/upload/c_scale,w_900,q_auto:best,f_auto/v1600948599/portfolio/IMG_2006_sknklq.jpg"
                        alt="Supertree Grove Trees - Gardens by the Bay, Singapore."
                    />
                </LazyLoad>

                <LazyLoad
                    once={true}
                    placeholder={
                        <img
                            src="https://res.cloudinary.com/de8a23w1z/image/upload/c_scale,w_50,q_10,f_auto/v1599147884/portfolio/IMG_5017_2_zsvje5.jpg"
                            alt="Famous Hội An Lanterns, Hội An, Vietnam."
                        />
                    }
                >
                    <img
                        src="https://res.cloudinary.com/de8a23w1z/image/upload/c_scale,w_900,q_auto:best,f_auto/v1599147884/portfolio/IMG_5017_2_zsvje5.jpg"
                        alt="Famous Hội An Lanterns, Hội An, Vietnam."
                    />
                </LazyLoad>
            </div>
        </div>
    );
};

export default PhotoGrid;
