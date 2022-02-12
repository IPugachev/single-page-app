import React, { useEffect, useLayoutEffect, useMemo, useState } from 'react'
import styled, { keyframes } from 'styled-components'
import { ReactComponent as Arrow } from '../../../assets/icons/arrow-down.svg'
import { ReactComponent as IncBtn } from '../../../assets/icons/inc-btn.svg'
import { ReactComponent as DecBtn } from '../../../assets/icons/dec-btn.svg'
import Flex from '../../../styles/Flex'

const StyledDropdown = styled.ul`
  width: 320px;
  height: 44px;
`
const DropdownOption = styled.li`
  width: 320px;
  height: 44px;
  padding: 0 7px 0 15px;
  font-size: 12px;
  line-height: 15px;
  color: ${(props) => props.theme.colors.primary};
  font-weight: 700;
  font-style: normal;
  background-color: white;
  ${'' /* display: ${({ display }) => display || 'none'}; */}
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid rgba(31, 32, 65, 0.25);
  border-top-style: none;
  border-bottom-style: none;
  ${'' /* animation: ${appear} 0.25s linear; */}
  box-shadow: 0px 10px 20px 0px #1f20410d;

  &:not(:first-child) {
    opacity: ${(props) => (props.visible ? 1 : 0)};
    transition: opacity 0.2s linear;
    pointer-events: ${(props) => (props.visible ? 'auto' : 'none')};
  }

  &:first-child {
    display: flex;
    border: 1px solid rgba(31, 32, 65, 0.25);
    border-radius: 2px 2px 0 0;
    animation: none;
    padding: 0 0 0 15px;
    font-size: 14px;
    line-height: 18px;
    color: rgba(31, 32, 65, 0.75);
    font-weight: 400;
    box-shadow: none;
  }
  &:last-child {
    border: 1px solid rgba(31, 32, 65, 0.25);
    border-top-style: none;
    border-radius: 0 0 2px 2px;
  }
`

const StyledDecBtn = styled(DecBtn)`
  opacity: ${({ opacity }) => opacity || '0.2'};
  width: 30px;
  height: 30px;
  cursor: pointer;
`
const SubmitClearBtn = styled.span`
  color: ${(props) => props.theme.colors.secondary};
  cursor: pointer;
`
//входные данные = массив [{name:string,counter:0}]
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
    toggleVisible()
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
    } else if (arr[2] !== 0 && (arr[0] !== 0 || arr[1] !== 0)) {
      setDropdownValue(`${arr[0] + arr[1]} ${t}, ${arr[2]} ${m}`)
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
    <StyledDropdown>
      <DropdownOption onClick={toggleVisible}>
        {dropdownValue}
        <Arrow style={{ cursor: 'pointer' }} />
      </DropdownOption>

      {dropdownValues.map((o, index) => (
        <DropdownOption key={index} value={o.title} visible={visibale}>
          <Flex>{o.title.toUpperCase()}</Flex>
          <Flex justify='space-between' align='center' style={{ width: '92px', userSelect: 'none' }}>
            <StyledDecBtn opacity={dropdownCount[index] > 0 ? '1' : '0.2'} onClick={() => decCount(index)} />
            {dropdownCount[index]}
            <IncBtn onClick={() => incCount(index)} style={{ cursor: 'pointer' }} />
          </Flex>
        </DropdownOption>
      ))}

      <DropdownOption visible={visibale}>
        <SubmitClearBtn onClick={handleClear}>ОЧИСТИТЬ</SubmitClearBtn>
        <SubmitClearBtn onClick={handleSubmit}>ПРИМЕНИТЬ</SubmitClearBtn>
      </DropdownOption>
    </StyledDropdown>
  )
}

export default Dropdown
