import React from "react";
import styled from "styled-components";

const Panels = styled.section`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 870px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 2fr 1fr;
  }
`;
const Panel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-around;
  text-align: center;
  z-index: 6;
  @media (max-width: 870px) {
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    padding: 2.5rem 8%;
    grid-column: 1 / 2;
  }
`;
const SignInPanel = styled(Panel)`
pointer-events: ${(props) =>
    props.clicked ? "none" : "all"};
  padding: 3rem 17% 2rem 12%;
  @media (max-width: 870px) {
    grid-row: 3 / 4;
  }
`;
const SignUpPanel = styled(Panel)`
pointer-events: ${(props) =>
    props.clicked ? "all" : "none"};
  padding: 3rem 12% 2rem 17%;
  @media (max-width: 870px) {
    grid-row: 3 / 4;
  }
`;
const Content = styled.div`
  color: #f9fcff;
  transition: transform 0.9s ease-in-out;
  transition-delay: 0.6s;
  @media (max-width: 870px) {
    padding-right: 20%;
    transition: transform 0.9s ease-in-out;
    transition-delay: 0.8s;
    @media (max-width: 570px) {
          padding: 0.5rem 1rem;
  }
`;
const SignInContent = styled(Content)`
  transform: ${(props) =>
    props.clicked ? "translateX(-800px)" : "translateX(0%)"};
    @media (max-width: 870px) {
        transform: ${(props) =>
            props.clicked ? "translateX(-300px)" : "translateX(0%)"};
      }
`;

const SignUpContent=styled(Content)`
transform: ${(props) =>
    props.clicked ? "translateX(-40%)" : "translateX(800px)"};
    @media (max-width: 870px) {
        transform: translateY(300px);
        transform: ${(props) =>
            props.clicked ? "translateX(0px)" : "translateX(800px)"};
      }
`;

const Title = styled.h3`
  font-weight: 800;
  line-height: 1;
  font-size: 2.7rem;
  @media (max-width: 870px) {
   font-size:1.5rem;
  }
`;
const Text = styled.p`
  font-size: 3rem;
  font-weight: 700;
  letter-spacing: 0.2rem;
  margin: 20px 0;
  @media (max-width: 870px) {
    font-size:0.9rem;
    padding: 0.5rem 0;
   }
`;
const SwitchButton = styled.button`
  width: 150px;
  outline: none;
  height: 41px;
  border-radius: 30px;
  color:#f9fcff;
  font-weight: 600;
  cursor: pointer;
  transition: 0.5s;
  letter-spacing: 0.04rem;
  font-size: 1.5rem;
  margin: 0;
  background: none;
  border: 1px solid #f9fcff;
  @media (max-width: 870px) {
    width: 110px;
    height: 35px;
    font-size: 0.7rem;
   }
  &:hover {
    background-color:#7EEADA;
  }
`;
const Image = styled.img`
width:100%;
height:auto;
transition-delay: 0.4s;
transition: transform 1.1s ease-in-out;
@media (max-width: 870px) {
    width: 200px;
    transition: transform 0.9s ease-in-out;
    transition-delay: 0.6s;
  }
  @media (max-width: 570px) {
    display:none;
`;
const SignInImage = styled(Image)`
transform: ${(props) =>
    props.clicked ? "translateX(-800px)" : "translateX(0)"};
    @media (max-width: 870px) {
        transform: ${(props) =>
            props.clicked ? "translateX(-300px)" : "translateX(0%)"};
      }

`;

const SignUpImage=styled(Image)`
transform: ${(props) =>
    props.clicked ? "translateX(-50%)" : "translateX(800px)"};
    @media (max-width: 870px) {
        transform: translateY(300px);
        transform: ${(props) =>
            props.clicked ? "translateX(0px)" : "translateX(800px)"};
      }
`;

const SwitchFormsContainer = ({handleClick,isActive,setActive}) => {
 
  return (
    <Panels clicked={isActive}>
      <SignInPanel clicked={isActive}>
        <SignInContent clicked={isActive}>
          <Title>Already a member?</Title>
          <Text>Please sign in to access the admin panel</Text>
          <SwitchButton clicked={isActive} onClick={handleClick}>Sign in</SwitchButton>
        </SignInContent>
        <SignInImage src="images/dashboard.svg" alt="" clicked={isActive}/>
      </SignInPanel>
      <SignUpPanel clicked={isActive}>
      <SignUpContent clicked={isActive}>
          <Title>Not a member?</Title>
          <Text>Please sign up to unlock the content.</Text>
          <SwitchButton onClick={handleClick} >Sign up</SwitchButton>
        </SignUpContent>
        <SignUpImage src="images/lockedDashoboard.svg" alt="" clicked={isActive} />
      </SignUpPanel>
    </Panels>
  );
};

export default SwitchFormsContainer;
