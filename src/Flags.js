import React from 'react';
import './App.css';

function Flags(){
    //How can I acess setLanguage here?
    return (
        <div className="flags">
            <button className="us">us</button>
            <button className="br">br</button>
            <button className="es">es</button>
            <button className="fr">fr</button>
        </div>
    );

}   

export default Flags;