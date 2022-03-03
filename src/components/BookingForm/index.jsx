import React from 'react'
import Calendar from '../UI/Calendar'
import Dropdown from '../UI/Dropdown'
import Button from '../UI/Button'
import { ReactComponent as Info } from '../../assets/icons/info.svg'
import { splitNumbers } from '../utils/splitNumbers'
import * as S from './style'

const BookingForm = ({ initialValues }) => {
  const luxury = initialValues.isLuxury !== undefined ? initialValues.isLuxury : true
  const number = initialValues.roomNumber
  const price = initialValues.price !== undefined ? initialValues.price : 9999
  const days = initialValues.endDate !== null ? (initialValues.endDate - initialValues.entryDate) / 86400000 : 1

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
      <Button buttonStyle='long' text='забронировать' arrow={true} />
    </S.Form>
  )
}

export default BookingForm
