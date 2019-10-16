import React, { useState } from 'react';
import { Checkbox, Input, Icon, Radio } from 'antd';
import styled from 'styled-components';

const Div = styled.div`
  display: flex;
  /* justify-content: space-around; */
  flex-direction: column;
`;

const Options = styled.div`
  display: flex;
  align-items: center;
`;

const CreateFormOptions = ({ type }) => {
  const [optionsNumber, setOptionsNumber] = useState(1);
  let options = null;

  switch (type) {
    case 'checkboxes':
      options = (
        <>
          <Div class="input-group">
            {[...Array(optionsNumber)].map((_, i) => (
              <Options>
                <Checkbox></Checkbox>
                <span
                  style={{
                    display: 'inline-block',
                    width: '24px',
                    textAlign: 'center'
                  }}
                >
                  {' '}
                </span>
                <Input placeholder="Input 1" />
                <span
                  style={{
                    display: 'inline-block',
                    width: '24px',
                    textAlign: 'center'
                  }}
                >
                  {' '}
                </span>
                <Icon
                  type="delete"
                  onClick={() => setOptionsNumber(optionsNumber - 1)}
                />
              </Options>
            ))}
          </Div>
          <Icon
            type="plus-circle"
            onClick={() => setOptionsNumber(optionsNumber + 1)}
          />
        </>
      );
      break;

    case 'radio':
      options = (
        <>
          <Div class="input-group">
            {[...Array(optionsNumber)].map((_, i) => (
              <Options>
                <Radio></Radio>
                <span
                  style={{
                    display: 'inline-block',
                    width: '24px',
                    textAlign: 'center'
                  }}
                >
                  {' '}
                </span>
                <Input placeholder="Input 1" />
                <span
                  style={{
                    display: 'inline-block',
                    width: '24px',
                    textAlign: 'center'
                  }}
                >
                  {' '}
                </span>
                <Icon
                  type="delete"
                  onClick={() => setOptionsNumber(optionsNumber - 1)}
                />
              </Options>
            ))}
          </Div>
          <Icon
            type="plus-circle"
            onClick={() => setOptionsNumber(optionsNumber + 1)}
          />
        </>
      );
      break;

    default:
      break;
  }
  return <>{options}</>;
};

export default CreateFormOptions;
