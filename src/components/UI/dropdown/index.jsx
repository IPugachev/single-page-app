import React, { useEffect, useRef, useState } from 'react'
import Flex from '../../../styles/Flex'
import * as S from './style.jsx'
import { getTitleDropdownByCount } from './utils'
import { useClickOutside } from '../../../hooks/useClickOutside'
import { useDispatch, useSelector } from 'react-redux'

const Dropdown = ({ type, title, margin }) => {
  const guests = useSelector((state) => state.dropdown.guests)
  const rooms = useSelector((state) => state.dropdown.rooms)
  const dispatch = useDispatch()
  const initialValue = type === 'guests' ? guests : rooms

  const reducer = (newValues) => {
    type === 'guests'
      ? dispatch({ type: 'CHANGE_GUESTS', update: newValues })
      : dispatch({ type: 'CHANGE_ROOMS', update: newValues })
  }

  const [visibale, setVisible] = useState(false)
  const [dropdownValue, setDropdownValue] = useState(type === 'guests' ? 'Сколько гостей' : '2 спальни, 2 кровати')

  const clickRef = useRef()

  useClickOutside(clickRef, () => setVisible(false))

  const toggleVisible = () => {
    setVisible((prev) => !prev)
  }

  const handleClear = () => {
    dispatch({ type: 'CHANGE_GUESTS', update: initialValue.map((item) => ({ ...item, count: 0 })) })
    setDropdownValue('Сколько гостей')
  }

  const handleSubmit = () => {
    setDropdownValue(getTitleDropdownByCount(initialValue, type))
    toggleVisible()
  }

  const decCount = (index) => {
    const values = initialValue.map((item, i) =>
      index === i && item.count > 0 ? { ...item, count: --item.count } : item
    )
    reducer(values)
    type === 'rooms' && setDropdownValue(getTitleDropdownByCount(values))
  }
  const incCount = (index) => {
    const values = initialValue.map((item, i) => (index === i ? { ...item, count: ++item.count } : item))
    reducer(values)
    type === 'rooms' && setDropdownValue(getTitleDropdownByCount(values))
  }
  const handleValue = initialValue.map((val) => val.count).every((e) => e === 0)

  return (
    <S.Dropdown type={type} ref={clickRef} margin={margin}>
      <S.Title>{title}</S.Title>
      <S.DtopdownHeadOption visible={visibale}>
        <span>{dropdownValue}</span>
        <S.Arrow onClick={toggleVisible} />
      </S.DtopdownHeadOption>
      <S.OptionsBox visible={visibale}>
        {initialValue.map((o, index) => (
          <S.DropdownOption key={index} value={o.title}>
            <Flex>{o.title.toUpperCase()}</Flex>
            <Flex justify='space-between' align='center' style={{ width: '92px', userSelect: 'none' }}>
              <S.DecrBtn opacity={o.count > 0 ? '1' : '0.2'} onClick={() => decCount(index)} />
              {o.count}
              <S.IncrBtn onClick={() => incCount(index)} />
            </Flex>
          </S.DropdownOption>
        ))}
        {type === 'guests' && (
          <S.DropdownOption>
            <S.SubmitClearBtn visible={handleValue} onClick={handleClear}>
              очистить
            </S.SubmitClearBtn>
            <S.SubmitBtn onClick={handleSubmit}>применить</S.SubmitBtn>
          </S.DropdownOption>
        )}
      </S.OptionsBox>
    </S.Dropdown>
  )
}

export default Dropdown
