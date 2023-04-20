import { useState } from 'react';
import info from './data';
import Portrait from './Portrait';
import Presentation from './Presentation'
import Navbar from'./Navbar'
import './App.css';

function App() {
  const [language, setLanguage] = useState(info[0])
  
  const changeLanguage = (data) => {
    const currentIndex = data.indexOf(language);
    if (currentIndex !== -1 && currentIndex < data.length - 1) {
      setLanguage(data[currentIndex + 1]);
    }
  };

  return (
    <main>
      <Navbar setLanguage={setLanguage}/>
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
