import React from 'react'
import * as S from './style'

const Button = ({ type, text, arrow, margin }) => {
  return (
    <S.Button type={type} margin={margin}>
      <S.ButtonText type={type}>{text}</S.ButtonText>
      {arrow && <S.Arrow />}
    </S.Button>
  )
}

export default Button
