import React from 'react';
import styled from 'styled-components';
import { ButtonAdd } from '../Buttons/ButtonAdd';
import { OrderListItem } from './OrderListItem';
import { totalPriceItems } from '../Functions/secondaryFunction';
import { formatCurrency } from '../Functions/secondaryFunction';

const OrderStyled = styled.section`
  position: fixed;
  display: flex;
  flex-direction: column;
  top: 80px;
  left: 0;
  background-color: #FFFFFF;
  width: 380px;
  height: calc(100% - 80px);
  box-shadow: 3px 4px 5px rgba(0, 0, 0, 0.25);
  padding: 20px;
`;

const OrderTitle = styled.h2`
  text-align: center;
  margin-bottom: 30px;
`;

const OrderContent = styled.div`
  flex-grow: 1;
`;

const OrderList = styled.ul`

`;

const Total = styled.div`
  display: flex;
  margin: 0 35px 30px;
  & span:first-child {
    flex-grow: 1;
  }
`;

const TotalPrice = styled.span`
  text-align: right;
  min-width: 65px;
  margin-left: 20px;
`;

const EmptyList = styled.p`

`;

export const Order = ({ orders, setOrders, setOpenItem, authentification, logIn}) => {
  
  const totalPrice = orders.reduce((result, order) => totalPriceItems(order) + result, 0);

  const totalQty = orders.reduce((result, order) => order.count + result, 0);

  function deleteItem(index) {
    if (window.confirm('Удалить?')) {
      const newOrders = orders.filter((item, i) => index !== i)
      setOrders(newOrders);
      setOpenItem(null);
    }
    
  }

  return (
    <OrderStyled>
      <OrderTitle>ВАШ ЗАКАЗ</OrderTitle>
      <OrderContent>
        {orders.length ? 
        <OrderList>
          {orders.map((order, index) => <OrderListItem
            key={index}
            order={order}
            deleteItem={deleteItem}
            index={index}
            setOpenItem={setOpenItem}
            />)}
        </OrderList> :
        <EmptyList>Список заказов пуст</EmptyList>}
      </OrderContent>
      <Total>
        <span>Итого</span>
        <span>{totalQty}</span>
        <TotalPrice>{formatCurrency(totalPrice)}</TotalPrice>
      </Total>
      <ButtonAdd onClick={
        authentification ?
        () => {console.log(orders)} :
        logIn}>Оформить</ButtonAdd>
    </OrderStyled>
  )
}