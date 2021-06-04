import React, { useRef } from 'react';
import styled from 'styled-components';
import trashImg from '../../img/trash.svg';
import { totalPriceItems } from '../Functions/secondaryFunction';
import { formatCurrency } from '../Functions/secondaryFunction';


const OrderItemStyled = styled.li`
  margin: 15px 0;
  display: grid;
  grid-template-columns: 1fr 0.2fr 0.7fr 0.2fr;
  gap: 0px 0px;
  cursor: pointer;
`;

const ItemName = styled.span`
  
`;

const ItemCount = styled.span`
  margin: 0 auto;
`;

const ItemToppings = styled.ul`
  font-size: 14px;
  color: #9a9a9a;
`;

const ItemPrice = styled.span`
  margin-left: auto;
  min-width: 65px;
  text-align: right;
`;

const TrashBtn = styled.button`
  width: 24px;
  height: 24px;
  border-color: transparent;
  background-image: url(${trashImg});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  margin-left: auto;
`;

export const OrderListItem = ({ order, index, deleteItem, setOpenItem }) => {

  const refDeleteBtn = useRef(null);
  
  return (
  <OrderItemStyled onClick={(e) => {
    if (e.target !== refDeleteBtn.current) {
      setOpenItem({...order, index});
    }
    
  }}>
    <ItemName>{order.name} {order.choice}</ItemName>
    <ItemCount>{order.count}</ItemCount>
    <ItemPrice>{formatCurrency(totalPriceItems(order))}</ItemPrice>
    <TrashBtn ref={refDeleteBtn} onClick={() => deleteItem(index)}/>
    {order.topping && <ItemToppings>
    {order.topping.filter(item => item.checked).map((item, i) => (
        <li key={i}>+{item.name}</li>
      ))}
    </ItemToppings>}
    
  </OrderItemStyled>
)};
