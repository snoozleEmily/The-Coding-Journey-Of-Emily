import { useState, useEffect } from "react";
import intros from "./data";
import LoadingSpinner from "./LoadingSpinner.js";
import Portrait from "./Portrait";
import Presentation from "./Presentation";
import Navbar from "./Navbar";
import Popup from "./Popup.js";
import Footer from "./Footer.js";
import "./App.css";

function App() {
  const [language, setLanguage] = useState(intros[0]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  const _changeLanguage = (data) => {
    const currentIndex = data.indexOf(language);
    if (currentIndex !== -1 && currentIndex < data.length - 1) {
      setLanguage(data[currentIndex + 1]);
    }
  };

  return (
    <main>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <>
          <Navbar setLanguage={setLanguage} />
          <Popup />
          <section>
            <Portrait />
            <div className="container">
              <Presentation language={language} />
            </div>
          </section>
          <Footer />
        </>
      )}
    </main>
  );
}

export default App;
