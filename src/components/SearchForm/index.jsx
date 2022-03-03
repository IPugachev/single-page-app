import React from 'react'
import Button from '../UI/Button'
import Calendar from '../UI/Calendar'
import Dropdown from '../UI/Dropdown'
import * as S from './style.jsx'
import { useSelector } from 'react-redux'

const SearchForm = ({ title = 'Найдём номера под ваши пожелания' }) => {
  const updatingInitialValues = useSelector((state) => state.filter)
  return (
    <S.Form>
      <S.Title>{title}</S.Title>
      <Calendar
        filter={false}
        start={'прибытие'}
        end={'вызед'}
        initialValueEntryDate={updatingInitialValues.entryDate}
        initialValueEndDate={updatingInitialValues.endDate}
      />
      <Dropdown initialValues={updatingInitialValues.guests} type='guests' title='гости' margin='20px 0 0' />
      <S.ButtonLink to='/search'>
        <Button buttonStyle='long' text='подобрать номер' arrow={true} margin='30px 0 0 0' />
      </S.ButtonLink>
    </S.Form>
  )
}

export default SearchForm
