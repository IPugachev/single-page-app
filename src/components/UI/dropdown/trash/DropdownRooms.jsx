import React, { useState } from 'react'
import { ReactComponent as Arrow } from '../../../assets/icons/arrow-down.svg'
import { ReactComponent as IncBtn } from '../../../assets/icons/inc-btn.svg'
import Flex from '../../../styles/Flex'
import * as S from './style.jsx.js'

const Dropdown = ({ dropdownValues, onChange }) => {
  const [visibale, setVisible] = useState(false)
  const [dropdownValue, setDropdownValue] = useState('2 спальни, 2 кровати')

  const toggleVisible = () => {
    setVisible((prev) => !prev)
  }

  const handleChangeHeader = (values) => {
    let arr = values.map((item) => item.count)
    let r = arr[0] > 4 ? 'спальней' : arr[0] === 1 ? 'спальня' : 'спальни'
    let b = arr[1] > 4 ? 'кроватей' : arr[1] === 1 ? 'кровать' : 'кровати'
    let m = arr[2] > 4 ? 'ванных' : arr[2] === 1 ? 'ванная' : 'ванные'
    let z1 = arr[0] !== 0 ? ', ' : ''
    let z2 = arr[1] !== 0 ? ', ' : z1
    handleValue
      ? setDropdownValue('Какие удобства')
      : setDropdownValue(`
      ${arr[0] !== 0 ? arr[0] + ' ' + r : ''}${arr[1] !== 0 ? z1 + arr[1] + ' ' + b : ''}${
          arr[2] !== 0 ? z2 + arr[2] + ' ' + m : ''
        }
    `)
  }

  const decCount = (index) => {
    const values = dropdownValues.map((item, i) =>
      index === i && item.count > 0 ? { ...item, count: --item.count } : item
    )
    onChange(values)
    handleChangeHeader(values)
  }
  const incCount = (index) => {
    const values = dropdownValues.map((item, i) => (index === i ? { ...item, count: ++item.count } : item))
    onChange(values)
    handleChangeHeader(values)
  }
  const handleValue = dropdownValues.map((val) => val.count).every((e) => e === 0)
  return (
    <S.Dropdown>
      <S.DtopdownHeadOption>
        {dropdownValue}
        <Arrow style={{ cursor: 'pointer' }} onClick={toggleVisible} />
      </S.DtopdownHeadOption>
      <S.OptionsBox visible={visibale}>
        {dropdownValues.map((o, index) => (
          <S.DropdownOption key={index} value={o.title}>
            <Flex>{o.title.toUpperCase()}</Flex>
            <Flex justify='space-between' align='center' style={{ width: '92px', userSelect: 'none' }}>
              <S.DecrBtn opacity={o.count > 0 ? '1' : '0.2'} onClick={() => decCount(index)} />
              {o.count}
              <IncBtn onClick={() => incCount(index)} style={{ cursor: 'pointer' }} />
            </Flex>
          </S.DropdownOption>
        ))}
      </S.OptionsBox>
    </S.Dropdown>
  )
}

export default Dropdown
