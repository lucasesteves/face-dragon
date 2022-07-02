import React from "react";
import Routes from "./Routes";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import { BrowserRouter } from "react-router-dom";
import GlobalStyle from "./styles/global";
import Provider from "./store";

const App: React.FC = () => {
  return (
    <Provider>
      <ThemeProvider theme={theme()}>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
        <GlobalStyle />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
