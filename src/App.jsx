import "./App.css";
import React, { useState, useEffect, useRef } from "react";
//Pages
import IntroPage from "./components/intro";
import Preload from "./components/preload";
import InfoPage from "./components/info";
import CustomCursor from "./components/customCurcor"

function App() {
  const [preloader, setPreloader] = useState(true);
  const [timer, setTimer] = useState(1);
  const id = useRef(null);
  const clear = () => {
    window.clearInterval(id.current);
    setPreloader(false);
  };

  useEffect(() => {
    id.current = window.setInterval(() => {
      setTimer((timer) => timer - 1);
    }, 5000);
  }, []);
  useEffect(() => {
    if (timer === 0) {
      clear();
    }
  }, [timer]);

  return (
    <div className="App">
      <CustomCursor />
      {preloader ? (
        <Preload />
      ) : (
        <>
          <IntroPage />
          <InfoPage />
        </>
      )}
    </div>
  );
}

export default App;
