import React from 'react'
import * as S from './style'

// const reviews = {
//   great: 10,
//   good: 5,
//   alright: 5,
//   bad: 1,
// }
const reviews = [80, 40, 40, 0]
const sum = reviews[0] + reviews[1] + reviews[2] + reviews[3]

const Diagram = () => {
  let great = (reviews[0] / (reviews[0] + reviews[1] + reviews[2] + reviews[3])) * 360
  let good = (reviews[1] / (reviews[0] + reviews[1] + reviews[2] + reviews[3])) * 360
  let alright = (reviews[2] / (reviews[0] + reviews[1] + reviews[2] + reviews[3])) * 360
  let bad = (reviews[3] / (reviews[0] + reviews[1] + reviews[2] + reviews[3])) * 360

  return (
    <S.Container>
      <S.Wrapper>
        <p>{sum}</p>
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
