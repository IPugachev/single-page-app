import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import styled from 'styled-components'
import Background from '../assets/backgrounds/landing.png'
import SearchForm from '../components/SearchForm'

// import * as S from './style.jsx'

const Body = styled.div`
  max-width: 100vw;
  min-width: 740px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Search = styled.div`
  position: absolute;
  top: 70px;
  left: 140px;
`
const Main = styled.div`
  position: relative;
`
const BackgroundImg = styled.img`
  width: 100%;
  object-fit: cover;
`
const MainSubtitle = styled.p`
  position: absolute;
  font-size: 14px;
  line-height: 24px;
  text-align: right;
  color: ${({ theme }) => theme.colors.darkShade75};
  width: 266px;
  bottom: 70px;
  right: 140px;
`

const LandingPage = () => {
  return (
    <Body>
      <Header />
      <Main>
        <Search>
          <SearchForm />
        </Search>
        <BackgroundImg src={Background} alt='background' />
        <MainSubtitle>Лучшие номера для вашей работы, отдыха и просто вдохновения</MainSubtitle>
      </Main>
      <Footer />
    </Body>
  )
}

export default LandingPage
