import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import styled from "styled-components";

import Header from "./components/header/Header";
import Navigation from "./components/navigation/Navigation";
import EStore from "./components/navigation/EStore";
import Contacts from "./components/navigation/Contacts";

const logo = require("./images/logo192.png");

function App() {
  return (
    <BrowserRouter>
      <Header>
        <AppLogo>
          <Link to="/">
            <img src={logo} alt="App Logo" width={80} height={80} />
          </Link>
          <p>KibobiShtrudelz Inc.</p>
        </AppLogo>
        <Kibobi>KibobiShtrudelz</Kibobi>
      </Header>
      <Navigation />
      <Main>
        <Switch>
          <Route exact path="/e-store">
            <EStore />
          </Route>

          <Route exact path="/contacts">
            <Contacts />
          </Route>
        </Switch>
      </Main>
    </BrowserRouter>
  );
}

export default App;

const AppLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 65px;
    height: 65px;
    margin: 0 25px 0 0;
    animation: spin 10s infinite linear;
  }

  @keyframes spin {
    100% {
      transform: rotate(360deg);
    }
  }
`;

const Kibobi = styled.div`
  position: absolute;
  top: 28px;
  right: -119px;
  width: 300px;
  padding: 5px;
  font-size: 0.8em;
  text-align: center;
  transform: rotate(45deg);
  background-color: #1778f2;
  box-shadow: 0 0 5px 0 lime;
`;

const Main = styled.main`
  position: absolute;
  top: 138px;
  left: 0;
  width: 100%;
  height: calc(100% - 138px);
  overflow-y: auto;
  padding: 15px;
  color: #fff;
  box-sizing: border-box;
  background-color: #303030;
`;
