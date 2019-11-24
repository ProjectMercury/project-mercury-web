import React from 'react';
import styled from 'styled-components';

import * as yup from 'yup';
import { withFormik } from 'formik';
import { Button, Input, Icon, Typography, Form } from 'antd';
import { userLogin } from '../redux/actions/userActions';
import { connect } from 'react-redux';

const { Title } = Typography;

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const InnerDiv = styled.div`
  height: 70vh;
  width: 40vw;
  background-color: white;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 0 50px;

  /* form {
    margin-top: -50px;
  } */
`;

const StyledButton = styled(Button)`
  font-family: 'Open Sans', sans-serif;
`;

const C = props => {
  const {
    values,
    handleChange,
    handleBlur,
    handleSubmit,
    touched,
    errors
  } = props;
  return (
    <Container>
      <InnerDiv>
        <Title>Login</Title>
        <form onSubmit={handleSubmit}>
          <Form.Item
            help={touched.email && errors.email ? errors.email : ''}
            validateStatus={touched.email && errors.email ? 'error' : undefined}
          >
            <Input
              size="large"
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Email"
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
            />
          </Form.Item>
          <Form.Item
            help={touched.password && errors.password ? errors.password : ''}
            validateStatus={
              touched.password && errors.password ? 'error' : undefined
            }
          >
            <Input.Password
              size="large"
              name="password"
              placeholder="Password"
              value={values.password}
              onBlur={handleBlur}
              onChange={handleChange}
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
            />
          </Form.Item>
          <StyledButton type="primary" htmlType="submit">
            Login
          </StyledButton>
        </form>
      </InnerDiv>
    </Container>
  );
};

const validationSchema = yup.object().shape({
  email: yup.string().required('Please provide a name'),
  password: yup
    .string()
    .required('Please provide a password')
    .min(4, 'Password too short')
});

const Login = withFormik({
  mapPropsToValues: () => ({ email: '', password: '' }),
  handleSubmit: (values, { props, setSubmitting }) => {
    console.log(values);
    props.userLogin(values.email, values.password, props.history);
    setSubmitting(false);
  },
  validationSchema: validationSchema
})(C);

const mapStateToProps = state => state.questions;
const mapActionToProps = {
  userLogin
};
export default connect(
  mapStateToProps,
  mapActionToProps
)(Login);
