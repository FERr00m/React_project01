import React from 'react';
import styled from 'styled-components';
import { ButtonAdd } from '../Buttons/ButtonAdd';
import { CountItem } from './CountItem';
import { useCount } from '../Hooks/useCount';
import { totalPriceItems } from '../Functions/secondaryFunction';
import { formatCurrency } from '../Functions/secondaryFunction';


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

const TotalPriceItem = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ModalItem = ({ openItem, setOpenItem, orders, setOrders }) => {

  const counter = useCount(); 

  const closeModal = e => {
    if (e.target.id === 'overlay') {
      setOpenItem(null);
    }
  }

  const order = {
    ...openItem,
    count: counter.count
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
          <h2>{formatCurrency(openItem.price)}</h2>
        </TitleWrap>
        <CountItem {...counter}/>
        <TotalPriceItem>
          <span>Цена:</span>
          <span>{formatCurrency(totalPriceItems(order))}</span>
        </TotalPriceItem>
        <ButtonAdd onClick={addToOrder}>Добавить</ButtonAdd>
      </Container>
       
    </Modal>
  </Overlay>
  )
  
};