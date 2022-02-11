import React, { useState } from 'react'
import styled, { keyframes } from 'styled-components'
import { ReactComponent as Arrow } from '../../../assets/arrow-down.svg'
import { ReactComponent as IncBtn } from '../../../assets/inc-btn.svg'
import { ReactComponent as DecBtn } from '../../../assets/dec-btn.svg'
import Flex from '../../Flex'

const appear = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`
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
  color: #1f2041;
  font-weight: 700;
  font-style: normal;
  background-color: white;
  display: ${({ display }) => display || 'none'};
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  border: 1px solid rgba(31, 32, 65, 0.25);
  border-top-style: none;
  border-bottom-style: none;
  animation: ${appear} 0.25s linear;
  user-select: none;
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
  }
  &:last-child {
    border: 1px solid rgba(31, 32, 65, 0.25);
    border-top-style: none;
    border-radius: 0 0 2px 2px;
  }
  &:hover {
    border: 1px solid rgba(31, 32, 65, 0.5);
  }
`

const StyledDecBtn = styled(DecBtn)`
  opacity: ${({ opacity }) => opacity || '0.2'};
  width: 30px;
  height: 30px;
`

const Dropdown = () => {
  const [actualValue, setActualValue] = useState('Сколько гостей')
  const [handleDropdawn, setHandleDropdawn] = useState('none')
  const [dropdownCount, setDropdownCount] = useState([0, 0, 0])

  const setStatus = () => {
    handleDropdawn === 'none' ? setHandleDropdawn('flex') : setHandleDropdawn('none')
  }
  let arr = dropdownCount.slice()
  const decCount = (index) => {
    arr[index] > 0 ? arr[index]-- : (arr[index] = 0)
    setDropdownCount(arr)
  }
  const incCount = (index) => {
    arr[index]++
    setDropdownCount(arr)
  }

  const options = [{ name: 'взрослые' }, { name: 'дети' }, { name: 'младенцы' }]
  return (
    <StyledDropdown>
      <DropdownOption onClick={setStatus}>
        {actualValue}
        <Arrow />
      </DropdownOption>
      {options.map((o, index) => (
        <DropdownOption key={index} value={o.name} display={handleDropdawn}>
          <Flex justify='space-between'>{o.name.toUpperCase()}</Flex>
          <Flex justify='space-between' align='center' style={{ width: '92px' }}>
            <StyledDecBtn opacity={dropdownCount[index] > 0 ? '1' : '0.2'} onClick={() => decCount(index)} />
            {dropdownCount[index]}
            <IncBtn onClick={() => incCount(index)} />
          </Flex>
        </DropdownOption>
      ))}
    </StyledDropdown>
  )
}

export default Dropdown
