import React from 'react'
import * as S from './style'
import Calendar from '../UI/Calendar'
import Dropdown from '../UI/Dropdown'
import Slider from '../UI/Slider'
import DefaultCheckbox from '../UI/Checkbox/Default'
import RichCheckbox from '../UI/Checkbox/Rich'
import { initialValues } from './data'

const Sidebar = () => {
  return (
    <S.Sidebar>
      <Calendar date='filter' start={'даты пребывания в отеле'} />
      <Dropdown type='guests' title='гости' margin='20px 0 30px' initialValues={initialValues.guests} />
      <Slider title='диапазон цены' initialMin={initialValues.slider[0]} initialMax={initialValues.slider[1]} />
      <p>Стоимость за сутки пребывания в номере</p>
      <DefaultCheckbox title='правила дома' margin='30px 0' initialValues={initialValues.default} />
      <RichCheckbox title='доступность' initialValues={initialValues.rich} />
      <Dropdown type='rooms' title='удобства номера' margin='30px 0' initialValues={initialValues.rooms} />
      <DefaultCheckbox title='дополнительные удобства' type='list' initialValues={initialValues.list} />
    </S.Sidebar>
  )
}

export default Sidebar
