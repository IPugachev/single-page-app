import React from 'react'
import * as S from './style'

const Button = ({ type, text }) => {
  return (
    <S.Btn type={type}>
      <S.BtnText type={type}>{text}</S.BtnText>
    </S.Btn>
  )
}

export default Button
