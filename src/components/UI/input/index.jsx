import React from 'react'
import * as S from './style.jsx'

const Input = React.forwardRef((props, ref) => {
  return (
    <S.Input width={props.width}>
      <S.Title title={props.title}>{props.title}</S.Title>
      <S.Wrapper>
        <S.Field placeholder={props.placeholder} input={props.input} ref={ref} />
        <S.Arrow input={props.input} onClick={props.onClick} />
        <S.ArrowEmail input={props.input} onClick={props.onClick} />
      </S.Wrapper>
    </S.Input>
  )
})

export default Input
