import React from "react";
import logo from "./logo.svg";
import "./App.css";

import {
  Box,
  type ColorMode,
  ThemeProvider,
} from "@brikl/design-storefront";
import CustomBox from "./Components/CustomBox"

function App() {
  const foo: ColorMode = "dark";

  return (
    <ThemeProvider>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <Box>{foo}</Box>
          <CustomBox>{foo}</CustomBox>
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
