import { useState } from 'react';
import info from './data';
import Portrait from './Portrait';
import Presentation from './Presentation'
import Navbar from'./Navbar'
import './App.css';

function App() {
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
      <Navbar />
      <section>
        <Portrait />
        <Presentation language={language}/>
      </section>
      <footer className='footer'>
        <div className="copyrights"></div>
      </footer>
    </main>
  );
  
}

export default App;
