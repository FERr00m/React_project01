import React from 'react';
import styled from 'styled-components';
import logoImg from '../../img/logo.svg';
import loginImg from '../../img/sign.svg';

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
  width: 30px;
  margin-bottom: 5px;
`;

const LoginBtn = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: inherit;
  border: none;
  color: #FFFFFF;
  font-size: 16px;
  transition: all 0.5s;
  &:hover {
    border-radius: 50%;
    box-shadow: 0px 0px 10px 25px rgba(255, 255, 255, 0.2) inset;
  }
`;




export const NavBar = () => (
  <NavBarStyled>
    <Logo href="#">
      <ImgLogo src={logoImg} alt="logo"/>
      <H1>MrDonald's</H1>
    </Logo>
    <LoginBtn><LoginImg src={loginImg} alt="войти" />войти</LoginBtn>
    
  </NavBarStyled>
);
