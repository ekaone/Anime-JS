import React from "react";
import logo from "./logo.svg";
import "./App.css";
// components
import AnimeText from "./AnimeText";
import AnimeBox from "./AnimeBox";
import AnimeLoop from "./AnimeLoop";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <AnimeBox />
        {"\u2728"}
        <AnimeText />
        {"\u2728"}
        <AnimeLoop />
      </header>
    </div>
  );
}

export default App;
