import React from 'react'
import LikeButton from '../UI/LikeButton'
import avatarPath from '../../assets/avatars/wO7LPEgT4rI.jpg'
import * as S from './style'

const commentInfo = {
  name: 'Геннадий Цаль',
  date: '1 минуту назад',
}

const commentText =
  'Великолепный матрас на кровати в основной спальне! А пуфик вообще потрясающий. И стены, действительно, шумоподавляющие. Выкрикивал комплименты повару — никто не жаловался из соседей.'

const Comment = () => {
  console.log(Math.random())
  return (
    <S.Container>
      <S.UserBox>
        <S.UserImage src={avatarPath} alt='avatar' />
        <LikeButton />
      </S.UserBox>
      <S.TextBlock>
        <S.UserStatus>
          <p>{commentInfo.name}</p>
          <p>{commentInfo.date}</p>
        </S.UserStatus>
        <p>{commentText}</p>
      </S.TextBlock>
    </S.Container>
  )
}

export default Comment
