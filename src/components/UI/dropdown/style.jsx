import styled from 'styled-components'
import { ReactComponent as DecBtn } from '../../../assets/icons/dec-btn.svg'

export const StyledDropdown = styled.div`
  width: 320px;
  height: 44px;
  box-sizing: border-box;
`
export const DtopdownHeadOption = styled.div`
  display: flex;
  border: 1px solid rgba(31, 32, 65, 0.25);
  border-radius: 2px 2px 0 0;
  padding: 0 0 0 15px;
  font-size: 14px;
  line-height: 18px;
  color: rgba(31, 32, 65, 0.75);
  font-weight: 400;
  justify-content: space-between;
  align-items: center;
  height: 44px;
`

export const OptionsBox = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0px 10px 20px 0px #1f20410d;
  opacity: ${(props) => (props.visible ? 1 : 0)};
  transition: opacity 0.2s linear;
  pointer-events: ${(props) => (props.visible ? 'auto' : 'none')};
  border: 1px solid rgba(31, 32, 65, 0.25);
  border-top-style: none;
  border-radius: 0 0 2px 2px;
`

export const DropdownOption = styled.div`
  height: 40px;
  padding: 0 7px 0 15px;
  font-size: 12px;
  line-height: 15px;
  color: ${(props) => props.theme.colors.primary};
  font-weight: 700;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  z-index: 1;
`

export const StyledDecBtn = styled(DecBtn)`
  opacity: ${({ opacity }) => opacity || '0.2'};
  width: 30px;
  height: 30px;
  cursor: pointer;
`
export const SubmitClearBtn = styled.span`
  color: ${(props) => props.theme.colors.secondary};
  pointer-events: ${(props) => (props.visible ? 'none' : 'auto')};
  opacity: ${(props) => (props.visible ? 0 : 1)};
  cursor: pointer;
  user-select: none;
`
export const SubmitBtn = styled.span`
  color: ${(props) => props.theme.colors.secondary};
  cursor: pointer;
  user-select: none;
`
