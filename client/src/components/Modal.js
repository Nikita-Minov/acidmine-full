import cross from "../img/cross.png";
import {Formik} from "formik";
import React, {useState} from "react";
import styled from 'styled-components';
import {connect} from "react-redux";
import {findPromocode} from "../redux/promocodes.reducer";

const Modal = (props) => {
  let [sale, setSale] = useState(0);
  return (
    <ModalWindowWrapper>
      <ModalWindow>
        <ModalWindowBtnClose onClick={() => {
          props.setModal(0);
          props.setPrice(0);
          props.setName(0);
        }}>
          <img src={cross} alt="cross" style={{
            transform: 'rotate(45deg)'
          }}/>
        </ModalWindowBtnClose>
        {props.item?
          <>
          <ModalWindowTitle>Покупка привилегии</ModalWindowTitle>
          <ModalWindowTitle style={{
            margin: '0',
          }}>{props.item}</ModalWindowTitle>
          </> :
          <ModalWindowTitle>Покупка кислинок</ModalWindowTitle>
        }

        <FormBuy>
          <Formik
            initialValues={{ nickname: '', promocode: '' }}
            onSubmit={(values  ) => {
              props.setModal(0)
            }}
          >
            {({
                values,
                handleChange,
                handleBlur,
                handleSubmit,
              }) => (
              <FormBuy onSubmit={handleSubmit}>
                <FormBuyLabel htmlFor="nickname">Ваш ник</FormBuyLabel>
                <FormBuyInputName
                  placeholder='Ввод...'
                  type="text"
                  name="nickname"
                  id='nickname'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.nickname}
                />
                <FormBuyLabel htmlFor="promocode">Промокод</FormBuyLabel>
                <PromocodeInput >
                  <FormBuyInputPromocode
                    placeholder='Ввод...'
                    type="text"
                    name="promocode"
                    id='promocode'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.promocode}
                  />
                  <CheckPromocodeButton onClick={ async() => {
                    await props.findPromocode(document.getElementById("promocode").value);
                    setSale(props.promocode.percent)
                  }}>ПРОВЕРИТЬ ПРОМОКОД</CheckPromocodeButton>
                </PromocodeInput>
                <ConfirmBlock>

                  {props.itemPrice?
                    <Sum>Цена:<SumValue>{sale > 0? Math.round(props.itemPrice*(1-(sale/100)))+`₽(-${sale}%)`: props.itemPrice+'₽'}</SumValue></Sum>:
                    <Sum>Цена:<SumValue>{sale > 0? Math.round(props.sum*(1-(sale/100)))+`₽(-${sale}%)`: props.sum+'₽'}</SumValue></Sum>
                  }
                  <ConfirmButton type="submit">
                    РАССЧИТАТЬ СУММУ
                  </ConfirmButton>
                </ConfirmBlock>
              </FormBuy>
            )}
          </Formik>
        </FormBuy>
      </ModalWindow>
    </ModalWindowWrapper>
  )
}

const MapStateToProps = (state) => ({
  promocode: state.promoCodes.promocode
})

const ModalContainer = connect(MapStateToProps, {
  findPromocode
})(Modal)
export default ModalContainer;

const ModalWindowWrapper = styled.div`
  position: fixed;
  width: 730px;
  height: 650px;
  background: #ffffff;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5%;
  top: 20%;
`

const ModalWindow = styled.div`
  width: 620px;
  height: 470px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const ModalWindowBtnClose = styled.button`
  position: absolute;
  left: 85%;
  border: none;
  background: inherit;
  cursor: pointer;
  width: 20px;
  height: 20px;
`

const ModalWindowTitle = styled.h1`
  font-family: 'Montserrat', sans-serif;
  font-weight: bold;
  font-size: 20px;
  margin: 0 0 55px 0;
`

const FormBuy = styled.div`
  width: 100%;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const FormBuyInputName = styled.input`
  width: 89%;
  padding: 30px 20px;
  border: 2px solid #D1D8F4;
  outline-color: #D1D8F4;
  border-radius: 10px;
  margin-bottom: 20px;
  &::placeholder {
    color: #878787;
    font-size: 14px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
  }
`

const FormBuyInputPromocode = styled.input`
  width: 50%;
  padding: 30px 20px;
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

const CheckPromocodeButton = styled.button`
  width: 30%;
  border: none;
  outline: none;
  cursor: pointer;
  background-color: #FFE922;
  font-family: 'Montserrat', sans-serif;
  font-weight: bold;
  font-size: 18px;
  border-radius: 10px;
`

const FormBuyLabel = styled.label`
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  color: #A9B0CA;
  font-size: 14px;
  margin-bottom: 5px;
`

const PromocodeInput = styled.div`
  width: 95%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 65px;
`

const ConfirmBlock = styled.div`
  width: 100%;
  height: 75px;
  display: flex;
  justify-content: space-around;
`

const Sum = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  color: #A9B0CA;
  font-size: 15px;
  margin: 0;
`

const SumValue = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-weight: bold;
  font-size: 20px;
  color: #000000;
  margin: 0;
`

const ConfirmButton = styled.button`
  width: 245px;
  height: 75px;
  background-color: #FFE820;
  font-family: 'Montserrat', sans-serif;
  font-weight: bold;
  font-size: 18px;
  border: none;
  outline: none;
  border-radius: 10px;
  cursor: pointer;
`