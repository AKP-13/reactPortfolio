import React, { useEffect } from "react";
import LazyLoad from "react-lazyload";

import { PHOTOS } from "./helpers";

const PhotoGrid = () => {
    useEffect(() => {
        document.body.style.background = "#fff";
    }, []);

    return (
        <div className="row">
            {PHOTOS.map((col) => {
                return (
                    <div className="column" key={col.column}>
                        {col.photosArr.map((photoObj) => (
                            <LazyLoad
                                once={true}
                                placeholder={
                                    <img src={photoObj.lazyLoadPhoto}></img>
                                }
                                key={photoObj.title}
                            >
                                <img
                                    src={photoObj.fullResPhoto}
                                    alt={photoObj.title}
                                />
                            </LazyLoad>
                        ))}
                    </div>
                );
            })}
        </div>
    );
};

export default PhotoGrid;
