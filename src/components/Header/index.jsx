import React from 'react'
import { ReactComponent as Logo } from '../../assets/icons/logo.svg'
import { ReactComponent as Toxin } from '../../assets/icons/toxin.svg'
import { ReactComponent as ExpandArrow } from '../../assets/icons/expand-arrow.svg'
import Button from '../UI/Button'
import * as S from './style.jsx'
import { useDispatch, useSelector } from 'react-redux'

import { setUserStatus } from '../../store/profile/action'
//

const Header = () => {
  const isUserLogged = useSelector((state) => state.profile.isAuth)
  const userName = `${useSelector((state) => state.profile.firstName)} ${useSelector(
    (state) => state.profile.lastName
  )}`
  const dispatch = useDispatch()
  const hasAccountHandleTrue = () => {
    dispatch(setUserStatus('hasAccount', true))
  }
  const hasAccountHandleFalse = () => {
    dispatch(setUserStatus('hasAccount', false))
  }
  // console.log(useSelector((state) => state.profile.user?.[0].firstName))
  return (
    <S.Header>
      <S.Wrapper>
        <S.LogoBox>
          <S.ButtonLink to='/study-project-toxin/'>
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
              <S.ButtonLink to='/study-project-toxin/registration'>
                <Button buttonStyle='white' text='войти' margin='0 20px 0 0' onClick={hasAccountHandleTrue} />
                <Button text='зарегестрироваться' width='196px' onClick={hasAccountHandleFalse} />
              </S.ButtonLink>
            </S.ButtonBox>
          )}
        </S.InfoBox>
      </S.Wrapper>
    </S.Header>
  )
}

export default Header
