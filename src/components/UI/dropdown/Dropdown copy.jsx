import React, { useState, useRef, useEffect } from 'react'
import styled, { keyframes } from 'styled-components'
import { ReactComponent as Arrow } from '../../arrow-down.svg'

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
    border-radius: 2px 2px 0 0;
    animation: none;
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
const StyledArrow = styled(Arrow)`
  width: 44px;
  height: 44px;
`
function useOutsideClicker(ref, close) {
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        return close()
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [ref])
}

const Dropdownc = () => {
  const [actualValue, setActualValue] = useState('Сколько гостей')
  const [handleDropdawn, setHandleDropdawn] = useState('none')

  const setStatus = () => {
    handleDropdawn === 'none' ? setHandleDropdawn('flex') : setHandleDropdawn('none')
  }

  function close() {
    setHandleDropdawn('none')
  }

  function setDropdownValue(value) {
    setActualValue(value)
    return setStatus()
  }

  const wrapperRef = useRef(null)
  useOutsideClicker(wrapperRef, close)

  const options = [
    { value: '1', name: '1 гость' },
    { value: '2', name: '2 гостя' },
    { value: '3', name: '3 гостя' },
    { value: '4', name: '4 гостя' },
  ]

  return (
    <StyledDropdown ref={wrapperRef}>
      <DropdownOption onClick={setStatus}>
        {actualValue}
        <StyledArrow />
      </DropdownOption>
      {options.map((o) => (
        <DropdownOption key={o.value} value={o.name} display={handleDropdawn} onClick={() => setDropdownValue(o.name)}>
          {o.name}
        </DropdownOption>
      ))}
    </StyledDropdown>
  )
}

export default Dropdownc
