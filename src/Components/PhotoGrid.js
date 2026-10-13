import React, { useEffect, useRef, useState } from "react";

import { PHOTOS } from "./helpers";

// Show the full photo once, when the box is near the viewport.
const LazyPhoto = ({ placeholder, src, alt }) => {
    const boxRef = useRef(null);
    const [near, setNear] = useState(!("IntersectionObserver" in window));
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        if (near) return undefined;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setNear(true);
                    observer.disconnect();
                }
            },
            { rootMargin: "200px" }
        );
        observer.observe(boxRef.current);
        return () => observer.disconnect();
    }, [near]);

    return (
        <div className="lazy-photo" ref={boxRef}>
            {/* The placeholder keeps the box height. The full photo covers it. */}
            <img src={placeholder} alt="" />
            {near && (
                <img
                    className={loaded ? "loaded" : ""}
                    src={src}
                    alt={alt}
                    onLoad={() => setLoaded(true)}
                />
            )}
        </div>
    );
};

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
                            <LazyPhoto
                                key={photoObj.title}
                                placeholder={photoObj.lazyLoadPhoto}
                                src={photoObj.fullResPhoto}
                                alt={photoObj.title}
                            />
                        ))}
                    </div>
                );
            })}
        </div>
    );
};

export default PhotoGrid;
