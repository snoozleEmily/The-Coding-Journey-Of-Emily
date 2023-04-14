import React, { useRef, useEffect, useState } from 'react';
import './App.css';
import image from './head-photo.jpg';

function Portrait() {
    const ref = useRef(null);
    const [width, setWidth] = useState(undefined);

    useEffect(() => {
            setWidth(ref.current.offsetWidth);
            /* I need this to load everytime there is a change */
    }, []);

    const handleOnLoad = () => {
        setWidth(ref.current.offsetWidth);
        console.log(width);
    }

    return (
        <picture>
            <img
                ref={ref}
                src={image}
                alt="Emily's portrait"
                className={width < 130 ? "portraitsmall" : "portrait"}
                onLoad={handleOnLoad}
            />
        </picture>
    );
}

export default Portrait;
