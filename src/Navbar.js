import React from 'react';
import './App.css';
import info from './data';
import usflag from './images/us-flag.jpg'
import brflag from './images/br-flag.jpg'
import esflag from './images/es-flag.jpg'
import frflag from './images/fr-flag.jpg'
import { FaGithubSquare } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaInstagramSquare } from 'react-icons/fa';

function Navbar({setLanguage}){
    
    return (
        <header className="navbar">
            <div className="icons">
                <FaGithubSquare className="icon"/>
                <FaInstagramSquare className="icon"/>
                <FaLinkedin className="icon"/> 
            </div>
            <div className="flags">
                <img src={usflag} alt="us flag" className="flag" onClick={() => setLanguage(info[0])}/>
                <img src={brflag} alt="br flag" className="flag" onClick={() => setLanguage(info[1])}/>
                <img src={esflag} alt="es flag" className="flag" onClick={() => setLanguage(info[2])}/>
                <img src={frflag} alt="fr flag" className="flag" onClick={() => setLanguage(info[3])}/>
            </div>
        </header>
        
    );

}   

export default Navbar;