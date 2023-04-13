import React from 'react';
import './App.css';
import image from './head-photo.jpg'

function Portrait(){
    /* const ref = React.useRef(null);

    useEffect(() => {
        // The DOM element is accessible here.
        console.log(ref.current);
      }, []); 

    const handleOnLoad = () =>{
        const width = ref.offsetWidth
        console.log(width)
    } */



    /* Como posso mudar o css da imagem baseado no tamanho dela? */


    return (
        <picture >
            <img src={image} alt="Emily's portrait" className="portrait"/>
        </picture>
    );

}   

export default Portrait;