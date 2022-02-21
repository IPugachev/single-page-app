import React from 'react'
import * as S from './style'

const Button = ({ type, text, arrow, margin }) => {
  return (
    <S.Btn type={type} margin={margin}>
      <S.BtnText type={type}>{text}</S.BtnText>
      {arrow && <S.Arrow />}
    </S.Btn>
  )
}

export default Button
