import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import styled from 'styled-components'
import Background from '../assets/backgrounds/registration.png'
import RegistrationForm from '../components/RegistrationForm'
import SignInForm from '../components/SignInForm'

// import * as S from './style.jsx'

const Body = styled.div`
  max-width: 100vw;
  min-width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Main = styled.div`
  position: relative;
  width: 100%;
`
const Registration = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`
const BackgroundImg = styled.img`
  width: 100%;
  object-fit: cover;
`

const RegistrationPage = () => {
  const [signInClick, setSignInClick] = useState(false)
  const signInClicked = () => {
    setSignInClick(!signInClick)
  }
  return (
    <Body>
      <Header />
      <Main>
        <Registration>
          {!signInClick ? <RegistrationForm onClick={signInClicked} /> : <SignInForm onClick={signInClicked} />}
        </Registration>
        <BackgroundImg src={Background} alt='background' />
      </Main>
      <Footer />
    </Body>
  )
}

export default RegistrationPage
