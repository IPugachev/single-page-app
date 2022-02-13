import React, { useState } from 'react'
import { ReactComponent as Arrow } from '../../../assets/icons/arrow-down.svg'
import { ReactComponent as IncBtn } from '../../../assets/icons/inc-btn.svg'
import Flex from '../../../styles/Flex'
import * as S from './style.jsx'

const Dropdown = ({ dropdownValues, setVal }) => {
  const [visibale, setVisible] = useState(false)
  const [dropdownCount, setDropdownCount] = useState([0, 0, 0])
  const [dropdownValue, setDropdownValue] = useState('Сколько гостей')

  const upDropdawn = (arr) => {
    setVal(
      dropdownValues.map((o, index) => {
        return { title: o.title, count: arr[index] }
      })
    )
  }

  const toggleVisible = () => {
    setVisible((prev) => !prev)
  }

  const handleClear = () => {
    setDropdownCount([0, 0, 0])
    setDropdownValue('Сколько гостей')
    upDropdawn([0, 0, 0])
  }

  const handleSubmit = () => {
    filterDropdown()
    upDropdawn(dropdownCount)
  }

  const filterDropdown = () => {
    let arr = dropdownCount
    let t = arr[1] + arr[0] > 4 ? 'гостей' : arr[1] + arr[0] === 1 ? 'гость' : 'гостя'
    let m = arr[2] > 4 ? 'младенцев' : arr[2] === 1 ? 'младенец' : 'младенца'

    if (arr[2] === 0 && (arr[0] !== 0 || arr[1] !== 0)) {
      setDropdownValue(`${arr[0] + arr[1]} ${t}`)
    } else if (arr[2] !== 0) {
      setDropdownValue(`${arr[0] + arr[1] !== 0 ? arr[0] + arr[1] + ' ' + t + ',' : ''} ${arr[2]} ${m}`)
    } else {
      setDropdownValue('Сколько гостей')
    }
    toggleVisible()
  }

  let arr = dropdownCount.slice()
  const decCount = (index) => {
    arr[index] > 0 && arr[index]--
    setDropdownCount(arr)
  }
  const incCount = (index) => {
    arr[index]++
    setDropdownCount(arr)
  }

  return (
    <S.StyledDropdown>
      <S.DtopdownHeadOption>
        {dropdownValue}
        <Arrow style={{ cursor: 'pointer' }} onClick={toggleVisible} />
      </S.DtopdownHeadOption>
      <S.OptionsBox visible={visibale}>
        {dropdownValues.map((o, index) => (
          <S.DropdownOption key={index} value={o.title}>
            <Flex>{o.title.toUpperCase()}</Flex>
            <Flex justify='space-between' align='center' style={{ width: '92px', userSelect: 'none' }}>
              <S.StyledDecBtn opacity={dropdownCount[index] > 0 ? '1' : '0.2'} onClick={() => decCount(index)} />
              {dropdownCount[index]}
              <IncBtn onClick={() => incCount(index)} style={{ cursor: 'pointer' }} />
            </Flex>
          </S.DropdownOption>
        ))}
        <S.DropdownOption>
          <S.SubmitClearBtn visible={dropdownCount.every((e) => e === 0)} onClick={handleClear}>
            ОЧИСТИТЬ
          </S.SubmitClearBtn>
          <S.SubmitBtn onClick={handleSubmit}>ПРИМЕНИТЬ</S.SubmitBtn>
        </S.DropdownOption>
      </S.OptionsBox>
    </S.StyledDropdown>
  )
}

export default Dropdown
