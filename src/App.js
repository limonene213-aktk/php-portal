import React from "react";
import { BrowserRouter } from "react-router-dom";
import MainComponent from "./components/MainComponent";

function App() {
  return (
    <BrowserRouter basename="/php-portal">
      <div>
        <MainComponent />
      </div>
    </BrowserRouter>
  );
}

export default App;
