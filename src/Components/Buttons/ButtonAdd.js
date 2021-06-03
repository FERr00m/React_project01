import styled from 'styled-components';

export const ButtonAdd = styled.button`
  display: block;
  margin: 0 auto;
  width: 250px;
  height: 65px;
  background-color: #299B01;
  font-size: 21px;
  color: #FFFFFF;
  border: none;
  border-radius:
  transition: all 0.5s;
  &:hover {
    background-color: transparent;
    color: #299B01;
    border: 1px solid #299B01;
  }
  &:disabled {
    color: #bbb;
    background-color: #ccc;
  }
`; 