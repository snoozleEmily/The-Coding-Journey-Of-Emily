import { useState } from 'react';
import info from './data';
import image from './head-photo.jpg'
import Presentation from './Presentation'
import Flags from'./Flags'
import './App.css';


function App() {
  const [data, setData] = useState(info)
  
  return (
    <main>
      <Flags />
      <section>
        <img src={image} alt="Emily's portrait" />
        <div className="container">
          <Presentation data={data}/>
        </div>
      </section>
    </main>
  );
  
}

export default App;
