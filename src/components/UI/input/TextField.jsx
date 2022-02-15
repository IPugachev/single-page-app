import React from 'react'
import styled from 'styled-components'
import { ReactComponent as Arrow } from '../../../assets/icons/arrow-down.svg'

const StyledField = styled.input`
  width: 320px;
  height: 44px;
  color: rgba(31, 32, 65, 0.25);
  border: 1px solid rgba(31, 32, 65, 0.25);
  border-radius: 4px;
  padding: 13px 15px;
  font-size: 14px;
  line-height: 18px;
  &:focus {
    outline: none;
    color: rgba(31, 32, 65, 0.75);
    border: 1px solid rgba(31, 32, 65, 0.5);
  }
`
const StyledArrow = styled(Arrow)`
  position: absolute;
  right: 0;
  cursor: pointer;
`
const TextField = React.forwardRef((props, ref) => {
  const handleFocus = () => {
    props.onFocus()
  }
  const handleBlur = () => {}

  return (
    <div style={{ position: 'relative' }}>
      <StyledField {...props} ref={ref} onFocus={handleFocus} onBlur={handleBlur} />
      <StyledArrow onClick={props.onClick} />
    </div>
  )
})

export default TextField
