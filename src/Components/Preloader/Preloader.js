import React from 'react';
import styled from 'styled-components';
import preloaderImg from '../../img/preloader.gif';

const PreloaderWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Preloader = () => (
  <PreloaderWrap>
    <img src={preloaderImg} alt="preloader"/>
  </PreloaderWrap>
);