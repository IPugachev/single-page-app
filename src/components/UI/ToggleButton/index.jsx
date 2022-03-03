import React from 'react'
import * as S from './style.jsx'

const Toggle = React.forwardRef((props, ref) => {
  return (
    <S.Toggle margin={props.margin}>
      <S.Title title={props.title}>
        <span>{props.title}</span>
      </S.Title>
      <S.Wrapper>
        <S.Label>
          <S.Input ref={ref} type='checkbox' />
          <S.Slider></S.Slider>
        </S.Label>
        <span>Получать спецпредложения</span>
      </S.Wrapper>
    </S.Toggle>
  )
})

export default Toggle
