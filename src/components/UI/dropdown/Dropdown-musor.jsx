import React from 'react'
import styled from 'styled-components'

const StyledSelect = styled.select`
  width: 320px;
  height: 44px;
  color: rgba(31, 32, 65, 0.75);
  border: 1px solid rgba(31, 32, 65, 0.25);
  border-radius: 4px;
  padding: 13px 15px;
  font-size: 14px;
  line-height: 24px;
  background-color: white;
  border-shadow: none;
`
const Dropdown = (props) => {
  return (
    <StyledSelect value={props.value} onChange={props.onChange}>
      <option disabled value=''>
        {props.defaultValue}
      </option>
      {props.options.map((options) => (
        <option key={options.value} value={options.value}>
          {options.value}
        </option>
      ))}
    </StyledSelect>
  )
}

export default Dropdown
