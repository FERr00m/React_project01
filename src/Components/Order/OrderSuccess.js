import React, { useContext } from 'react';
import styled from 'styled-components';
import { Overlay } from '../Styled/StyledComponents';
import { Context } from '../Functions/Context';

const SuccessWrap = styled.div`
  color: #FFF;
  text-align: center;
`;

const Title = styled.h2`
`;


const G = styled.g`
  stroke-width: 2px;
  stroke: #8EC343;
  fill:none;
  & path {
    stroke-dasharray:17px, 17px; 
    stroke-dashoffset: 0px;
    -webkit-animation: checkmark 0.25s ease-in-out 0.7s backwards;
    animation: checkmark 0.25s ease-in-out 0.7s backwards;
  }
  & circle {
    stroke-dasharray:76px, 76px;
    stroke-dashoffset: 0px;
    transform:rotate(-90deg);
    transform-origin: 50% 50%;
    -webkit-animation: checkmark-circle 0.6s ease-in-out forwards;
    animation: checkmark-circle 0.6s ease-in-out forwards;
  }

  @keyframes checkmark {
      0% {
          stroke-dashoffset: 17px;
      }

      100% {
          stroke-dashoffset: 0
      }
  }

  @keyframes checkmark-circle {
      0% {
          stroke-dashoffset: 76px;
      }

      100% {
          stroke-dashoffset: 0px;
      }
  }
`;


export const OrderSuccess = () => {

  const {
    successMessage: { setSuccessMessage }
  } = useContext(Context);

  const closePopup = () => {
    
      setSuccessMessage(null);
    
  }

  return (
    <Overlay id="orderSuccess" onClick={closePopup}>
      <SuccessWrap>
        <Title>Заказ отправлен!</Title>
        
          <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="-263.5 236.5 26 26">
            <G>
              <circle cx="-250.5" cy="249.5" r="12"/>
              <path d="M-256.46 249.65l3.9 3.74 8.02-7.8"/>
            </G>
          </svg>
        
        <Title>Спасибо!</Title>
      </SuccessWrap>
    </Overlay>
    
  )
}