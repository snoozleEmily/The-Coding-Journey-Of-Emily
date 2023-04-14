import React from 'react';
import './App.css';
import usflag from './flags/us-flag.jpg'
import brflag from './flags/br-flag.jpg'
import esflag from './flags/es-flag.jpg'
import frflag from './flags/fr-flag.jpg'
import { FaGithubSquare } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaInstagramSquare } from 'react-icons/fa';

function Navbar(){
    //How can I acess setLanguage here?
    
    return (
        <navbar className="navbar">
            <div className="socialmedia">
                {/* <FaGithubSquare/>
                <FaInstagramSquare/>
                <FaLinkedin/> */}
            </div>
            <div className="flags">
            <img src={usflag} alt="us flag" className="flag"/>
            <img src={brflag} alt="br flag" className="flag"/>
            <img src={esflag} alt="es flag" className="flag"/>
            <img src={frflag} alt="fr flag" className="flag"/>
            </div>
        </navbar>
        
    );

}   

export default Navbar;