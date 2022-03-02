import React from 'react'
import Background from '../../assets/backgrounds/landing.png'
import SearchForm from '../../components/SearchForm'
import * as S from './style.jsx'

const LandingPage = () => {
  return (
    <S.Body>
      <S.Main>
        <S.Search>
          <SearchForm />
        </S.Search>
        <S.BackgroundImg src={Background} alt='background' />
        <S.MainSubtitle>Лучшие номера для вашей работы, отдыха и просто вдохновения</S.MainSubtitle>
      </S.Main>
    </S.Body>
  )
}

export default LandingPage
