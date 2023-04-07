import { useState } from 'react';
import info from './data';
import image from './head-photo.jpg'
import Presentation from './Presentation'
import Flags from'./Flags'
import './App.css';


function App() {
  /* const [data, setData] = useState(info) */
  const [language, setLangauge] = useState(info[0])

  /* const changeLangauge = (data) => {
    const newValue = () => {
      changeIndex = how do I get the index number?
      function find(){
      var index = data[{}]
      return index
    }
    setLangauge(newValue)
  }}
   */
  
  return (
    <main>
      <Flags />
      <section>
        <img src={image} alt="Emily's portrait" className='portrait'/>
        <Presentation language={language}/>
      </section>
    </main>
  );
  
}

export default App;
