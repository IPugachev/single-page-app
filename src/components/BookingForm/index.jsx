import React from 'react'
import Calendar from '../UI/Calendar'
import Dropdown from '../UI/Dropdown'
import Button from '../UI/Button'
import { ReactComponent as Info } from '../../assets/icons/info.svg'
import { splitNumbers } from '../utils/splitNumbers'
import * as S from './style'
import { useDispatch, useSelector } from 'react-redux'
import { bookRoom } from '../../store/room/action'

const BookingForm = ({ currentRoom }) => {
  const initialValues = useSelector((state) => state.filter)
  const booked = useSelector((state) => state.room?.booked)
  const dispatch = useDispatch()
  const luxury = currentRoom.luxury
  const number = currentRoom.number
  const price = currentRoom.price
  const days = initialValues.endDate !== null ? (initialValues.endDate - initialValues.entryDate) / 86400000 : 1
  const getRoom = (event) => {
    dispatch(bookRoom())
    event.preventDefault()
    console.log(booked)
  }
  return (
    <S.Form>
      <S.HeaderSection>
        <S.Title>
          <span>№ </span>
          {number}
          {luxury && <span> люкс</span>}
        </S.Title>
        <S.Subtitle>
          <span>{splitNumbers(price)}₽</span> в сутки
        </S.Subtitle>
      </S.HeaderSection>
      <Calendar
        filter={false}
        start={'прибытие'}
        end={'вызед'}
        initialValueEntryDate={initialValues.entryDate}
        initialValueEndDate={initialValues.endDate}
      />
      <Dropdown initialValues={initialValues.guests} type='guests' title='гости' margin='20px 0' />
      <S.PriceInfo>
        <S.Item>
          <span>
            {splitNumbers(price)}₽ х {days} суток
          </span>
          <span>{splitNumbers(price * days)}₽</span>
        </S.Item>
        <S.Item>
          <span>
            Сбор за услуги:
            <Info style={{ marginLeft: '5px' }} />
          </span>
          <span>0₽</span>
        </S.Item>
        <S.Item>
          <span>
            Сбор за дополнительные услуги: <Info style={{ marginLeft: '5px' }} />
          </span>
          <span>0₽</span>
        </S.Item>
      </S.PriceInfo>
      <S.TotalPrice>
        <span>Итого</span>
        <S.Border />
        <span>{splitNumbers(price * days)}₽</span>
      </S.TotalPrice>
      {booked ? (
        <S.Success>Успешно!</S.Success>
      ) : (
        <Button buttonStyle='long' text='забронировать' hasArrow={true} onClick={getRoom} />
      )}
    </S.Form>
  )
}

export default BookingForm
