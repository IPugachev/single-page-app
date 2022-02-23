import React from 'react'
import * as S from './style.jsx'

const RadioBtn = (props) => {
  return (
    <S.Radio {...props}>
      <S.Title {...props}>
        <span>{props.title}</span>
      </S.Title>
      <S.Wrapper>
        <S.Input type='radio' name='gender' value='male' />
        <S.Label>
          <span>Мужчина</span>
        </S.Label>
        <S.Input type='radio' name='gender' value='female' />
        <S.Label>
          <span>Женщина</span>
        </S.Label>
      </S.Wrapper>
    </S.Radio>
  )
}

export default RadioBtn
