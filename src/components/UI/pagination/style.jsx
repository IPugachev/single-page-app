import styled, { css } from 'styled-components'
import { ReactComponent as ArrowBack } from '../../../assets/icons/arrow-back-pagination.svg'
import { ReactComponent as ArrowForward } from '../../../assets/icons/arrow-forward-pagination.svg'

const Arrow = css`
  position: absolute;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-radius: 22px;
  cursor: pointer;
  background: ${({ theme }) => theme.background.green};
`

export const PaginationContainer = styled.div`
  margin-top: 40px;
  width: fit-content;
`
export const PagesBox = styled.div`
  position: relative;
  width: ${({ maxPages }) => 40 * (maxPages + 2)}px;
  display: flex;
  justify-content: center;
`
export const ArrowPageBack = styled(ArrowBack)`
  ${Arrow}
  left:0;
  top: 0;
  ${({ currentpage }) => currentpage === 0 && 'opacity: 0; pointer-events: none;'};
`
export const ArrowPageForward = styled(ArrowForward)`
  ${Arrow}
  right:0;
  top: 0;
  ${({ currentpage, totalpages }) => currentpage === totalpages && 'opacity: 0; pointer-events: none;'};
`
export const Pages = styled.div`
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
  color: ${({ theme }) => theme.colors.darkShade50};
  border-radius: 22px;
  cursor: pointer;
  ${({ pageNumber }) =>
    pageNumber !== -1
      ? css`
          &:hover {
            background-color: rgba(31, 32, 65, 0.1);
            transition: 0.2s;
          }
        `
      : 'cursor: default;'}
  ${({ currentpage, pageNumber }) =>
    (currentpage + 3 <= pageNumber || currentpage - 3 >= pageNumber) && 'display: none;'};
  ${({ pageNumber, totalpages }) => (pageNumber === 0 || pageNumber === totalpages) && 'display: flex;'}
  ${({ currentpage, pageNumber, totalpages }) =>
    ((currentpage + 1 <= 3 && pageNumber <= 5) ||
      (currentpage - 1 >= totalpages - 3 && pageNumber >= totalpages - 5)) &&
    'display: flex;'}
  ${({ currentpage, pageNumber }) =>
    currentpage === pageNumber &&
    css`
      background: ${({ theme }) => theme.background.purple};
      color: #ffffff;
      font-weight: bold;
    `}
  
  user-select: none;
`
export const PaginationText = styled.div`
  font-size: 14px;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.darkShade75};
  text-align: center;
`
