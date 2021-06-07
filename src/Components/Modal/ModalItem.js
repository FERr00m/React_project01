import React, { useContext } from 'react';
import styled from 'styled-components';
import { ButtonAdd } from '../Buttons/ButtonAdd';
import { CountItem } from './CountItem';
import { useCount } from '../Hooks/useCount';
import { totalPriceItems } from '../Functions/secondaryFunction';
import { formatCurrency } from '../Functions/secondaryFunction';
import { Toppings } from './Toppings';
import { Choices } from './Choices';
import { useToppings } from '../Hooks/useToppings';
import { useChoices } from '../Hooks/useChoices';
import { Overlay } from '../Styled/StyledComponents';
import { Context } from '../Functions/Context';

const Modal = styled.div`
  background-color: #FFFFFF;
  width: 600px;
  height: 600px;
  border-radius: 15px;
  @media only screen and (max-width: 330px) {
    height: 400px;
    overflow: scroll;
  }
`;

const Banner = styled.div`
  width: 100%;
  height: 200px;
  background-image: url(${({img}) => img});
  background-size: cover;
  background-position: center;
  margin-bottom: 20px;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  @media only screen and (max-width: 330px) {
    height: 100px;
  }
`;

const Container = styled.section`
  padding: 0 37px 43px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 380px;
  @media only screen and (max-width: 330px) {
    height: calc(100% + 80px);
  }
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

export const ModalItem = () => {

  const {
    openItem: { openItem, setOpenItem },
    orders: { orders, setOrders }
  } = useContext(Context);

  const counter = useCount(openItem.count);
  const toppings = useToppings(openItem);
  const choices = useChoices(openItem);
  const isEdit = openItem.index > -1;

  const closeModal = e => {
    if (e.target.id === 'overlay') {
      setOpenItem(null);
    }
  }
  
  const order = {
    ...openItem,
    count: counter.count,
    topping: toppings.toppings,
    choice: choices.choice,
  };

  const editOrder = () => { 
    const newOrders = [...orders];
    newOrders[openItem.index] = order;
    setOrders(newOrders);
    setOpenItem(null);
  }

  const addToOrder = () => {
    setOrders([...orders, order]);
    setOpenItem(null);
  }

  return (
    <Context.Provider value={{
      counter,
      toppings,
      choices,
      openItem
    }}>
      <Overlay id="overlay" onClick={closeModal}>
      <Modal>
        <Banner img={openItem.img}/>
        <Container>
          <TitleWrap>
            <h2>{openItem.name}</h2>
            <h2>{formatCurrency(openItem.price)}</h2>
          </TitleWrap>
          <CountItem/>
          {openItem.toppings && <Toppings/>}
          {openItem.choices && <Choices/>}
          <TotalPriceItem>
            <span>Цена:</span>
            <span>{formatCurrency(totalPriceItems(order))}</span>
            
          </TotalPriceItem>
          <ButtonAdd
            onClick={isEdit ? editOrder : addToOrder}
            disabled={order.choices && !order.choice}
            >{isEdit ? 'Редактировать' : 'Добавить'}</ButtonAdd>
        </Container>
        
      </Modal>
    </Overlay>
    </Context.Provider>
    
  )
  
};