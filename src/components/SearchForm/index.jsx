import React from 'react'
import Button from '../UI/Button'
import Calendar from '../UI/Calendar'
import Dropdown from '../UI/Dropdown'
import * as S from './style.jsx'
import { initialValues } from '../Sidebar/data'

const SearchForm = ({ title = 'Найдём номера под ваши пожелания' }) => {
  return (
    <S.Form>
      <S.Title>{title}</S.Title>
      <Calendar filter={false} start={'прибытие'} end={'вызед'} />
      <Dropdown initialValues={initialValues.guests} type='guests' title='гости' margin='20px 0 0' />
      <Button type='long' text='подобрать номер' arrow={true} margin='30px 0 0 0' />
    </S.Form>
  )
}

export default SearchForm
