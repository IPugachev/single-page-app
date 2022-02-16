import styled from 'styled-components'
import { ReactComponent as ArrowDown } from '../../../assets/icons/arrow-down.svg'

export const Input = styled.div`
  position: relative;
  width: ${(props) => props.width || '320px'};
`
export const Title = styled.div`
  font-size: 12px;
  line-height: 15px;
  color: #1f2041;
  font-weight: 700;
  font-style: normal;
  text-transform: uppercase;
  margin-bottom: 5px;
`
export const Field = styled.input`
  width: inherit;
  height: 44px;
  color: ${(props) => (props.input === 'date' ? 'rgba(31, 32, 65, 0.75)' : 'rgba(31, 32, 65, 0.25)')};
  border: 1px solid rgba(31, 32, 65, 0.25);
  border-radius: 4px;
  padding: 13px 15px;
  font-size: 14px;
  line-height: 18px;
  pointer-events: none;
  &:focus {
    outline: none;
    color: rgba(31, 32, 65, 0.75);
    border: 1px solid rgba(31, 32, 65, 0.5);
  }
`
export const Arrow = styled(ArrowDown)`
  position: absolute;
  right: 0;
  top: 20px;
  cursor: pointer;
  display: ${(props) => (props.input !== 'date' ? 'none' : 'block')};
`
