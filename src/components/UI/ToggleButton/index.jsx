import React from 'react'
import * as S from './style.jsx'

const Toggle = ({ title, margin }) => {
  return (
    <S.Toggle margin={margin}>
      <S.Title title={title}>
        <span>{title}</span>
      </S.Title>
      <S.Wrapper>
        <S.Label>
          <S.Input type='checkbox' />
          <S.Slider></S.Slider>
        </S.Label>
        <span>Получать спецпредложения</span>
      </S.Wrapper>
    </S.Toggle>
  )
}

export default Toggle
