import React from 'react'
import styled, { keyframes } from 'styled-components'
import { ReactComponent as Arrow } from '../../arrow-down.svg'
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
  color: rgba(31, 32, 65, 0.75);
  font-size: 14px;
  line-height: 18px;
  list-style-type: none;
`
const DropdownOption = styled.li`
  width: 320px;
  height: 44px;
  padding-left: 15px;
  background-color: white;
  display: ${({ display }) => display || 'none'};
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  border: 1px solid rgba(31, 32, 65, 0.25);
  border-top-style: none;
  border-bottom-style: none;
  animation: ${appear} 0.25s linear;
  &:first-child {
    display: flex;
    border: 1px solid rgba(31, 32, 65, 0.25);
    border-radius: 4px;
    animation: none;
  }
  &:last-child {
    border: 1px solid rgba(31, 32, 65, 0.25);
    border-top-style: none;
  }
  &:hover {
    border: 1px solid rgba(31, 32, 65, 0.5);
  }
`
const StyledArrow = styled(Arrow)`
  width: 44px;
  height: 44px;
`

const Dropdown = (props) => {
  return (
    <StyledDropdown>
      <DropdownOption onClick={props.onClick}>
        <span>Сколько гостей</span>
        <StyledArrow />
      </DropdownOption>
      {props.options.map((o) => (
        <DropdownOption key={o.value} value={o.value} {...props} onClick={props.onClick}>
          {o.name}
        </DropdownOption>
      ))}
    </StyledDropdown>
  )
}

export default Dropdown
