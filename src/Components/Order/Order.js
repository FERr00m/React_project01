import React, { useContext } from 'react';
import styled from 'styled-components';
import { ButtonAdd } from '../Buttons/ButtonAdd';
import { OrderListItem } from './OrderListItem';
import { totalPriceItems } from '../Functions/secondaryFunction';
import { formatCurrency } from '../Functions/secondaryFunction';
import { OrderTitle, Total, TotalPrice } from '../Styled/StyledComponents';
import { Context } from '../Functions/Context';
import burger from '../../img/burger.svg';

const widthDesktop = 380;
const widthMobile = 280;
const widthSmallMobile = 240;

const OrderStyled = styled.section`
  position: fixed;
  display: flex;
  flex-direction: column;
  top: 80px;
  left: 0;
  background-color: #FFFFFF;
  width: ${widthDesktop}px;
  height: calc(100% - 80px);
  box-shadow: 3px 4px 5px rgba(0, 0, 0, 0.25);
  padding: 20px;
  transition: all .5s;
  @media only screen and (max-width: 700px) {
    transform: translateX(-${widthDesktop}px);
    z-index: 99;
  }
  @media only screen and (max-width: 450px) {
    width: ${widthMobile}px;
    transform: translateX(-${widthMobile}px);
  }
  @media only screen and (max-width: 330px) {
    width: ${widthSmallMobile}px;
    transform: translateX(-${widthSmallMobile}px);
  }
`;

const OrderContent = styled.div`
  flex-grow: 1;
`;

const OrderList = styled.ul`

`;

const EmptyList = styled.p`
  text-align: center;
`;

const BurgerMenu = styled.div`
  display: none;
  width: 60px;
  height: 60px;
  top: 20px;
  right: -80px;
  background-image: url(${burger});
  background-position: center;
  background-size: cover;
  position: absolute;
  cursor: pointer;
  transition: all 0.4s;
  &:hover {
    transform: rotate(45deg);
  }
  @media only screen and (max-width: 700px) {
    display: block;
  }
`;

export const Order = () => {

  const {
    orders: { orders },
    openItem: { setOpenItem },
    auth: { authentification, logIn },
    popup: { setPopup },
    orderConfirm: { setOrderConfirm }
  } = useContext(Context);

  const totalPrice = orders.reduce((result, order) => totalPriceItems(order) + result, 0);

  const totalQty = orders.reduce((result, order) => order.count + result, 0);

  const toggleOrderMenu = () => {
    document.getElementById('order').classList.toggle('active-order');
  }


  return (
    <OrderStyled id="order">
      <BurgerMenu onClick={toggleOrderMenu} id="cart"/>
      <OrderTitle>ВАШ ЗАКАЗ</OrderTitle>
      <OrderContent>
        {orders.length ? 
        <OrderList>
          {orders.map((order, index) => <OrderListItem
            key={index}
            order={order}
            index={index}
            setOpenItem={setOpenItem}
            setPopup={setPopup}
            />)}
        </OrderList> :
        <EmptyList>Список заказов пуст</EmptyList>}
      </OrderContent>
      
      {orders.length ? 
        <>
          <Total>
            <span>Итого</span>
            <span>{totalQty}</span>
            <TotalPrice>{formatCurrency(totalPrice)}</TotalPrice>
          </Total>
          <ButtonAdd onClick={
            authentification ?
            () => {setOrderConfirm(true)} :
            logIn
          }>
          Оформить
          </ButtonAdd>
        </> : ''
      }
      
    </OrderStyled>
  )
}