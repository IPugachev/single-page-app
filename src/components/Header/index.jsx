import React from 'react'
import { ReactComponent as Logo } from '../../assets/icons/logo.svg'
import { ReactComponent as Toxin } from '../../assets/icons/toxin.svg'
import { ReactComponent as ExpandArrow } from '../../assets/icons/expand-arrow.svg'
import Button from '../UI/Button'
import * as S from './style.jsx'
import { Link } from 'react-router-dom'

const Header = ({ isUserLogged = false, userName = 'Юлий Цезарь' }) => {
  return (
    <S.Header>
      <S.LogoBox>
        <Link to='/'>
          <Logo style={{ marginRight: '12.5px' }} />
        </Link>
        <Toxin />
      </S.LogoBox>
      <S.InfoBox>
        <S.NavBar>
          <S.Link href='#'>О нас</S.Link>
          <S.Link href='#'>
            Услуги
            <ExpandArrow style={{ width: '24px' }} />
          </S.Link>
          <S.Link href='#'>Ваканчии</S.Link>
          <S.Link href='#'>Новости</S.Link>
          <S.Link href='#'>
            Соглашения
            <ExpandArrow style={{ width: '24px' }} />
          </S.Link>
        </S.NavBar>
        {isUserLogged ? (
          <S.User href='#'>{userName}</S.User>
        ) : (
          <S.ButtonBox>
            <Button type='white' text='войти' margin='0 20px 0 0' />
            <Button text='зарегестрироваться' width='196px' />
          </S.ButtonBox>
        )}
      </S.InfoBox>
    </S.Header>
  )
}

export default Header
