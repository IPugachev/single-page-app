import React from 'react'
import * as S from './style.jsx'

const Input = React.forwardRef((props, ref) => {
  return (
    <S.Input width={props.width} margin={props.margin}>
      <S.Title title={props.title}>{props.title}</S.Title>
      <S.Wrapper>
        <S.InputField {...props} ref={ref} />
        <S.ErrorMessage>{props.error}</S.ErrorMessage>
        <S.Arrow styled={props.styled} onClick={props.onClick} />
        <S.ArrowEmail styled={props.styled} onClick={props.onClick} />
      </S.Wrapper>
    </S.Input>
  )
})

export default Input
