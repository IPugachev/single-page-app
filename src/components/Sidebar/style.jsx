import styled from 'styled-components'

export const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  width: 266px;
  & > p {
    font-size: 12px;
    line-height: 14px;
    color: ${({ theme }) => theme.colors.darkShade50};
    margin-top: 14px;
  }
`
