import React,{useState} from "react";
//import "./App.css";
import styled from "styled-components";
import FormsContainer from './components/FormsContainer';
import SwitchFormsContainer from "./components/SwitchFormsContainer";

const Container = styled.section`
  position: relative;
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
  @media (max-width: 870px) {
    min-height: 800px;
    height: 100vh;
  }
  @media (max-width: 570px) {
      padding:1.5rem;
    }

&:before {
  content: "";
  position: absolute;
  height: 2000px;
  width: 2000px;
  top: -10%;

  right: ${(props) =>
    props.clicked ? "-90%" : "54%"};
 
  transform: translateY(-50%);
  background-color:#39a1ff;
  transition: 1.2s ease-in-out;
  border-radius:50%;
  z-index: 6;
  @media (max-width: 870px) {
    width: 1500px;
    height: 1500px;
    transform: ${(props) =>
      props.clicked ? "translateX(-50%)" : "translateX(-50%)"};
      transform: ${(props) =>
        props.clicked ? "translateY(100%)" : ""};
    left: 30%;
    bottom: 68%;
    right: ${(props) =>
      props.clicked ? "initial" : "initial"};
    top: initial;
    transition: 2s ease-in-out;
  }
 @media (max-width: 570px) {
    bottom: ${(props) =>
      props.clicked ? "38%" : "72%"};
      left: ${(props) =>
        props.clicked ? "-60%" : "50%"};
    
      }
}


`;


const App = () => {
  const [isActive, setActive] = useState(false);
  const handleClick = () => {
    setActive(!isActive);
  };
 
  return (
 // <div className={isActive ? "container sign-in-mode" : "container"}> 
 <Container clicked={isActive} >
     <FormsContainer isActive={isActive}/>
    <SwitchFormsContainer handleClick={handleClick} isActive={isActive} setActive={setActive}/>
    </Container>
  );
};

export default App;
