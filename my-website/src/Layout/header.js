const Header = () => {
  return (
    <header className="Header">
      <p className="App-header-text">Hamilton Robson</p>
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
