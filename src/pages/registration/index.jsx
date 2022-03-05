import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Background from '../../assets/backgrounds/registration.png'
import RegistrationForm from '../../components/RegistrationForm'
import SignInForm from '../../components/SignInForm'
import { setUserStatus } from '../../store/profile/action'
import * as S from './style'

const RegistrationPage = () => {
  const hasAccount = useSelector((state) => state.profile.hasAccount)
  const isAuth = useSelector((state) => state.profile.isAuth)
  const dispatch = useDispatch()
  const changeAccount = () => {
    hasAccount ? dispatch(setUserStatus('hasAccount', false)) : dispatch(setUserStatus('hasAccount', true))
  }

  return (
    <S.Body>
      <S.Main>
        <S.Registration>
          {!hasAccount ? (
            <RegistrationForm handler={changeAccount} />
          ) : (
            <SignInForm handler={changeAccount} isAuth={isAuth} />
          )}
        </S.Registration>
        <S.BackgroundImg src={Background} alt='background' />
      </S.Main>
    </S.Body>
  )
}

export default RegistrationPage
