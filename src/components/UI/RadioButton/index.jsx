import React from 'react'
import * as S from './style.jsx'

const RadioButton = React.forwardRef((props, ref) => {
  return (
    <S.Radio>
      <S.Input {...props} type='radio' ref={ref} />
      <S.Label>{props.label}</S.Label>
    </S.Radio>
  )
})
export default RadioButton
