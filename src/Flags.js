import React from 'react';
import './App.css';
import usflag from './flags/us-flag.jpg'
import brflag from './flags/br-flag.jpg'
import esflag from './flags/es-flag.jpg'
import frflag from './flags/fr-flag.jpg'

function Flags(){
    //How can I acess setLanguage here?
    
    return (
        <div className="flags">
            <img src={usflag} alt="us flag" className="flag"/>
            <img src={brflag} alt="br flag" className="flag"/>
            <img src={esflag} alt="es flag" className="flag"/>
            <img src={frflag} alt="fr flag" className="flag"/>
        </div>
    );

}   

export default Flags;