import React from "react";
import { Circles } from "./components/Circles";
import "./App.css";

const width = 960;
const height = 500;
function App() {
  return (
    <div className="App">
      <Circles width={width} height={height} />
    </div>
  );
}

export default App;
