import styled, { css } from 'styled-components'
import { ReactComponent as ArrowBack } from '../../../assets/icons/arrow-back-pagination.svg'
import { ReactComponent as ArrowForward } from '../../../assets/icons/arrow-forward-pagination.svg'

export const PaginationContainer = styled.div`
  margin-top: 40px;
  width: fit-content;
`
export const PagesBox = styled.div`
  display: flex;
  justify-content: center;
`
export const Page = styled.div`
  width: 40px;
  height: 40px;
  font-size: 12px;
  line-height: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: rgba(31, 32, 65, 0.5);
  border-radius: 22px;
  cursor: pointer;
  ${(props) =>
    props.number !== -1
      ? css`
          &:hover {
            background-color: rgba(31, 32, 65, 0.1);
            transition: 0.2s;
          }
        `
      : 'cursor: default;'}
  ${(props) => (props.current + 3 <= props.number || props.current - 3 >= props.number) && 'display: none;'};
  ${(props) => (props.number === 0 || props.number === props.max) && 'display: flex;'}
  ${(props) =>
    ((props.current + 1 <= 3 && props.number <= 5) ||
      (props.current - 1 >= props.max - 3 && props.number >= props.max - 5)) &&
    'display: flex;'}
  ${(props) =>
    props.current === props.number &&
    css`
      background: linear-gradient(180deg, #bc9cff 0%, #8ba4f9 100%);
      color: #ffffff;
      font-weight: bold;
    `}
  
  user-select: none;
`
export const ArrBack = styled(ArrowBack)`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-radius: 22px;
  background: linear-gradient(180deg, #6fcf97 0%, #66d2ea 100%);
  cursor: pointer;
  ${(props) => props.current === 0 && 'opacity: 0; pointer-events: none;'};
`
export const ArrForward = styled(ArrowForward)`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-radius: 22px;
  background: linear-gradient(180deg, #6fcf97 0%, #66d2ea 100%);
  cursor: pointer;
  ${(props) => props.current === props.max && 'opacity: 0; pointer-events: none;'};
`
export const PaginationText = styled.div`
  font-size: 14px;
  line-height: 24px;
  color: rgba(31, 32, 65, 0.75);
  text-align: center;
`
