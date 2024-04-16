import { useState } from "react";
import "./App.css";
import ColorChild from "./components/ColorChild";
import Senelis from "./components/Senelis";
import { MainTheme } from "./contexts/mainTheme";
import { SenelioKalba } from "./contexts/SenelisSako";
import { SenelisAtimaSkaicius } from "./contexts/SenelisAtimaSkaicius";

function App() {
  const [senelioSkaicius, setSenelioSkaicius] = useState(0);
  const [senelisMinusuoja, setSenelisMinusuoja] = useState(0);
  return (
    <div className="App">
      {/* <MainTheme.Provider>
        <ColorChild />
      </MainTheme.Provider> */}

      <button
        onClick={() => {
          setSenelioSkaicius((prev) => prev + 1);
          setSenelisMinusuoja((prev) => prev - 4);
        }}
      >
        senelis skaiciuoja
      </button>

      <SenelioKalba.Provider
        value={{ text: "Labas anukeli", senelisSkaiciuoja: senelioSkaicius }}
      >
        <SenelisAtimaSkaicius.Provider value={senelisMinusuoja}>
          <Senelis />
        </SenelisAtimaSkaicius.Provider>
      </SenelioKalba.Provider>
    </div>
  );
}

export default App;
