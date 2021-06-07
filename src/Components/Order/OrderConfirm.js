import React, { useContext } from 'react';
import styled from 'styled-components';
import { Overlay, OrderTitle, Total, TotalPrice } from '../Styled/StyledComponents';
import { ButtonAdd } from '../Buttons/ButtonAdd';
import { projection } from '../Functions/secondaryFunction';
import { totalPriceItems } from '../Functions/secondaryFunction';
import { formatCurrency } from '../Functions/secondaryFunction';
import { Context } from '../Functions/Context';

const Modal = styled.div`
  background-color: #FFF;
  width: 600px;
  padding: 30px;
`;

const Text = styled.h3`
  text-align: center;
  margin-bottom: 30px;
`;



export const OrderConfirm = () => {

  const {
    orders: { orders, setOrders },
    auth: { authentification },
    orderConfirm: { setOrderConfirm },
    firebaseDatabase,
    successMessage: { setSuccessMessage }
  } = useContext(Context);

  const rulesData = {
    name: ['name'],
    price: ['price'],
    count: ['count'],
    toppings: ['topping', arr => arr.filter(obj => obj.checked).map(obj => obj.name).join(', '),
      str => str ? str : 'no toppings'],
    choice: ['choice', item => item ? item : 'no choice'],
  }

  const sendOrder = (dataBase, orders, authentification) => {
    const newOrder = orders.map(projection(rulesData));
    dataBase.ref('orders').push().set({
      nameClient: authentification.displayName,
      email: authentification.email,
      order: newOrder
    });
  }

  const closeOrderConfirm = e => {
    if (e.target.id === 'orderConfirm') {
      setOrderConfirm(false);
    }
  }

  const dataBase = firebaseDatabase();
  const totalPrice = orders.reduce((result, order) => totalPriceItems(order) + result, 0);

  return (
    <Overlay id="orderConfirm" onClick={closeOrderConfirm}>
      
        <Modal>
        <OrderTitle>{authentification.displayName}</OrderTitle>
        <Text>Осталось только подтвердить ваш заказ</Text>
        <Total>
          <span>Итого:</span>
          <TotalPrice>{formatCurrency(totalPrice)}</TotalPrice>
        </Total>
        <ButtonAdd onClick={() => {
          sendOrder(dataBase, orders, authentification);
          setOrders([]);
          setOrderConfirm(false);
          setSuccessMessage(true);
          setTimeout(() => {setSuccessMessage(false)}, 5000)
        }}>Подтвердить</ButtonAdd>
      </Modal> 
      
      
    </Overlay>
  )
};