import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Hello from "./Hello";

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Hello name="Diego" />
      </header>
    </div>
  );
};

export default App;
