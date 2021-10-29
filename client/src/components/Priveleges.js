import styled from 'styled-components';
import argon from '../img/privileges/1.svg';
import bromum from '../img/privileges/2.svg';
import indium from '../img/privileges/3.svg';
import uranium from '../img/privileges/4.svg';
import sulfur from '../img/privileges/5.svg';
import neon from '../img/privileges/6.svg';
import krypton from '../img/privileges/7.svg';
import acid from '../img/privileges/8.svg';

export const Privileges = (props) => {
  const privileges = [
    {name: 'Argon', price: 19, img: argon},
    {name: 'Bromum', price: 79, img: bromum},
    {name: 'Indium', price: 129, img: indium},
    {name: 'Uranium', price: 129, img: uranium},
    {name: 'Sulfur', price: 569, img: sulfur},
    {name: 'Neon', price: 989, img: neon},
    {name: 'Krypton', price: 3449, img: krypton},
    {name: 'Acid', price: 9499, img: acid}
  ]
  return (
    <>
      <WrapperPrivileges>
        <PrivilegesTitle>
          Донат привилегии
        </PrivilegesTitle>
        <PrivilegesMarket>
          {privileges.map((el) => (
            <BuyPrivilege onClick={() => {props.setModal(1);
              props.setName(el.name);
              props.setPrice(el.price);
            }}><img src={el.img} alt={el.name} style={{
              width: '265px',
              height: '265px',
              marginBottom: '20px'
            }}/></BuyPrivilege>
          ))}
        </PrivilegesMarket>
      </WrapperPrivileges>
    </>
  );
}

const WrapperPrivileges = styled.div`
  width: 60%;
  margin: auto;
`

const PrivilegesTitle = styled.h1`
  margin: 25px 100px;
  font-family: 'Montserrat', sans-serif;
  font-weight: bold;
  font-size: 36px;
`

const PrivilegesMarket = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`

const BuyPrivilege = styled.button`
  margin-bottom: 50px;
  outline: none;
  background-color: inherit;
  border: none;
  cursor: pointer;
  &:hover {
    transform: scale(1.2);
  }
`