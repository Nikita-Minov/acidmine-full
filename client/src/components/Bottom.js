import styled from 'styled-components';
import bottom from '../img/bottom.png';
import vk2 from '../img/bottom/vk2.svg';
import ds2 from '../img/bottom/ds2.svg';
import yt2 from '../img/bottom/yt2.svg';

export const Bottom = () => {
  let links = [
    {name: 'VK', link: 'http://vk.com/acidmine_fun', img: vk2},
    {name: 'DS', link: 'https://discord.gg/pVGJjfTkuW', img: ds2},
    {name: 'YT', link: 'https://www.youtube.com/channel/UCmqtO7OxWpgObNSBjklEvzA', img: yt2},
  ]
  return (
    <BottomWrapper>
      <SocialNetworks>
        {links.map((el) => (
          <a href={el.link} rel="noreferrer" target="_blank"><img src={el.img} alt={el.name} style={{
            width: '195px',
            height: '195px',
          }}/></a>
        ))}
      </SocialNetworks>
    </BottomWrapper>
  )
}

const BottomWrapper = styled.div`
  width: 100%;
  height: 750px;
  background: url(${bottom}) no-repeat;
  display: flex;
  justify-content: center;
`

const SocialNetworks = styled.div`
  margin-top: 90px;
  width: 40%;
  height: 200px;
  display: flex;
  justify-content: space-between;
`