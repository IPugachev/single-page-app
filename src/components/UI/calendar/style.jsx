import styled from 'styled-components'
import { ReactComponent as ArrowBack } from '../../../assets/icons/arrow-back.svg'
import { ReactComponent as ArrowForward } from '../../../assets/icons/arrow-forward.svg'

export const CalendarBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 320px;
`
export const Col = styled.div`
  display: flex;
`
export const Days = styled.div`
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  justify-content: space-around;
  display: flex;
`
export const Row = styled.div`
  font-weight: bold;
  font-size: 19px;
  padding-bottom: 42.5px;
  line-height: 23px;
  color: #1f2041;
  white-space: nowrap;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #1f2041;
`
export const ArrowB = styled(ArrowBack)`
  cursor: pointer;
`
export const ArrowF = styled(ArrowForward)`
  cursor: pointer;
`
export const Wrapper = styled.div`
  margin: 20px;
  user-select: none;
`
export const Calendar = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  border-radius: 4px;
  border: 1px solid rgba(31, 32, 65, 0.25);
  font-weight: 400;
  line-height: 15px;
  color: #bc9cff;
  opacity: ${(props) => (props.visible ? 1 : 0)};
  transition: opacity 0.2s linear;
  pointer-events: ${(props) => (props.visible ? 'auto' : 'none')};
  box-shadow: 0px 10px 20px 0px #1f20410d;
  background-color: #ffffff;
  z-index: 10;
`
export const Cell = styled.div`
  height: 40px;
  cursor: pointer;
  border-radius: 22px;
  display: flex;
  justify-content: center;
  align-items: center;
  &.disabled {
    color: rgba(31, 32, 65, 0.25);
  }
  &.selected {
    background: linear-gradient(180deg, #bc9cff 0%, #8ba4f9 100%);
    font-weight: 700;
    color: #ffffff;
  }
  &.default {
    background: linear-gradient(180deg, #6fcf97 0%, #66d2ea 100%);
    color: #ffffff;
    font-weight: 700;
  }
`
export const CellBg = styled.div`
  flex-grow: 1;
  flex-basis: 0;
  overflow: hidden;
  &.selected {
    background: linear-gradient(180deg, rgb(188, 156, 255, 0.25) 0%, rgb(139, 164, 249, 0.25) 100%);
  }
  &.selected-start {
    border-top-left-radius: 22px;
    border-bottom-left-radius: 22px;
    background: linear-gradient(180deg, rgb(188, 156, 255, 0.25) 0%, rgb(139, 164, 249, 0.25) 100%);
  }
  &.selected-end {
    border-top-right-radius: 22px;
    border-bottom-right-radius: 22px;
    background: linear-gradient(180deg, rgb(188, 156, 255, 0.25) 0%, rgb(139, 164, 249, 0.25) 100%);
  }
  &.unable {
    pointer-events: none;
  }
`
export const Number = styled.div`
  font-size: 12px;
  line-height: 15px;
`
export const RowCells = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
`
export const Btn = styled.span`
  cursor: pointer;
  font-size: 12px;
  font-weight: 700;
`
