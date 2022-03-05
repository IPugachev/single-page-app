import React from 'react'
import * as S from './style'

const Button = (props) => {
  return (
    // type={buttonType} buttonStyle={buttonStyle} margin={margin} width={width} onClick={onClick}
    <S.Button {...props}>
      <S.ButtonText buttonStyle={props.buttonStyle}>{props.text}</S.ButtonText>
      {props.hasArrow && <S.Arrow />}
    </S.Button>
  )
}

export default Button
