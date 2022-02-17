import React, { useRef, useState } from 'react'
import Flex from '../../../styles/Flex'
import * as S from './style.jsx'
import { getTitleDropdownByCount } from '../../../utils/Dropdown.js'
import { useClickOutside } from '../../hooks/useClickOutside'

const Dropdown = ({ dropdownValues, onChange, type, title }) => {
  const [visibale, setVisible] = useState(false)
  const [dropdownValue, setDropdownValue] = useState(type === 'guests' ? 'Сколько гостей' : '2 спальни, 2 кровати')

  const clickRef = useRef()

  useClickOutside(clickRef, () => setVisible(false))

  const toggleVisible = () => {
    setVisible((prev) => !prev)
  }

  const handleClear = () => {
    onChange(dropdownValues.map((item) => ({ ...item, count: 0 })))
    setDropdownValue('Сколько гостей')
  }

  const handleSubmit = () => {
    setDropdownValue(getTitleDropdownByCount(dropdownValues, type))
    toggleVisible()
  }

  const decCount = (index) => {
    const values = dropdownValues.map((item, i) =>
      index === i && item.count > 0 ? { ...item, count: --item.count } : item
    )
    onChange(values)
    type === 'rooms' && setDropdownValue(getTitleDropdownByCount(values))
  }
  const incCount = (index) => {
    const values = dropdownValues.map((item, i) => (index === i ? { ...item, count: ++item.count } : item))
    onChange(values)
    type === 'rooms' && setDropdownValue(getTitleDropdownByCount(values))
  }
  const handleValue = dropdownValues.map((val) => val.count).every((e) => e === 0)

  return (
    <S.Dropdown type={type} ref={clickRef}>
      <S.Title>{title}</S.Title>
      <S.DtopdownHeadOption visible={visibale}>
        {dropdownValue}
        <S.Arrow onClick={toggleVisible} />
      </S.DtopdownHeadOption>
      <S.OptionsBox visible={visibale}>
        {dropdownValues.map((o, index) => (
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
