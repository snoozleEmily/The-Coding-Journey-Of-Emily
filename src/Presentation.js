import React from 'react';
import './App.css';

function Presentation({ language }){
    const presentationText = language.presentation
    return(
        <main>
           <article className='presentation-container'>
                <p className='introduction'>
                    {presentationText}
                </p>
            </article>
        </main>
    );
}   

export default Presentation;