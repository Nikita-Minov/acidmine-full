import React, {useState} from 'react';
import styled from 'styled-components';
import cubes from '../img/cubes.png';
import peoples from '../img/peoples.png';
import blocks from '../img/blocks.png';
import groundBlocks from '../img/ground-blocks.png';
import Pig from '../img/pig.png';
import {Privileges} from "../components/Priveleges";
import {Cases} from "../components/Cases";
import {Bottom} from "../components/Bottom";
import purchase from '../img/purchase.png';
import Modal from "../components/Modal";
import {Header} from "../components/Header";

const Primary = () => {
  let [sum, setSum] = useState(0);
  let [modalKisl, setModalKisl] = useState(0)
  let [name, setName] = useState(0);
  let [price, setPrice] = useState(0)
  return (
    <Main>
      <Header/>
      <PrimaryWrapper>
      <MainBlock>
        <LeftBlock>
          <PrimaryTitle>Открой для себя новые возможности Полны веселья!</PrimaryTitle>
          <ServerName>ACIDMiNE</ServerName>
          <StartLink>ОПРОБУЙ НЕЧТО НОВОЕ</StartLink>
        </LeftBlock>
        <RightBlock>
          <img src={peoples} alt="steve and alex"/>
        </RightBlock>
      </MainBlock>
    </PrimaryWrapper>
      <Blocks src={blocks}/>
    <PurchaseSection>
      {modalKisl === 1 ?
        <Modal setModal={setModalKisl} sum={sum} item={name} itemPrice={price} setName={setName} setPrice={setPrice} /> : <></>}
      <BlockWrapper>
        <BlockWithSlider>
          <Slider>
            <BlockWithSliderTitle>Покупка игровой валюты</BlockWithSliderTitle>
            <BlockWithSliderSubtitle>Количество кислинок</BlockWithSliderSubtitle>
            <Toddler type="range" min="1" max="5000" id='sum' onChange={() => setSum(document.getElementById('sum').value)} />
          </Slider>
          <PigImg src={Pig}/>
        </BlockWithSlider>
        <CalculateBlock>
          <InfoBlock>
              <Give>
                <GiveText>ОТДАЕТЕ</GiveText>
                <GiveSum>{sum}₽</GiveSum>
              </Give>
            <Give>
              <GiveText>ПОЛУЧАЕТЕ</GiveText>
              <GiveSum>{sum >= 1500 ? Math.round(sum*1.2) : sum}⋢</GiveSum>
            </Give>
          </InfoBlock>
          <BuyButton onClick={() => setModalKisl(1)}>
            ПРИОБРЕСТИ <YellowText>КИСЛИНКИ</YellowText>
          </BuyButton>
        </CalculateBlock>
      </BlockWrapper>
    </PurchaseSection>
    <PrivilegiesAndCases>
      <Privileges setModal={setModalKisl} setName={setName} setPrice={setPrice} />
      <Cases setModal={setModalKisl} setName={setName} setPrice={setPrice} />
    </PrivilegiesAndCases>
    <Bottom/>
    </Main>
  )
}

export default Primary;

const Main = styled.div`
  background: linear-gradient(180deg, rgba(254,255,254,1) 0%, rgba(218,218,219,1) 100%);
`

const PrimaryWrapper = styled.div`
  width: 60%;
  margin: 0 auto -60px auto;
  height: 470px;
  
`
const MainBlock = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  transition: 1s;
  background: url(${cubes}) no-repeat;
  &:hover{
    transform: scale(1.2);
  }
}
`
const LeftBlock = styled.div`
  display: flex;
  height: 470px;
  width: 50%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const RightBlock = styled.div`
  display: flex;
  height: 470px;
  width: 50%;
  flex-direction: column;
`

