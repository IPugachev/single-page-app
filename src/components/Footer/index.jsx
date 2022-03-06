import React from 'react'
import { ReactComponent as Logo } from '../../assets/icons/logo.svg'
import { ReactComponent as Toxin } from '../../assets/icons/toxin.svg'
import { ReactComponent as TwitterIcon } from '../../assets/icons/twitter.svg'
import { ReactComponent as FacebookIcon } from '../../assets/icons/facebook.svg'
import { ReactComponent as InstagramIcon } from '../../assets/icons/instagram.svg'
import Input from '../UI/Input'
import * as S from './style.jsx'

const Footer = () => {
  return (
    <S.Footer>
      <S.Wrapper>
        <S.InfoBox>
          <S.FooterItem>
            <S.LogoElement>
              <Logo style={{ marginRight: '12.5px' }} />
              <Toxin />
            </S.LogoElement>
            <S.FooterText>
              Бронирование номеров в лучшем отеле 2019 года по версии ассоциации «Отельные взгляды»
            </S.FooterText>
          </S.FooterItem>
          <S.FooterItem>
            <S.ItemTitle>Навигация</S.ItemTitle>
            <S.ItemLink href='#'>О нас</S.ItemLink>
            <S.ItemLink href='#'>Новости</S.ItemLink>
            <S.ItemLink href='#'>Служба поддержки</S.ItemLink>
            <S.ItemLink href='#'>Улуги</S.ItemLink>
          </S.FooterItem>
          <S.FooterItem>
            <S.ItemTitle>О нас</S.ItemTitle>
            <S.ItemLink href='#'>О сервисе</S.ItemLink>
            <S.ItemLink href='#'>Наша команда</S.ItemLink>
            <S.ItemLink href='#'>Вакансии</S.ItemLink>
            <S.ItemLink href='#'>Инвесторы</S.ItemLink>
          </S.FooterItem>
          <S.FooterItem>
            <S.ItemTitle>Служба поддержки</S.ItemTitle>
            <S.ItemLink href='#'>Соглашения</S.ItemLink>
            <S.ItemLink href='#'>Сообщество</S.ItemLink>
            <S.ItemLink href='#'>Связь с нами</S.ItemLink>
          </S.FooterItem>
          <S.FooterItem>
            <S.ItemTitle>Подписка</S.ItemTitle>
            <S.FooterText>Получайте специальные предложения и новости сервиса</S.FooterText>
            <Input placeholder='Email' width='260px' styled='email' />
          </S.FooterItem>
        </S.InfoBox>
      </S.Wrapper>
      <S.UnderBox>
        <S.UnderBoxWrapper>
          <S.FooterText>Copyright © 2018 Toxin отель. Все права защищены.</S.FooterText>
          <S.IconContainer>
            <a href='#'>
              <TwitterIcon />
            </a>
            <a href='#'>
              <FacebookIcon />
            </a>
            <a href='#'>
              <InstagramIcon />
            </a>
          </S.IconContainer>
        </S.UnderBoxWrapper>
      </S.UnderBox>
    </S.Footer>
  )
}

export default Footer
