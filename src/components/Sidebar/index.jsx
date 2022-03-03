import React from 'react'
import * as S from './style'
import Calendar from '../UI/Calendar'
import Dropdown from '../UI/Dropdown'
import Slider from '../UI/Slider'
import DefaultCheckbox from '../UI/Checkbox/Default'
import RichCheckbox from '../UI/Checkbox/Rich'
import { initialValues } from './data'
import { useSelector } from 'react-redux'
const Sidebar = () => {
  const updatingInitialValues = useSelector((state) => state.filter)
  return (
    <S.Sidebar>
      <Calendar
        date='filter'
        start={'даты пребывания в отеле'}
        initialValueEntryDate={updatingInitialValues.entryDate}
        initialValueEndDate={updatingInitialValues.endDate}
      />
      <Dropdown type='guests' title='гости' margin='20px 0 30px' initialValues={updatingInitialValues.guests} />
      <Slider title='диапазон цены' initialMin={initialValues.slider[0]} initialMax={initialValues.slider[1]} />
      <p>Стоимость за сутки пребывания в номере</p>
      <DefaultCheckbox title='правила дома' margin='30px 0' initialValues={initialValues.default} />
      <RichCheckbox title='доступность' initialValues={initialValues.rich} />
      <Dropdown type='rooms' title='удобства номера' margin='30px 0' initialValues={updatingInitialValues.rooms} />
      <DefaultCheckbox title='дополнительные удобства' type='list' initialValues={initialValues.list} />
    </S.Sidebar>
  )
}

export default Sidebar
