import React from 'react'
import styled from 'styled-components'

const StyledDropdown = styled.div`
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
const Dropdown = () => {
  return <StyledDropdown />
}

export default Dropdown
