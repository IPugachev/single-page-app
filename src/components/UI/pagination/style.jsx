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
  ${({ currentPage, pageNumber }) =>
    (currentPage + 3 <= pageNumber || currentPage - 3 >= pageNumber) && 'display: none;'};
  ${({ pageNumber, totalPages }) => (pageNumber === 0 || pageNumber === totalPages) && 'display: flex;'}
  ${({ currentPage, pageNumber, totalPages }) =>
    ((currentPage + 1 <= 3 && pageNumber <= 5) ||
      (currentPage - 1 >= totalPages - 3 && pageNumber >= totalPages - 5)) &&
    'display: flex;'}
  ${({ currentPage, pageNumber }) =>
    currentPage === pageNumber &&
    css`
      background: ${({ theme }) => theme.background.purple};
      color: #ffffff;
      font-weight: bold;
    `}
  
  user-select: none;
`
export const ArrowPageBack = styled(ArrowBack)`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-radius: 22px;
  background: ${({ theme }) => theme.background.green};
  cursor: pointer;
  ${({ currentPage }) => currentPage === 0 && 'opacity: 0; pointer-events: none;'};
`
export const ArrowPageForward = styled(ArrowForward)`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-radius: 22px;
  background: ${({ theme }) => theme.background.green};
  cursor: pointer;
  ${({ currentPage, totalPages }) => currentPage === totalPages && 'opacity: 0; pointer-events: none;'};
`
export const PaginationText = styled.div`
  font-size: 14px;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.darkShade75};
  text-align: center;
`
