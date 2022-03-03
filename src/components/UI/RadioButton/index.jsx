import React from 'react'
import * as S from './style.jsx'

const RadioBtn = React.forwardRef((props, ref) => {
  return (
    <S.Radio>
      <S.Title>{props.title}</S.Title>
      <S.Wrapper>
        <S.Input ref={ref[0]} type='radio' name='gender' value='male' />
        <S.Label>Мужчина</S.Label>
        <S.Input ref={ref[1]} type='radio' name='gender' value='female' />
        <S.Label>Женщина</S.Label>
      </S.Wrapper>
    </S.Radio>
  )
})

export default RadioBtn
