import React, { useContext } from 'react';
import styled from 'styled-components';
import { Context } from '../Functions/Context';

const ChoicesWrap = styled.div`
  max-width: 500px;
  margin: 0 auto;
  column-count: 2;
  column-gap: 15px;
`;

const ChoicesLabel = styled.label`
  cursor: pointer;
  display: block;
`;

const ChoicesRadio = styled.input`
  cursor: pointer;
  margin-right: 5px;
`;



export function Choices() {

  const {
    openItem,
    choices: { choice, changeChoices }
  } = useContext(Context);

  return (
    <>
      <h3>Выбирайте</h3>
      <ChoicesWrap>
        {openItem.choices.map((item, i) => (
          <ChoicesLabel key={i}>
            <ChoicesRadio
              type="radio"
              name="choices"
              checked={choice === item}
              value={item}
              onChange={changeChoices} 
              />
            {item}
          </ChoicesLabel>
        ))}
      </ChoicesWrap>
    </>
  )
}