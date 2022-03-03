import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Background from '../../assets/backgrounds/registration.png'
import RegistrationForm from '../../components/RegistrationForm'
import SignInForm from '../../components/SignInForm'
import { changeValues } from '../../store/filter/action'
import * as S from './style'

const RegistrationPage = () => {
  const hasAccount = useSelector((state) => state.filter.hasAccount)
  const isAuth = useSelector((state) => state.filter.isAuth)
  const dispatch = useDispatch()
  const changeAccount = () => {
    hasAccount ? dispatch(changeValues('hasAccount', false)) : dispatch(changeValues('hasAccount', true))
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
