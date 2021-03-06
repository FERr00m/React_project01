import React, { useContext } from 'react';
import styled from 'styled-components';
import { ListItem } from './ListItem';
import { Banner } from './Banner';
import { useFetch } from '../Hooks/useFetch';
import { Preloader } from '../Preloader/Preloader';
import { Context } from '../Functions/Context';


const MenuStyled = styled.main`
  background-color: #fff;
  margin-top: 80px;
  margin-left: 380px;
  position: relative;
  @media only screen and (max-width: 700px) {
    margin-left: 0px;
  }
`;


const SectionMenu = styled.section`
  padding: 30px;
`;


export const Menu = () => {
  const { openItem: {setOpenItem} } = useContext(Context);
  const res = useFetch();

  const dbMenu = res.response;

  return (
    <MenuStyled>
      <Banner/>
      {res.response ? 
        <>
          <SectionMenu>
          <h2>Бургеры</h2>
          <ListItem
            itemList={dbMenu.burger}
            setOpenItem={setOpenItem}
            />
          </SectionMenu>
      
          <SectionMenu>
            <h2>Закуски / Напитки</h2>
            <ListItem
              itemList={dbMenu.other}
              setOpenItem={setOpenItem}
              />
          </SectionMenu>
        </> : res.error ? 
        <div>Sorry, something went wrong...</div> :
        <Preloader/>
      }
    </MenuStyled>
  )
};
