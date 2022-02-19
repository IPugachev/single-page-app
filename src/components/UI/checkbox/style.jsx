import styled from 'styled-components'
import Check from '../../../assets/icons/check.svg'

export const Checkbox = styled.div`
  width: 256px;
  margin: 15px 0;
`
export const Title = styled.div`
  font-size: 12px;
  line-height: 15px;
  display: flex;
  justify-content: space-between;
  color: #1f2041;
  font-weight: 700;
  font-style: normal;
  text-transform: uppercase;
  margin-bottom: 16px;
  align-items: center;
  cursor: ${(props) => (props.type === 'list' ? 'pointer' : 'default')};
`

export const CheckboxContainer = styled.div`
  position: relative;
`
export const Wrapper = styled.div`
  position: ${(props) => (props.type === 'list' ? 'absolute' : 'static')};
  top: 0;
  opacity: ${(props) => (props.type === 'list' && !props.visible ? 0 : 1)};
  transition: opacity 0.2s linear;
  pointer-events: ${(props) => (props.type === 'list' && !props.visible ? 'none' : 'auto')};
  background-color: white;
  z-index: 1;
`
export const Label = styled.label`
  font-size: 14px;
  width: 225px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  color: rgba(31, 32, 65, 0.5);
  display: inline-flex;
  align-items: flex-start;
  user-select: none;
  margin-bottom: 12px;
  overflow-wrap: break-word;
  cursor: pointer;
  &::before {
    margin-right: 10px;
    content: '';
    top: 0;
    width: 20px;
    height: 20px;
    flex-shrink: 0;
    flex-grow: 0;
    box-sizing: border-box;
    border: 1px solid rgba(31, 32, 65, 0.25);
    border-radius: 4px;
    margin-right: 10px;
    background-repeat: no-repeat;
    background-position: center;
  }
`
export const CheckHandler = styled(Check)``
export const Input = styled.input`
  z-index: -1;
  opacity: 0;
  width: 20px;
  height: 20px;
  position: absolute;
  &:checked + ${Label}::before {
    background-image: url(${Check});
    border: 1px solid rgba(188, 156, 255, 1);
  }
`
