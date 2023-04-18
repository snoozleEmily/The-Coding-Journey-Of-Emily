import React, { useRef, useEffect, useState } from 'react';
import './App.css';
import image from './images/head-photo.jpg';

function Portrait() {
    const ref = useRef();
    const [width, setWidth] = useState();
    
    useEffect(() => {
        let debounceTimeout;
        
        const handleResize = () => {
            clearTimeout(debounceTimeout); /* Function to fix image glitching */
            debounceTimeout = setTimeout(() => {
                setWidth(ref.current.offsetWidth);
            }, 100); 
        }
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, []);

    const handleOnLoad = () => {
        setWidth(ref.current.offsetWidth);
    }

    return (
        <picture>
            <img
                ref={ref}
                src={image}
                alt="Emily's portrait"
                className={width < 150 ? "portraitsmall" : "portrait"}
                onLoad={handleOnLoad}
            />
        </picture>
    );
}

export default Portrait;
