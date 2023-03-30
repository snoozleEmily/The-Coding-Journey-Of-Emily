import React from 'react';
import { useState } from 'react';

function Presentation({data}){
    const [language, setLanguage] = useState('english')
    //será que consigo deixar esse English sem ser uma string?

    return(
        <main>
            {data.map((text) =>{
                const {id, language, presentation} = text
                return (
                    <article key={id}>
                        <p>
                            {/* fazer a presentation certa aparecer referente ao state de language */}
                            {presentation}
                        </p>
                    </article>
                );
            })}
        </main>
    );
}   

export default Presentation;