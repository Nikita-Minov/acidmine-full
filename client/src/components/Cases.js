import styled from 'styled-components';
import donate3 from "../img/cases/1.svg";
import donate10 from "../img/cases/1.1.svg";
import donate25 from "../img/cases/1.2.svg";
import valute3 from "../img/cases/2.svg";
import valute10 from "../img/cases/2.1.svg";
import valute25 from "../img/cases/2.2.svg";
import tituls3 from "../img/cases/3.svg";
import tituls10 from "../img/cases/3.1.svg";
import tituls25 from "../img/cases/3.2.svg";
import things5 from "../img/cases/4.svg";
import things10 from "../img/cases/4.1.svg";
import things15 from "../img/cases/4.2.svg";
import kisl1 from "../img/cases/5.svg";
import kisl3 from "../img/cases/5.1.svg";
import kisl5 from "../img/cases/5.2.svg";

export const Cases = (props) => {
  const cases = [
    {name: '3 Кейса Донат', price: 79, img: donate3},
    {name: '10 Кейсов Донат', price: 199, img: donate10},
    {name: '10 Кейсов Донат', price: 289, img: donate25},

    {name: '3 Кейса Валюта', price: 46, img: valute3},
    {name: '10 Кейсов Валюта', price: 129, img: valute10},
    {name: '25 Кейсов Донат', price: 199, img: valute25},

    {name: '3 Кейса Валюта', price: 59, img: tituls3},
    {name: '10 Кейсов Валюта', price: 149, img: tituls10},
    {name: '25 Кейсов Валюта', price: 239, img: tituls25},

    {name: '5 Кейсов Вещей', price: 99, img: things5},
    {name: '10 Кейсов Вещей', price: 179, img: things10},
    {name: '15 Кейсов Ыещей', price: 265, img: things15},

    {name: '1 Кейс Кислинки', price: 77, img: kisl1},
    {name: '3 Кейса Кислинки', price: 229, img: kisl3},
    {name: '5 Кейсов Кислинки', price: 379, img: kisl5},
  ]
  return (
    <>
      <WrapperCases>
        <CasesTitle>
          Кейсы
        </CasesTitle>
        <CasesMarket>
          {cases.map((el) => (
            <BuyCase onClick={() => {props.setModal(1);
              props.setName(el.name);
              props.setPrice(el.price);
            }}><img src={el.img} alt={el.name} style={{
              width: '300px',
              height: '360px'
            }}/></BuyCase>
          ))}
        </CasesMarket>
      </WrapperCases>
    </>
  )
}

const WrapperCases = styled.div`
  width: 60%;
  margin: auto;
`

const CasesTitle = styled.h1`
  margin: 25px 100px;
  font-family: 'Montserrat', sans-serif;
  font-weight: bold;
  font-size: 36px;
`

const CasesMarket = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`

const BuyCase = styled.button`
  margin-bottom: 50px;
  outline: none;
  background-color: inherit;
  border: none;
  cursor: pointer;
  &:hover {
    transform: scale(1.2);
  }
`