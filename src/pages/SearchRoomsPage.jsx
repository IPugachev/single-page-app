import React, { useCallback, useState } from 'react'
import styled from 'styled-components'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Calendar from '../components/UI/Calendar'
import Dropdown from '../components/UI/Dropdown'
import Slider from '../components/UI/Slider'
import DefaultCheckbox from '../components/UI/Checkbox/Default'
import RichCheckbox from '../components/UI/Checkbox/Rich'

const Body = styled.div`
  max-width: 100vw;
  min-width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Main = styled.div`
  width: 100%;
  padding: 30px 140px 70px;
  display: flex;
`
const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  width: 266px;
  & > p {
    font-size: 12px;
    line-height: 14px;
    color: ${({ theme }) => theme.colors.darkShade50};
    margin-top: 14px;
  }
`

const SearchRoomsPage = () => {
  return (
    <Body>
      <Header />
      <Main>
        <Sidebar>
          <Calendar date='filter' start={'даты пребывания в отеле'} />
          <Dropdown type='guests' title='гости' margin='20px 0 30px' />
          <Slider title='диапазон цены' />
          <p>Стоимость за сутки пребывания в номере</p>
          <DefaultCheckbox title='правила дома' margin='30px 0' />
          <RichCheckbox title='доступность' />
          <Dropdown type='rooms' title='удобства номера' margin='30px 0' />
          <DefaultCheckbox title='дополнительные удобства' type='list' />
        </Sidebar>
        <div></div>
      </Main>
      <Footer />
    </Body>
  )
}

export default SearchRoomsPage
