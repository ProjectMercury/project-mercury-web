import React, { useState } from 'react';
import { Form, Input, Icon, Select } from 'antd';
import { formTypes } from '../data/mockData';
import CreateFormOptions from './CreateFormOptions';

const CreateFormInput = props => {
  const {
    values,
    handleChange,
    handleBlur,
    handleSubmit,
    touched,
    errors
  } = props;
  const [inputType, setInputType] = useState(null);
  const inputTypeChange = value => {
    setInputType(value);
  };
  return (
    <div>
      <Form.Item>
        <Form.Item
          help={touched.username && errors.username ? errors.username : ''}
          validateStatus={
            touched.username && errors.username ? 'error' : undefined
          }
          style={{ display: 'inline-block', width: 'calc(50% - 12px)' }}
        >
          <Input
            size="large"
            name="username"
            value={values.username}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Question"
          />
        </Form.Item>
        <span
          style={{
            display: 'inline-block',
            width: '24px',
            textAlign: 'center'
          }}
        >
          {' '}
        </span>
        <Form.Item
          help={touched.username && errors.username ? errors.username : ''}
          validateStatus={
            touched.username && errors.username ? 'error' : undefined
          }
          style={{ display: 'inline-block', width: 'calc(50% - 12px)' }}
        >
          <Select
            defaultValue="Slect an Input Type"
            size="large"
            name="username"
            value={values.type}
            onChange={inputTypeChange}
            onBlur={handleBlur}
          >
            {formTypes.map(type => (
              <Select.Option key={type.id}>{type.name}</Select.Option>
            ))}
          </Select>
        </Form.Item>
        {inputType && (
          <Form.Item>{<CreateFormOptions type={inputType} />}</Form.Item>
        )}
      </Form.Item>
    </div>
  );
};

export default CreateFormInput;
