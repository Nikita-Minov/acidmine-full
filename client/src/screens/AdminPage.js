import styled from 'styled-components';
import {connect} from "react-redux";
import {logout} from "../redux/user.reducer";
import {Redirect} from "react-router-dom";
import { Formik } from 'formik';
import {createPromo, deletePromocode} from "../redux/promocodes.reducer";

const AdminPage = (props) => {
  return (props.isAuth === true?
    <AdminPageWrapper>
      <HeaderAdminPage>
        <h1>{props.username}</h1>
        <LogoutButton onClick={() => props.logout()}>Logout</LogoutButton>
      </HeaderAdminPage>
      <LoginTitle>
        Admin Page
      </LoginTitle>
      <Formik
        initialValues={{ promocode: '', percent: '' }}
        onSubmit={(values) => {
          console.log(values.promocode + ' ' + values.percent)
          props.createPromo(values.promocode, values.percent)
        }}
      >
        {({
            values,
            handleChange,
            handleBlur,
            handleSubmit,
          }) => (
          <CreatePromoForm onSubmit={handleSubmit}>
            <CreatePromoInput
              type="text"
              name="promocode"
              id='promocode'
              placeholder='Промокод'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.promocode}
            />
            <CreatePromoInput
              type="text"
              name="percent"
              id='percent'
              placeholder='Процент скидки(только цифры)'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.percent}
            />
            <SubmitForm type="submit">
              Create promo!
            </SubmitForm>
          </CreatePromoForm>
        )}
      </Formik>
      <PromoCodes>
        <PromoCodeHead>
          <p>Промокод</p>
          <p>Процент скидки</p>
          <p>Удаление промокода</p>
        </PromoCodeHead>
        {props.promocodes.map((el) => (
          <PromoCode>
            <PromoCodeValue>{el.promocode}</PromoCodeValue>
            <PercentValue>{el.percent}%</PercentValue>
            <DeletePromoButton onClick={() => props.deletePromocode(el.promocode)}>Delete</DeletePromoButton>
          </PromoCode>

        ))}
      </PromoCodes>

    </AdminPageWrapper>: <Redirect to='/adminlogin'/>
  )
}
const MapStateToProps = (state) => ({
  username: state.user.user.username,
  isAuth: state.user.isAuth,
  promocodes: state.promoCodes.promocodes
})

const AdminPageContainer = connect(MapStateToProps, {
  logout,
  createPromo,
  deletePromocode,
})(AdminPage);

export default AdminPageContainer;

const HeaderAdminPage = styled.div`
  width: 80%;
  margin: auto;
  height: 70px;
  display: flex;
  justify-content: space-between;
`

const AdminPageWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`

const LoginTitle = styled.h1`
  font-weight: bold;
  font-size: 56px;
`

const LogoutButton = styled.button`
  font-size: 36px;
  background-color: inherit;
  outline: none;
  cursor: pointer;
  border: none;
  font-weight: bold;
`

const CreatePromoForm = styled.form`
  width: 50%;
  display: flex;
  justify-content: space-between;
`

const CreatePromoInput = styled.input`
  margin-bottom: 50px;
  width: 300px;
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

const SubmitForm = styled.button`
  width: 150px;
  height: 40px;
  padding: 10px 20px;
  cursor: pointer;
  color: #878787;
  font-weight: bold;
  background-color: #ffffff;
  border: 2px solid #D1D8F4;
  outline-color: #D1D8F4;
  border-radius: 10px;
`

const PromoCodes = styled.div`
  width: 60%;
`

const PromoCodeHead = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`

const PromoCode = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  border: 3px solid #D1D8F4;
  border-radius: 15px;
  align-items: center;
`

const PromoCodeValue = styled.p`
  font-size: 20px;
  font-weight: 600;
`

const PercentValue = styled.p`
  font-size: 20px;
  font-weight: 600;
`

const DeletePromoButton = styled.button`
  width: 150px;
  height: 40px;
  padding: 10px 20px;
  cursor: pointer;
  color: #878787;
  font-weight: bold;
  background-color: #ffffff;
  border: 2px solid #D1D8F4;
  outline-color: #D1D8F4;
  border-radius: 10px;
`