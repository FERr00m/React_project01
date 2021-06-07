import React, { useContext } from 'react';
import styled from 'styled-components';
import { Overlay } from '../Styled/StyledComponents';
import { Context } from '../Functions/Context';

const Popup = styled.div`
  background-color: #FFFFFF;
  width: 220px;
  height: 145px;
  border-radius: 15px;
  text-align: center;
  padding: 20px;
`;

const Btn = styled.button`
  margin: 10px;
  width: 60px;
  height: 40px;
  text-transform: uppercase;
  background-color: #299B01;
  font-size: 21px;
  color: #FFFFFF;
  border: none;
  transition: all 0.5s;
  &:hover {
    background-color: transparent;
    color: #299B01;
    border: 1px solid #299B01;
  }
`;



export const PopupDeleteItem = () => {

  const {
    popup: { popup, setPopup },
    orders: { orders, setOrders }
  } = useContext(Context);

  const closePopup = e => {
    if (e.target.id === 'popup') {
      setPopup(null);
    }
  }

  function deleteItem(index) {
      const newOrders = orders.filter((item, i) => index !== i)
      setOrders(newOrders);
      setPopup(null);
  }

  return (
    <Overlay id="popup" onClick={closePopup}>
      <Popup>
        <h3>Удалить?</h3>
        <Btn onClick={() => deleteItem(popup.index)}>Да</Btn>
        <Btn onClick={() => setPopup(null)}>Нет</Btn>
      </Popup>
    </Overlay>  
  )
};
