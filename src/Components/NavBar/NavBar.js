import React, { useContext } from 'react';
import styled from 'styled-components';
import logoImg from '../../img/logo.svg';
import loginImg from '../../img/sign.svg';
import { Context } from '../Functions/Context';

const NavBarStyled = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  background-color: #299B01;
  color: white;
`;

const Logo = styled.a`
  display: flex;
  align-items: center;
`;

const H1 = styled.h1`
  font-size: 24px;
  margin-left: 15px;
`;

const ImgLogo = styled.img`
  width: 50px;
`;

const LoginImg = styled.img`
  width: 50px;
  border-radius: 5px;
  @media only screen and (max-width: 330px) {
    width: 30px;
  }
`;

const LoginBtn = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: inherit;
  border: none;
  color: #FFFFFF;
  font-size: 14px;
  transition: all 0.5s;
`;

const User = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Wrap = styled.div`
display: flex;
align-items: center;
gap: 10px;
@media only screen and (max-width: 330px) {
  flex-direction: column;
  }
`;

const UserTitle = styled.h4`
  @media only screen and (max-width: 330px) {
    display: none;
  }
`;

export const NavBar = () => {
  const {auth: { authentification, logIn, logOut }} = useContext(Context);
  
  return (
    <NavBarStyled>
    <Logo href="#">
      <ImgLogo src={logoImg} alt="logo"/>
      <H1>MrDonald's</H1>
    </Logo>
    {authentification ?
    <Wrap>
      <LoginImg src={authentification.photoURL} alt={authentification.displayName} />
      <User>
      <UserTitle>{authentification.displayName}</UserTitle>
      
      <LoginBtn onClick={logOut}><h4>ВЫЙТИ</h4></LoginBtn>
      </User> 
    </Wrap> :
      <LoginBtn onClick={logIn}>
        <LoginImg src={loginImg} alt="войти" />
        <h4>ВОЙТИ</h4>
      </LoginBtn>}
    
  </NavBarStyled>
  )
};
