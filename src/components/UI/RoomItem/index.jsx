import React from 'react'
import * as S from './style'
import Background from '../../../assets/backgrounds/room1.png'
import { splitNumbers } from '../../utils/splitNumbers'
import Rating from '../Rating'
import { useDispatch, useSelector } from 'react-redux'

const luxury = true
const number = 888
const price = 9990
const reviews = 123

const RoomCard = () => {
  return (
    <S.RoomCard>
      <S.BackgroundRoom src={Background} alt='Background' />
      <S.MainInfo>
        <S.Upper>
          <S.Title>
            <span>№ </span>
            {number}
            {luxury && <span> люкс</span>}
          </S.Title>
          <S.Subtitle>
            <span>{splitNumbers(price)}₽</span> в сутки
          </S.Subtitle>
        </S.Upper>
        <S.Lower>
          <Rating rating={4} />
          <S.Reviews>
            <span>{reviews}</span> Отзывов
          </S.Reviews>
        </S.Lower>
      </S.MainInfo>
    </S.RoomCard>
  )
}

export default RoomCard
