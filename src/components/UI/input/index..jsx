import React from 'react'
import * as S from './style.jsx'

const TextField = React.forwardRef((props, ref) => {
  const handleFocus = () => {
    props.onFocus()
  }

  return (
    <S.Input width={props.width}>
      <S.Title>{props.title}</S.Title>
      <S.Field placeholder={props.value} input={props.input} ref={ref} onFocus={handleFocus} />
      <S.Arrow input={props.input} onClick={props.onClick} />
    </S.Input>
  )
})

export default TextField