const PrimaryTitle = styled.h1`
  font-family: 'Montserrat', sans-serif;
  font-weight: bold;
  font-size: 45px;
  width: 540px;
  margin: 0;
  padding-top: 100px;
  padding-bottom: 55px;
`
const ServerName = styled.h1`
  font-size: 88px;
  letter-spacing: 7px;
  margin: 0;
  color: transparent;
  -webkit-background-clip: text;
  background-image: linear-gradient(45deg, #FFCD00, #FE9F00);
`
const StartLink = styled.h3`
  font-family: 'Montserrat', sans-serif;
  font-weight: bold;
  width: 320px;
  padding: 10px 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(45deg, #FFCD00, #FE9F00);
  text-decoration: none;
  color: #ffffff;
  border-radius: 5px;
`

const Blocks = styled.img`
  width: 80%;
  height: 365px;
  margin: auto auto -200px auto;
`

const PurchaseSection = styled.div`
  width: 100%;
  height: 350px;
  margin: auto;
  display: flex;
  padding-top: 150px;
  flex-direction: column;
  align-items: center;
  background: url(${purchase}) no-repeat;
`
const BlockWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${groundBlocks});
  background-repeat: no-repeat;
  background-position: 200px 50px;
`

const BlockWithSlider = styled.div`
  width: 65%;
  display: flex;
  justify-content: space-between;
  height: 250px;
  position: relative;
  z-index: 0;
  margin: auto;
`

const Slider = styled.div`
  width: 950px;
  height: 100%;
  position: relative;
`

const PigImg = styled.img`
  width: 230px;
  height: 230px;
`

const BlockWithSliderTitle = styled.h1`
  font-family: 'Montserrat', sans-serif;
  font-weight: bold;
  font-size: 35px;
  color: #000000;
  margin-top: 45px;
  margin-bottom: 10px;
`

const BlockWithSliderSubtitle = styled.h2`
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  font-size: 25px;
  color: #ffffff;
`

const Toddler = styled.input`
  width: 900px;
  -webkit-appearance: none;
  height: 10px;
  border-radius: 20px;
  outline: none;
  background: #6D6D6D;
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    background: #6D6D6D;
    width: 10px;
    height: 10px;
    outline: 10px solid #FEA800;
    border-radius: 100%;
    cursor: pointer;
  }
  @media screen and (-webkit-min-device-pixel-ratio:0) {
   & {
      overflow: hidden;
      -webkit-appearance: none;
      background-color: #9a905d;
    }

    &::-webkit-slider-runnable-track {
      height: 10px;
      -webkit-appearance: none;
      color: #13bba4;
      margin-top: -1px;
    }

    &::-webkit-slider-thumb {
      width: 10px;
      -webkit-appearance: none;
      height: 10px;
      background: #434343;
      box-shadow: -900px 0 0 900px #ffffff;
    }

  }
`

const CalculateBlock = styled.div`
  width: 50%;
  height: 40px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const InfoBlock = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Give = styled.div`
  width: 50%;
  height: 50%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`

const GiveText = styled.p`
  padding: 15px 50px;
  background: linear-gradient(45deg, #FEC300, #FEA500);
  color: #ffffff;
  font-family: 'Montserrat', sans-serif;
  font-weight: bold;
  letter-spacing: 3px;
  border-radius: 10px;
`
const GiveSum = styled.p`
  color: #ffffff;
  font-family: 'Montserrat', sans-serif;
  font-weight: bold;
  font-size: 30px;
`

const BuyButton = styled.a`
  text-decoration: none;
  color: #ffffff;
  width: 100px;
  background: linear-gradient(45deg, #000000, #2D2420);
  padding: 10px 50px;
  border-radius: 15px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  transform: rotate(-10deg);
  cursor: pointer;
  &:hover {
    transform: scale(1.2);
  }
`

const YellowText = styled.p`
  color: #FFC100;  
  padding: 0;
  margin: 0;
`

const PrivilegiesAndCases = styled.div`
  background: linear-gradient(180deg, rgba(254,255,254,1) 0%, rgba(218,218,219,1) 100%);
  padding-bottom: 50px;
`