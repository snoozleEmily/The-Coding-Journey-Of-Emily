import { useState } from 'react';
import info from './data';
import Portrait from './Portrait';
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
        <Portrait />
        <Presentation language={language}/>
      </section>
    </main>
  );
  
}

export default App;
