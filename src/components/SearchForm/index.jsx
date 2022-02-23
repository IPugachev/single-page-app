import React, { useCallback, useState } from 'react'
import Button from '../UI/Button'
import Calendar from '../UI/Calendar'
import Dropdown from '../UI/Dropdown'
import * as S from './style.jsx'

const SearchForm = () => {
  const [optionsGuests, setOptionsGuests] = useState([
    { title: 'взрослые', count: 0 },
    { title: 'дети', count: 0 },
    { title: 'младенцы', count: 0 },
  ])
  const onChangeGuests = useCallback((value) => {
    setOptionsGuests(value)
  }, [])
  return (
    <S.Container>
      <S.Box>
        <S.Title>
          <p>Найдём номера под ваши пожелания</p>
        </S.Title>
        <Calendar filter={false} start={'прибытие'} end={'вызед'} />
        <Dropdown dropdownValues={optionsGuests} type='guests' onChange={onChangeGuests} title='dropdown' />
        <Button type='long' text='подобрать номер' arrow={true} margin='30px 0 0 0' />
      </S.Box>
    </S.Container>
  )
}

export default SearchForm
