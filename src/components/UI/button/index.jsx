import React from 'react'
import * as S from './style'

const Button = ({ buttonType, buttonStyle, text, arrow, margin, width, onClick }) => {
  return (
    <S.Button
      type={buttonType}
      buttonStyle={buttonStyle}
      margin={margin}
      width={width}
      onClick={(event) => onClick(event)}>
      <S.ButtonText buttonStyle={buttonStyle}>{text}</S.ButtonText>
      {arrow && <S.Arrow />}
    </S.Button>
  )
}

export default Button
