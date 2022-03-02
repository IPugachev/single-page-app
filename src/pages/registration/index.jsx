import React, { useState } from 'react'
import Background from '../../assets/backgrounds/registration.png'
import RegistrationForm from '../../components/RegistrationForm'
import SignInForm from '../../components/SignInForm'
import * as S from './style'

// import * as S from './style.jsx'

const RegistrationPage = () => {
  const [signInClick, setSignInClick] = useState(false)
  const signInClicked = () => {
    setSignInClick(!signInClick)
  }
  return (
    <S.Body>
      <S.Main>
        <S.Registration>
          {!signInClick ? <RegistrationForm onClick={signInClicked} /> : <SignInForm onClick={signInClicked} />}
        </S.Registration>
        <S.BackgroundImg src={Background} alt='background' />
      </S.Main>
    </S.Body>
  )
}

export default RegistrationPage
