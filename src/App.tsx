import React from "react";
import { Gallery } from "./components/Gallery";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="App">
      {/* <h1>Employee Gallery</h1> */}
      <Gallery />
    </div>
  );
};

export default App;
