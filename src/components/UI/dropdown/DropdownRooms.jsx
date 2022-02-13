import React, { useState } from 'react'
import { ReactComponent as Arrow } from '../../../assets/icons/arrow-down.svg'
import { ReactComponent as IncBtn } from '../../../assets/icons/inc-btn.svg'
import Flex from '../../../styles/Flex'
import * as S from './style.jsx'

const Dropdown = ({ dropdownValues, onChange }) => {
  const [visibale, setVisible] = useState(false)
  // const [dropdownCount, setDropdownCount] = useState(dropdownValues.map((e) => e.count))
  const [dropdownValue, setDropdownValue] = useState('Сколько гостей')

  const toggleVisible = () => {
    setVisible((prev) => !prev)
  }

  // useEffect(() => {
  //   let arr = dropdownCount
  //   let t = arr[1] + arr[0] > 4 ? 'гостей' : arr[1] + arr[0] === 1 ? 'гость' : 'гостя'
  //   let m = arr[2] > 4 ? 'младенцев' : arr[2] === 1 ? 'младенец' : 'младенца'

  //   if (arr[2] === 0 && (arr[0] !== 0 || arr[1] !== 0)) {
  //     setDropdownValue(`${arr[0] + arr[1]} ${t}`)
  //   } else if (arr[2] !== 0) {
  //     setDropdownValue(`${arr[0] + arr[1] !== 0 ? arr[0] + arr[1] + ' ' + t + ',' : ''} ${arr[2]} ${m}`)
  //   } else {
  //     setDropdownValue('Сколько гостей')
  //   }
  //   const values = dropdownValues.map((o, index) => {
  //     return { title: o.title, count: arr[index] }
  //   })
  //   onChange(values)
  // }, [dropdownCount, onChange])

  const handleChangeHeader = (values) => {
    console.log(values)
    let arr = values.map((item) => item.count)
    let t = arr[1] + arr[0] > 4 ? 'гостей' : arr[1] + arr[0] === 1 ? 'гость' : 'гостя'
    let m = arr[2] > 4 ? 'младенцев' : arr[2] === 1 ? 'младенец' : 'младенца'

    if (arr[2] === 0 && (arr[0] !== 0 || arr[1] !== 0)) {
      setDropdownValue(`${arr[0] + arr[1]} ${t}`)
    } else if (arr[2] !== 0) {
      setDropdownValue(`${arr[0] + arr[1] !== 0 ? arr[0] + arr[1] + ' ' + t + ',' : ''} ${arr[2]} ${m}`)
    } else {
      setDropdownValue('Сколько гостей')
    }
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
              <S.StyledDecBtn opacity={o.count > 0 ? '1' : '0.2'} onClick={() => decCount(index)} />
              {o.count}
              <IncBtn onClick={() => incCount(index)} style={{ cursor: 'pointer' }} />
            </Flex>
          </S.DropdownOption>
        ))}
      </S.OptionsBox>
    </S.StyledDropdown>
  )
}

export default Dropdown
