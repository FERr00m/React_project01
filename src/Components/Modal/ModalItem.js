import React from 'react';
import styled from 'styled-components';
import { ButtonAdd } from '../Buttons/ButtonAdd';


const Overlay = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 20;
`;

const Modal = styled.div`
  background-color: #FFFFFF;
  width: 600px;
  height: 600px;
`;

const Banner = styled.div`
  width: 100%;
  height: 200px;
  background-image: url(${({img}) => img});
  background-size: cover;
  background-position: center;
  margin-bottom: 20px;
`;

const Container = styled.section`
  padding: 0 37px 43px;
  display: flex;
  flex-direction: column;
  height: 380px;
`;

const TitleWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ModalItem = ({ openItem, setOpenItem, orders, setOrders }) => {

  const closeModal = e => {
    if (e.target.id === 'overlay') {
      setOpenItem(null);
    }
  }

  const order = {
    ...openItem
  };

  const addToOrder = () => {
    setOrders([...orders, order]);
    setOpenItem(null);
  }

  return (
    <Overlay id="overlay" onClick={closeModal}>
    <Modal>
      <Banner img={openItem.img}/>
      <Container>
        <TitleWrap>
          <h2>{openItem.name}</h2>
          <h2>{openItem.price.toLocaleString('ru-RU',
          {style: 'currency', currency: 'RUB'})}</h2>
        </TitleWrap>
        <ButtonAdd onClick={addToOrder}>Добавить</ButtonAdd>
      </Container>
       
    </Modal>
  </Overlay>
  )
  
};