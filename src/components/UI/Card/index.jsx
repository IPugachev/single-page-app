import React from 'react'
import * as S from './style'
import { splitNumbers } from '../../utils/splitNumbers'
import Rating from '../Rating'

const RoomCard = ({ initialValues }) => {
  return (
    <S.RoomCard>
      <S.BackgroundRoom src={initialValues.imgUrl} alt='Background' />
      <S.MainInfo>
        <S.Upper>
          <S.Title>
            <span>№ </span>
            {initialValues.number}
            {initialValues.luxury && <span> люкс</span>}
          </S.Title>
          <S.Subtitle>
            <span>{splitNumbers(initialValues.price)}₽</span> в сутки
          </S.Subtitle>
        </S.Upper>
        <S.Lower>
          <Rating rating={initialValues.rating} />
          <S.Reviews>
            <span>{initialValues.reviews}</span> Отзывов
          </S.Reviews>
        </S.Lower>
      </S.MainInfo>
    </S.RoomCard>
  )
}

export default RoomCard
