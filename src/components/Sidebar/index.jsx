import React from 'react'
import * as S from './style'
import Calendar from '../UI/Calendar'
import Dropdown from '../UI/Dropdown'
import Slider from '../UI/Slider'
import DefaultCheckbox from '../UI/Checkbox/Default'
import RichCheckbox from '../UI/Checkbox/Rich'

const Sidebar = () => {
  return (
    <S.Sidebar>
      <Calendar date='filter' start={'даты пребывания в отеле'} />
      <Dropdown type='guests' title='гости' margin='20px 0 30px' />
      <Slider title='диапазон цены' />
      <p>Стоимость за сутки пребывания в номере</p>
      <DefaultCheckbox title='правила дома' margin='30px 0' />
      <RichCheckbox title='доступность' />
      <Dropdown type='rooms' title='удобства номера' margin='30px 0' />
      <DefaultCheckbox title='дополнительные удобства' type='list' />
    </S.Sidebar>
  )
}

export default Sidebar
