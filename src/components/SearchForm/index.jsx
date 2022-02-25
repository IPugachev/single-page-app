import React, { useCallback, useState } from 'react'
import Button from '../UI/Button'
import Calendar from '../UI/Calendar'
import Dropdown from '../UI/Dropdown'
import * as S from './style.jsx'

const SearchForm = ({ title = 'Найдём номера под ваши пожелания' }) => {
  const [optionsGuests, setOptionsGuests] = useState([
    { title: 'взрослые', count: 0 },
    { title: 'дети', count: 0 },
    { title: 'младенцы', count: 0 },
  ])
  const onChangeGuests = useCallback((value) => {
    setOptionsGuests(value)
  }, [])
  return (
    <S.Form>
      <S.Title>{title}</S.Title>
      <Calendar filter={false} start={'прибытие'} end={'вызед'} />
      <Dropdown
        dropdownValues={optionsGuests}
        type='guests'
        onChange={onChangeGuests}
        title='гости'
        margin='20px 0 0'
      />
      <Button type='long' text='подобрать номер' arrow={true} margin='30px 0 0 0' />
    </S.Form>
  )
}

export default SearchForm
