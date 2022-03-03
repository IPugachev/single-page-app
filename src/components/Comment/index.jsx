import React from 'react'
import LikeButton from '../UI/LikeButton'
import avatar1 from '../../assets/avatars/avatar1.jpg'
import avatar2 from '../../assets/avatars/avatar2.jpg'
import * as S from './style'

const commentInfo = [
  {
    name: 'Геннадий Цаль',
    date: '6 дней назад назад',
    avatar: avatar1,
  },
  {
    name: 'Патрисия Стёклышкова',
    date: 'Месяц назад',
    avatar: avatar2,
  },
]

const commentText = [
  'Великолепный матрас на кровати в основной спальне! А пуфик вообще потрясающий. И стены, действительно, шумоподавляющие. Выкрикивал комплименты повару — никто не жаловался из соседей.',
  'Обслуживание на высоте! Всё аккуратно, чисто. Завтраки в номер советую заказать, каждый день новое блюдо и десерт как комплимент',
]

const Comment = ({ index }) => {
  return (
    <S.Container>
      <S.UserBox>
        <S.UserImage src={commentInfo[index].avatar} alt='avatar' />
        <LikeButton />
      </S.UserBox>
      <S.TextBlock>
        <S.UserStatus>
          <p>{commentInfo[index].name}</p>
          <p>{commentInfo[index].date}</p>
        </S.UserStatus>
        <p>{commentText[index]}</p>
      </S.TextBlock>
    </S.Container>
  )
}

export default Comment
