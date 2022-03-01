import React, { useRef, useState } from 'react'
import Flex from '../../../styles/Flex'
import * as S from './style.jsx'
import { getTitleDropdownByCount } from './utils'
import { useClickOutside } from '../../../hooks/useClickOutside'
import { useDispatch } from 'react-redux'
import { changeValues } from '../../../store/filter/action'

const Dropdown = ({ type, title, margin, initialValues }) => {
  const [values, setValues] = useState(initialValues)
  const [visibale, setVisible] = useState(false)
  const [dropdownValue, setDropdownValue] = useState(type === 'guests' ? 'Сколько гостей' : '2 спальни, 2 кровати')

  const clickRef = useRef()
  useClickOutside(clickRef, () => setVisible(false))

  const dispatch = useDispatch()
  const reducer = (newValue) => {
    dispatch(changeValues(newValue.name, newValue.count))
  }

  const toggleVisible = () => {
    setVisible((prev) => !prev)
  }

  const handleClear = () => {
    let actualValues = values.map((value) => ({ ...value, count: 0 }))
    for (let val of actualValues) {
      dispatch(changeValues(val.name, val.count))
    }
    setValues(actualValues)
    setDropdownValue('Сколько гостей')
  }

  const handleSubmit = () => {
    setDropdownValue(getTitleDropdownByCount(values, type))
    toggleVisible()
  }

  const decCount = (index, option) => {
    const actualValues = values.map((item, i) =>
      index === i && item.count > 0 ? { ...item, count: --item.count } : item
    )
    setValues(actualValues)
    reducer(option)
    type === 'rooms' && setDropdownValue(getTitleDropdownByCount(values, type))
  }
  const incCount = (index, option) => {
    const actualValues = values.map((item, i) => (index === i ? { ...item, count: ++item.count } : item))
    setValues(actualValues)
    reducer(option)
    type === 'rooms' && setDropdownValue(getTitleDropdownByCount(values))
  }
  const handleValue = values.map((val) => val.count).every((e) => e === 0)

  return (
    <S.Dropdown type={type} ref={clickRef} margin={margin}>
      <S.Title>{title}</S.Title>
      <S.DtopdownHeadOption visible={visibale}>
        <span>{dropdownValue}</span>
        <S.Arrow onClick={toggleVisible} />
      </S.DtopdownHeadOption>
      <S.OptionsBox visible={visibale}>
        {values.map((option, index) => (
          <S.DropdownOption key={index} value={option.title}>
            <Flex>{option.title.toUpperCase()}</Flex>
            <Flex justify='space-between' align='center' style={{ width: '92px', userSelect: 'none' }}>
              <S.DecrBtn opacity={option.count > 0 ? '1' : '0.2'} onClick={() => decCount(index, option)} />
              {option.count}
              <S.IncrBtn onClick={() => incCount(index, option)} />
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
