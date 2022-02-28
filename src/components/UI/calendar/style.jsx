import styled from 'styled-components'
import { ReactComponent as ArrowBack } from '../../../assets/icons/arrow-back.svg'
import { ReactComponent as ArrowForward } from '../../../assets/icons/arrow-forward.svg'

export const CalendarBox = styled.div`
  display: flex;
  flex-direction: column;
  /* width: 320px; */
  position: relative;
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
  white-space: nowrap;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${({ theme }) => theme.colors.darkShade100};
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
  top: 70px;
  width: 100%;
  border-radius: 4px;
  border: 1px solid rgba(31, 32, 65, 0.25);
  font-weight: 400;
  line-height: 15px;
  color: ${({ theme }) => theme.colors.purple};
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  transition: opacity 0.2s linear;
  pointer-events: ${({ visible }) => (visible ? 'auto' : 'none')};
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
    color: ${({ theme }) => theme.colors.darkShade25};
  }
  &.selected {
    background: ${({ theme }) => theme.background.purple};
    font-weight: 700;
    color: #ffffff;
  }
  &.default {
    background: ${({ theme }) => theme.background.green};
    color: #ffffff;
    font-weight: 700;
  }
`
export const CellBgackground = styled.div`
  flex-grow: 1;
  flex-basis: 0;
  overflow: hidden;
  &.selected {
    background: ${({ theme }) => theme.background.purpleBackground};
  }
  &.selected-start {
    border-top-left-radius: 22px;
    border-bottom-left-radius: 22px;
    background: ${({ theme }) => theme.background.purpleBackground};
  }
  &.selected-end {
    border-top-right-radius: 22px;
    border-bottom-right-radius: 22px;
    background: ${({ theme }) => theme.background.purpleBackground};
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
