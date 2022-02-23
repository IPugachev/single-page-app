import React, { useState } from 'react'
import { ReactComponent as LikeIconColored } from '../../../assets/icons/like-btn-clicked.svg'
import { ReactComponent as LikeIconGray } from '../../../assets/icons/like-btn-unclicked.svg'
import * as S from './style.jsx'

const LikeButton = (props) => {
  const [click, setClick] = useState(false)

  return (
    <S.LikeWrapper click={click} onClick={() => setClick(!click)}>
      {click ? <LikeIconColored /> : <LikeIconGray />}
      <S.LikeCount click={click}>115</S.LikeCount>
    </S.LikeWrapper>
  )
}

export default LikeButton
