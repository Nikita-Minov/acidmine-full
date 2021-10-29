import styled from 'styled-components';
import { Formik } from 'formik';
import {loginUser} from "../redux/user.reducer";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";

const AdminLogin = (props) => {
  return (props.isAuth === false?
    <LoginWrapper>
      <LoginTitle>
        Admin Login
      </LoginTitle>
        <Formik
          initialValues={{ username: '', password: '' }}
          onSubmit={(values) => {
            props.loginUser(values.username, values.password);
          }}
        >
          {({
              values,
              handleChange,
              handleBlur,
              handleSubmit,
            }) => (
            <LoginForm onSubmit={handleSubmit}>
              <FormBuyLabel htmlFor='username'>Username</FormBuyLabel>
              <LoginInput
                type="text"
                name="username"
                id="username"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.username}
              />
              <FormBuyLabel htmlFor="password">Password</FormBuyLabel>
              <LoginInput
                type="password"
                name="password"
                id="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
              <SubmitForm type="submit">
                Login
              </SubmitForm>
            </LoginForm>
          )}
        </Formik>
    </LoginWrapper>: <Redirect to='/adminpage'/>
  )
}

const MapStateToProps = (state) => ({
  isAuth: state.user.isAuth
})
const AdminLoginContainer = connect(MapStateToProps, {
  loginUser,
})(AdminLogin);

export default AdminLoginContainer;

const LoginWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const LoginTitle = styled.h1`
  font-weight: bold;
  font-size: 56px;
`

const LoginForm = styled.form`
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const LoginInput = styled.input`
  margin-bottom: 50px;
  width: 100%;
  padding: 10px 20px;
  border: 2px solid #D1D8F4;
  outline-color: #D1D8F4;
  border-radius: 10px;
  &::placeholder {
    color: #878787;
    font-size: 14px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
  }
`

const FormBuyLabel = styled.label`
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  color: #A9B0CA;
  font-size: 14px;
  margin-bottom: 5px;
`

const SubmitForm = styled.button`
  width: 50%;
  padding: 10px 20px;
  cursor: pointer;
  color: #878787;
  background-color: #ffffff;
  border: 2px solid #D1D8F4;
  outline-color: #D1D8F4;
  border-radius: 10px;
`