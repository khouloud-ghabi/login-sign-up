import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

const Section = styled.section`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`;
const SignForms = styled.div`
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  left: ${(props) =>
    props.clicked ? "25%" : "75%"};
  width: 50%;
  transition: 1s 0.3s ease-in-out;
  display: grid;
  grid-template-columns: 1fr;
  z-index: 5;
  @media (max-width: 870px) {
    width: 100%;
    top: ${(props) =>
      props.clicked ? "5%" : "95%"};
        left: ${(props) =>
          props.clicked ? "50%" : "50%"};
          transform: ${(props) =>
            props.clicked ? "transform: translate(-50%, 0)" : "translate(-50%, -100%)"};
      transition: 1s 0.8s ease-in-out;
    }
    @media (max-width: 570px) {
      width: 100%;
      top: ${(props) =>
        props.clicked ? "35%" : "95%"};
        
      }
`;
const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 5rem;
  transition: all 0.2s 0.7s;
  overflow: hidden;
  grid-column: 1 / 2;
  grid-row: 1 / 2;
  @media (max-width: 570px) {
      padding: 0 1.5rem;
`;
const SignUpForm = styled(Form)`
z-index: ${(props) =>
  props.clicked ? "1" : "2"};
  opacity: ${(props) =>
    props.clicked ? "0" : "1"};
`;
const Title = styled.h2`
  font-size: 3rem;
  margin-bottom: 10px;
`;
const InputField = styled.div`
  max-width: 380px;
  width: 100%;
  background-color: #f5f7fa;
  margin: 10px 0;
  height: 50px;
  border-radius: 30px;
  display: grid;
  grid-template-columns: 15% 85%;
  padding: 0 2rem;
  position: relative;
  align-items: center;
  border: 1px solid #97accc;
`;
const InputIcon = styled(FontAwesomeIcon)`
  text-align: center;
  transition: 0.5s;
  font-size: 2rem;
  color: #0b4d78;
`;
const Input = styled.input`
  background: none;
  outline: none;
  border: none;
  line-height: 1;
  font-size: 1.8rem;

  &::placeholder {
    color: #97accc;
    letter-spacing: 0.1rem;
  }
`;
const Button = styled.button`
  width: 150px;
  background-color: #062b46;
  border: none;
  outline: none;
  height: 40px;
  border-radius: 30px;
  color: #fff;
  font-weight: 600;
  margin: 10px 0;
  cursor: pointer;
  transition: 0.5s;
  letter-spacing: 0.05rem;
  font-size: 1.5rem;
  &:hover {
    background-color:#39a1ff;

  }
`;
const Text = styled.p`
  font-size: 1.6rem;
  font-weight: 700;
  letter-spacing: 0.2rem;
  margin: 10px 0;
`;
const SocialMedia = styled.div`
  display: flex;
  justify-content: center;
`;
const SocialIcon = styled(FontAwesomeIcon)`
  height: 2.2rem;
  width: 2.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 1rem;
  padding: 1rem;
  border-radius: 50%;
  border: 1px solid #062b46;
  color: #062b46;
  text-decoration: none;
  transition: 0.3s;
  cursor: pointer;
  &:hover {
    color: #4481eb;
    border-color: #4481eb;
  }
`;
const SignInForm = styled(Form)`
  z-index: ${(props) =>
    props.clicked ? "2" : "1"};
    opacity: ${(props) =>
      props.clicked ? "1" : "0"};
  
`;

const FormsContainer = ({isActive}) => {
  return (
    <Section>
      <SignForms clicked={isActive}>
        <SignUpForm action='#'  clicked={isActive}>
          <Title>Create Account</Title>
          <InputField>
            <InputIcon icon={faEnvelope} />
            <Input type='email' name='email' id='EmailId' placeholder='Email' />
          </InputField>
          <InputField>
            <InputIcon icon={faUser} />
            <Input
              type='text'
              name='user'
              id='userId'
              placeholder='Username'
            />
          </InputField>
          <InputField>
            <InputIcon icon={faLock} />
            <Input
              type='password'
              name='password'
              id='password'
              placeholder='Password'
            />
          </InputField>
          <Button>Sign up</Button>
          <Text>Or sign up with a social media account</Text>
          <SocialMedia>
            <SocialIcon icon={faFacebookF} />
            <SocialIcon icon={faTwitter} />
            <SocialIcon icon={faLinkedinIn} />
          </SocialMedia>
        </SignUpForm>
        <SignInForm action='#'  clicked={isActive}>
          <Title>Sign in</Title>
          <InputField>
            <InputIcon icon={faUser} />
            <Input
              type='text'
              name='username'
              id='usernameId'
              placeholder='Username'
            />
          </InputField>
          <InputField>
            <InputIcon icon={faLock} />
            <Input
              type='password'
              name='password'
              id='passwordId'
              placeholder='Password'
            />
          </InputField>
          <Button>Sign in</Button>
          <Text>Or sign in with</Text>
          <SocialMedia>
            <SocialIcon icon={faFacebookF} />
            <SocialIcon icon={faTwitter} />
            <SocialIcon icon={faLinkedinIn} />
          </SocialMedia>
        </SignInForm>
      </SignForms>
    </Section>
  );
};
export default FormsContainer;
