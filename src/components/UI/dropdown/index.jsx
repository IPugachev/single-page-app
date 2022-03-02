import React, { useRef, useState } from 'react'
import Flex from '../../../styles/Flex'
import * as S from './style.jsx'
import { getTitleDropdownByCount } from './utils'
import { useClickOutside } from '../../../hooks/useClickOutside'
import { useDispatch } from 'react-redux'
import { changeDropdownValues } from '../../../store/filter/action'

const Dropdown = ({ type, title, margin, initialValues }) => {
  const [dropdownValue, setDropdownValue] = useState(getTitleDropdownByCount(initialValues, type))
  const [visible, setVisible] = useState(false)
  // console.log(initialValues)
  const [visibleValue, setVisibleValue] = useState(initialValues)

  const clickRef = useRef()
  useClickOutside(clickRef, () => setVisible(false))

  const dispatch = useDispatch()

  const toggleVisible = () => {
    setVisible((prev) => !prev)
  }

  const handleClear = () => {
    const actualValues = visibleValue.map((value) => ({ ...value, count: 0 }))
    dispatch(changeDropdownValues(type, actualValues))
    setVisibleValue(actualValues)
    setDropdownValue(getTitleDropdownByCount(actualValues, type))
  }

  const handleSubmit = () => {
    setDropdownValue(getTitleDropdownByCount(visibleValue, type))
    dispatch(changeDropdownValues(type, visibleValue))
    toggleVisible()
  }

  const decCount = (index) => {
    const actualValues = visibleValue.map((item, i) =>
      index === i && item.count > 0 ? { ...item, count: --item.count } : item
    )
    setVisibleValue(actualValues)
    type === 'rooms' && setDropdownValue(getTitleDropdownByCount(actualValues, type))
    type === 'rooms' && dispatch(changeDropdownValues(type, actualValues))
  }
  const incCount = (index) => {
    const actualValues = visibleValue.map((item, i) => (index === i ? { ...item, count: ++item.count } : item))
    setVisibleValue(actualValues)
    type === 'rooms' && setDropdownValue(getTitleDropdownByCount(actualValues, type))
    type === 'rooms' && dispatch(changeDropdownValues(type, actualValues))
  }
  const handleValue = visibleValue.map((val) => val.count).every((e) => e === 0)

  return (
    <S.Dropdown type={type} ref={clickRef} margin={margin}>
      <S.Title>{title}</S.Title>
      <S.DtopdownHeadOption visible={visible}>
        <span>{dropdownValue}</span>
        <S.Arrow onClick={toggleVisible} />
      </S.DtopdownHeadOption>
      <S.OptionsBox visible={visible}>
        {visibleValue.map((option, index) => (
          <S.DropdownOption key={index} value={option.title}>
            <Flex>{option.title.toUpperCase()}</Flex>
            <Flex justify='space-between' align='center' style={{ width: '92px', userSelect: 'none' }}>
              <S.DecrBtn opacity={option.count > 0 ? '1' : '0.2'} onClick={() => decCount(index)} />
              {option.count}
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
