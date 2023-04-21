import { useState } from "react";
import intros from "./data";
import Portrait from "./Portrait";
import Presentation from "./Presentation";
import Navbar from "./Navbar";
import "./App.css";

function App() {
  const [language, setLanguage] = useState(intros[0]);

  const changeLanguage = (data) => {
    const currentIndex = data.indexOf(language);
    if (currentIndex !== -1 && currentIndex < data.length - 1) {
      setLanguage(data[currentIndex + 1]);
    }
  };

  return (
    <main>
      <Navbar setLanguage={setLanguage} />
      <section>
        <Portrait />
        <Presentation language={language} />
      </section>
      <footer className="footer">
        <p className="copyrights">
          &copy; 2023 snoozleEmily. All rights reserved.
          This website is licensed under the MIT License.
        </p>
      </footer>
    </main>
  );
}

export default App;
