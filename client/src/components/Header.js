import React, {useState} from 'react';
import styled from 'styled-components';
import {Link} from "react-router-dom";
import logo from '../img/logo.svg';
import vk from '../img/vk.svg';
import ds from '../img/discord.svg';
import yt from '../img/youtube.svg';

export const Header = () => {
  let navBarLinks = [
    {name: 'Главная', link: '/'},
    {name: 'Тех. Поддержка', link: 'http://vk.me/acidmine_fun'},
    {name: 'Правила', link: 'https://vk.com/topic-206317555_48081735'}
  ];
  let socialNetworksLinks = [
    {img: vk, link: 'http://vk.com/acidmine_fun'},
    {img: yt, link: 'https://www.youtube.com/channel/UCmqtO7OxWpgObNSBjklEvzA'},
    {img: ds, link: 'https://discord.gg/pVGJjfTkuW'}
  ]
  let [link, setLink] = useState('/')
  return (
    <HeaderWrapper>
      <Link to="/">
        <Logo src={logo} alt={"Logo"}/>
      </Link>
      <NavBar>
        {navBarLinks.map((el) => (
          link === el.link ?
          <MenuItemWithBorder>
            <a href={el.link} rel="noreferrer" target="_blank" style={{
              color: '#000000',
              textDecoration: 'none',
              fontSize: 20,
              fontFamily: 'Montserrat',
            }} onClick={() => setLink(el.link)}>
                {el.name}
            </a>
          </MenuItemWithBorder> :
            <MenuItem>
              <a href={el.link} rel="noreferrer" target="_blank" style={{
                color: '#A7A7A7',
                textDecoration: 'none',
                fontSize: 20,
                fontFamily: 'Montserrat',
              }} onClick={() => setLink(el.link)}>
                {el.name}
              </a>
            </MenuItem>
        ))}
      </NavBar>
      <SocialNetworksList>
        {socialNetworksLinks.map((el) => (
          <SocialNetworksLink href={el.link}><SocialNetworksListImg src={el.img} /></SocialNetworksLink>
        ))}
      </SocialNetworksList>
    </HeaderWrapper>
  )
}

const HeaderWrapper = styled.div`
  width: 60%;
  margin: 60px auto 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const Logo = styled.img`
  width: 60px;
`
const NavBar = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 580px;
  height: 50px;
`
const MenuItem = styled.li`
  list-style-type: none;
  border-bottom: 6px solid #ffffff;
  display: flex;
  justify-content: center;
  align-content: center;
  height: 80%;
`

const MenuItemWithBorder = styled.li`
  list-style-type: none;
  border-bottom: 6px solid #FFCF00;
  display: flex;
  justify-content: center;
  align-content: center;
  height: 80%;
  color: #000000;
`
const SocialNetworksList = styled.ul`
  width: 180px;
  height: 50px;
  list-style-type: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const SocialNetworksLink = styled.a`
  width: 45px;
  height: 45px;
  background: linear-gradient(45deg, #FFCD00, #FE9F00);
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`
const SocialNetworksListImg = styled.img`
  width: 30px;
  height: 30px;
`