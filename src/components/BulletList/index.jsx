import React from 'react'
import * as S from './style'

const items = ['Нельзя с питомцами', 'Без вечеринок и мероприятий', 'Время прибытия — после 13:00, а выезд до 12:00']

const BulletList = ({ title = 'bullet list', margin }) => {
  return (
    <S.Container margin={margin}>
      <S.Title title={title}>{title}</S.Title>
      {items.map((item, index) => (
        <S.ItemBox key={index}>
          <S.Dot />
          <S.Item>{item}</S.Item>
        </S.ItemBox>
      ))}
    </S.Container>
  )
}

export default BulletList
