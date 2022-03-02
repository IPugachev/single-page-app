import React from 'react'
import { ReactComponent as Logo } from '../../assets/icons/logo.svg'
import { ReactComponent as Toxin } from '../../assets/icons/toxin.svg'
import { ReactComponent as ExpandArrow } from '../../assets/icons/expand-arrow.svg'
import Button from '../UI/Button'
import * as S from './style.jsx'
//

const Header = ({ isUserLogged = false, userName = 'Юлий Цезарь' }) => {
  return (
    <S.Header>
      <S.LogoBox>
        <S.ButtonLink to='/'>
          <Logo style={{ marginRight: '12.5px' }} />
        </S.ButtonLink>
        <Toxin />
      </S.LogoBox>
      <S.InfoBox>
        <S.NavBar>
          <S.HeaderLink href='#'>О нас</S.HeaderLink>
          <S.HeaderLink href='#'>
            Услуги
            <ExpandArrow style={{ width: '24px' }} />
          </S.HeaderLink>
          <S.HeaderLink href='#'>Ваканчии</S.HeaderLink>
          <S.HeaderLink href='#'>Новости</S.HeaderLink>
          <S.HeaderLink href='#'>
            Соглашения
            <ExpandArrow style={{ width: '24px' }} />
          </S.HeaderLink>
        </S.NavBar>
        {isUserLogged ? (
          <S.User href='#'>{userName}</S.User>
        ) : (
          <S.ButtonBox>
            <S.ButtonLink to='/registration'>
              <Button type='white' text='войти' margin='0 20px 0 0' />
              <Button text='зарегестрироваться' width='196px' />
            </S.ButtonLink>
          </S.ButtonBox>
        )}
      </S.InfoBox>
    </S.Header>
  )
}

export default Header
