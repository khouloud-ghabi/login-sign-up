import React, { useState } from "react";
import styled from "styled-components";
import FormsContainer from './components/FormsContainer';
import SwitchFormsContainer from "./components/SwitchFormsContainer";

const Container = styled.section`
  position: relative;
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
  padding: 1rem;
  @media (max-width: 870px) {
    min-height: 800px;
    height: 100vh;
    padding: 1.5rem;
  }
  @media (max-width: 570px) {
    padding: 1.5rem;
  }

  &:before {
    content: "";
    position: absolute;
    height: 2200px;
    width: 2900px;
    top: -10%;
    right: ${(props) => (props.clicked ? "-90%" : "54%")};
    transform: translateY(-50%);
    background-color: #27DEC0;
    transition: 1.2s ease-in-out;
    border-radius: 50%;
    z-index: 6;
    @media (max-width: 870px) {
      width: 1800px;
      height: 1800px;
      left: 30%;
      bottom: 68%;
      top: initial;
      right: ${(props) => (props.clicked ? "initial" : "initial")};
      transform: ${(props) =>
        props.clicked ? "translateX(-50%) translateY(100%)" : "translateX(-50%)"};
      transition: 2s ease-in-out;
    }
    @media (max-width: 570px) {
      bottom: ${(props) => (props.clicked ? "38%" : "72%")};
      left: ${(props) => (props.clicked ? "-60%" : "50%")};
    }
  }
`;

const App = () => {
  const [isActive, setActive] = useState(false);
  const handleClick = () => {
    setActive(!isActive);
  };

  return (
    <Container clicked={isActive}>
      <FormsContainer isActive={isActive} />
      <SwitchFormsContainer handleClick={handleClick} isActive={isActive} setActive={setActive} />
    </Container>
  );
};

export default App;
