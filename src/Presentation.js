import React from 'react';
import { useState } from 'react';

function Presentation({data, language}){
    
   console.log(language)
    return(
        <main>
            {data.map((text) =>{
                const {id, presentation} = text
                return (
                    <article key={id}>
                        <p>
                            {presentation}
                        </p>
                    </article>
                );
            })}
        </main>
    );
}   

export default Presentation;