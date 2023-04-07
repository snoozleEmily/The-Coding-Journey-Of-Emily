import React from 'react';

function Presentation({language}){
    const lang = language.presentation
    return(
        <main>
           <article>
                <p>
                    {lang}
                </p>
            </article>
        </main>
    );
}   

export default Presentation;