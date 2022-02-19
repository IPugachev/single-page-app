import React, { useState } from 'react'
import * as S from './style.jsx'

const LikeBtn = (props) => {
  const [click, setClick] = useState(false)

  return (
    <S.LikeWrapper click={click} onClick={() => setClick(!click)}>
      {click ? <S.LikeClicked /> : <S.LikeUnclicked />}
      <S.LikeCount click={click}>115</S.LikeCount>
    </S.LikeWrapper>
  )
}

export default LikeBtn
