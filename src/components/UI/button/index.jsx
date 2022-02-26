import React from 'react'
import * as S from './style'

const Button = ({ type, text, arrow, margin, width, href, action }) => {
  return (
    <S.Button href={href} type={type} margin={margin} width={width} onClick={() => action()}>
      <S.ButtonText type={type}>{text}</S.ButtonText>
      {arrow && <S.Arrow />}
    </S.Button>
  )
}

export default Button
