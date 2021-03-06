import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import styled from "styled-components";

import Header from "./components/header/Header";
import Navigation from "./components/pages/Navigation";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import EStore from "./components/pages/store/EStore";
import Contacts from "./components/pages/Contacts";
import SectionsContainer from "./components/pages/store/sections/SectionsContainer";
import LoginModal from "./components/modals/LoginModal";
import RegistrationModal from "./components/modals/RegistrationModal";

const App = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegModal, setShowRegModal] = useState(false);

  const openLoginModal = isClicked => {
    setShowLoginModal(isClicked);
    setShowRegModal(!isClicked);
  };

  const closeLoginModal = () => setShowLoginModal(false);

  const openRegistrationModal = isClicked => {
    setShowRegModal(isClicked);
    setShowLoginModal(!isClicked);
  };

  const closeRegModal = () => setShowRegModal(false);

  return (
    <Router>
      <Header
        openLoginModal={openLoginModal}
        openRegistrationModal={openRegistrationModal}
      >
        <AppLogo>
          <Link to="/">
            <span className="icon-spinner9" />
          </Link>
        </AppLogo>
        <Kibobi>KibobiShtrudelz</Kibobi>
      </Header>
      <Navigation />

      <Main>
        {showLoginModal && <LoginModal closeModal={closeLoginModal} />}

        {showRegModal && <RegistrationModal closeModal={closeRegModal} />}

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/about">
            <About />
          </Route>

          <Route exact path="/e-store">
            <EStore />
          </Route>

          <Route path="/e-store/:sectionId">
            <SectionsContainer />
          </Route>

          <Route path="/contacts">
            <Contacts />
          </Route>
        </Switch>
      </Main>
    </Router>
  );
};

export default App;

const AppLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    text-decoration: none;
    animation: spin 10s infinite linear;

    .icon-spinner9 {
      color: #1778f2;
      font-size: 3.5em;
      margin: 15px;
    }
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
  left: 0;
  top: 148px;
  width: 100%;
  height: calc(100% - 148px);
  display: flex;
  overflow-y: auto;
  padding: 15px;
  color: #fff;
  box-sizing: border-box;
  background-color: #303030;

  /* width */
  ::-webkit-scrollbar {
    width: 10px;
    margin-top: 10px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #171717;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 5px;
  }

  .modal-wrapper {
    top: 148px;
    height: calc(100% - 148px);
  }
`;
