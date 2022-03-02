import React from 'react'
import * as S from './style'

const BulletList = ({ title, margin, values }) => {
  return (
    <S.Container margin={margin}>
      <S.Title title={title}>{title}</S.Title>
      {values.map((item, index) => (
        <S.ItemBox key={index}>
          <S.Dot />
          <S.Item>{item}</S.Item>
        </S.ItemBox>
      ))}
    </S.Container>
  )
}

export default BulletList
