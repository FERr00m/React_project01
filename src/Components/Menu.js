import React from 'react';
import styled from 'styled-components';
import dbMenu from './DBMenu';
import { ListItem } from './ListItem';
import bannerImg from '../img/banner.png'

const MenuStyled = styled.main`
  background-color: #ccc;
  margin-top: 80px;
`;

const SectionMenu = styled.section`
  padding: 30px;
`;

const BannerDiv = styled.div`
  height: 210px;
  width: 100%;
  background-image: url(${bannerImg});
  background-position: center;
  background-size: cover;
`;

export const Menu = () => (
  <MenuStyled>
    <BannerDiv/>
    <SectionMenu>
      <h2>Бургеры</h2>
      <ListItem itemList={dbMenu.burger}/>
    </SectionMenu>

    <SectionMenu>
      <h2>Закуски / Напитки</h2>
      <ListItem itemList={dbMenu.other}/>
    </SectionMenu>
  </MenuStyled>
);
