import React, { useState } from 'react'
import { ReactComponent as LikeIconColored } from '../../../assets/icons/like-btn-clicked.svg'
import { ReactComponent as LikeIconGray } from '../../../assets/icons/like-btn-unclicked.svg'
import * as S from './style.jsx'
const likes = 12
const LikeButton = (props) => {
  const [click, setClick] = useState(false)

  return (
    <S.LikeWrapper click={click} onClick={() => setClick(!click)}>
      {click ? <LikeIconColored /> : <LikeIconGray />}
      <S.LikeCount click={click}>{likes}</S.LikeCount>
    </S.LikeWrapper>
  )
}

export default LikeButton
