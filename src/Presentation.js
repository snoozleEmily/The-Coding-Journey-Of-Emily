import React from 'react';
import './App.css';

function Presentation({language}){
    const lang = language.presentation
    return(
        <main>
           <article className='introcontainer'>
                <p className='introduction'>
                    {lang}
                </p>
            </article>
        </main>
    );
}   

export default Presentation;