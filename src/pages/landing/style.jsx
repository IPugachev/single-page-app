import styled from 'styled-components'

export const Body = styled.div`
  max-width: 100vw;
  min-width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const Search = styled.div`
  position: absolute;
  top: 70px;
  left: 140px;
`
export const Main = styled.div`
  position: relative;
  width: 100%;
`
export const BackgroundImg = styled.img`
  width: 100%;
  object-fit: cover;
`
export const MainSubtitle = styled.p`
  position: absolute;
  font-size: 14px;
  line-height: 24px;
  text-align: right;
  color: ${({ theme }) => theme.colors.darkShade75};
  width: 266px;
  bottom: 70px;
  right: 140px;
`
