import "./Layout.css";

import { useCallback, useEffect, useRef, useState } from "react";

const Header = () => {
  return (
    <header className="Header">
      <div className="Header-Text-Container">
        <p className="Header-Text">hamilton robson</p>
      </div>
      <div className="Header-Buttons">
        <button
          className="App-header-button"
          onClick={() => console.log("HOME")}
        >
          Home
        </button>
        <button className="App-header-button" onClick={() => console.log("AV")}>
          AV
        </button>
        <button
          className="App-header-button"
          onClick={() => console.log("SOFTWARE")}
        >
          Software
        </button>
        <button
          className="App-header-button"
          onClick={() => console.log("Support")}
        >
          Support
        </button>
      </div>
    </header>
  );
};

export default Header;
