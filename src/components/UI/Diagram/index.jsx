import React from 'react'
import * as S from './style'

const Diagram = ({ reviews }) => {
  const reviewsArray = [Math.floor(reviews / 3) + 20, Math.floor(reviews / 3) + 4, Math.floor(reviews / 3), 0]

  let great = (reviewsArray[0] / (reviewsArray[0] + reviewsArray[1] + reviewsArray[2] + reviewsArray[3])) * 360
  let good = (reviewsArray[1] / (reviewsArray[0] + reviewsArray[1] + reviewsArray[2] + reviewsArray[3])) * 360
  let alright = (reviewsArray[2] / (reviewsArray[0] + reviewsArray[1] + reviewsArray[2] + reviewsArray[3])) * 360
  let bad = (reviewsArray[3] / (reviewsArray[0] + reviewsArray[1] + reviewsArray[2] + reviewsArray[3])) * 360

  return (
    <S.Container>
      <S.Wrapper>
        <p>{reviews + 4}</p>
        <span>голосов</span>
      </S.Wrapper>
      <S.Box values={[bad, alright, good, great]} />
      <S.Info>
        <S.GreatString>
          <div />
          <p>Великолепно</p>
        </S.GreatString>
        <S.GoodString>
          <div />
          <p>Хорошо</p>
        </S.GoodString>
        <S.AlrightString>
          <div />
          <p>Удовлетворительно</p>
        </S.AlrightString>
        <S.BadString>
          <div />
          <p>Разочарован</p>
        </S.BadString>
      </S.Info>
    </S.Container>
  )
}

export default Diagram
