import styled, { css } from 'styled-components'
import { ReactComponent as ArrowBack } from '../../../assets/icons/arrow-back-pagination.svg'
import { ReactComponent as ArrowForward } from '../../../assets/icons/arrow-forward-pagination.svg'

export const PaginationContainer = styled.div`
  margin-top: 40px;
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
  ${(props) => (props.current + 2 <= props.number || props.current - 2 >= props.number) && 'display: none;'};
  ${(props) => (props.number === 0 || props.number === props.max) && 'display: flex;'}
  ${(props) =>
    props.current === props.number &&
    css`
      background: linear-gradient(180deg, #bc9cff 0%, #8ba4f9 100%);
      color: #ffffff;
      font-weight: bold;
    `}
  cursor: pointer;
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
`
export const PaginationText = styled.div`
  font-size: 14px;
  line-height: 24px;
  color: rgba(31, 32, 65, 0.75);
  text-align: center;
`
