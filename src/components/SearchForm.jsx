import React, { useCallback, useState } from 'react'
import styled from 'styled-components'
import Button from './UI/button'
import Calendar from './UI/calendar'
import Dropdown from './UI/dropdown'

const SearchFormContainer = styled.div`
  width: 380px;
  box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.12);
`
const SearchFormBox = styled.div`
  margin: 40px 30px 30px;
  display: flex;
  justify-content: center;
  flex-direction: column;
`
const SearchFormTitle = styled.h3`
  font-weight: bold;
  font-size: 24px;
  line-height: 29px;
  color: #1f2041;
`

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
    <SearchFormContainer>
      <SearchFormBox>
        <SearchFormTitle>Найдём номера под ваши пожелания</SearchFormTitle>
        <Calendar filter={false} start={'прибытие'} end={'вызед'} />
        <Dropdown dropdownValues={optionsGuests} type='guests' onChange={onChangeGuests} title='dropdown' />
        {/* ИСПРАВИТЬ ОТСТУПЫ У КНОПКИ */}
        <Button type='long' text='подобрать номер' arrow={true} margin='30px 0 0 0' />
      </SearchFormBox>
    </SearchFormContainer>
  )
}

export default SearchForm
