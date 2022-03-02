import React from 'react'
import * as S from './style'

const Button = ({ type, text, arrow, margin, width, href }) => {
  return (
    <S.Button type={type} margin={margin} width={width}>
      <S.ButtonText type={type}>{text}</S.ButtonText>
      {arrow && <S.Arrow />}
    </S.Button>
  )
}

export default Button
