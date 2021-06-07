import React from 'react';
import styled from 'styled-components';
import { formatCurrency } from '../Functions/secondaryFunction';

const List = styled.ul`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  @media only screen and (max-width: 700px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const Item = styled.li`
  position: relative;
  width: 400px;
  height: 155px;
  background-image: ${({ img }) => `url(${img})`};
  background-position: center;
  background-size: cover;
  margin-top: 30px;
  margin-right: 30px;
  padding: 15px;
  color: #FFFFFF;
  font-size: 30px;
  z-index: 1;
  transition: all 0.3s;
  &:after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: #000000;
    opacity: 30%;
    z-index: -1;
  }
  &:hover {
    cursor: pointer;
    box-shadow: inset 0 0 50px 30px #000000;
    &:after {
      opacity: 0;
    }
  }
  @media only screen and (max-width: 700px) {
    width: 100%;
  }
`;

export const ListItem = ({ itemList, setOpenItem }) => (
  <List>
    {itemList.map(item => (
      <Item key={item.id} img={item.img} onClick={() => setOpenItem(item)}>
        <p>{item.name}</p>
        <p>{formatCurrency(item.price)}</p>
      </Item>
    ))}
  </List>
);