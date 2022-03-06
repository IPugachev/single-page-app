import styled from 'styled-components'

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffffff;
  width: 100%;
  box-shadow: 0px 10px 20px rgba(31, 32, 65, 0.05);
`
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1440px;
  min-width: 1200px;
  width: 100%;
`

export const InfoBox = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 100px 140px;
`
export const UnderBox = styled.div`
  display: flex;
  justify-content: center;

  width: 100%;
  border-top: 1px solid rgba(31, 32, 65, 0.1);
  height: 70px;
  padding: 0 140px;
`
export const UnderBoxWrapper = styled(Wrapper)`
  flex-direction: row;
  justify-content: space-between;
`

export const FooterItem = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  max-width: 260px;
`
export const LogoElement = styled.div`
  display: flex;
  align-items: center;
`
export const FooterText = styled.p`
  font-size: 14px;
  line-height: 24px;
  margin: 20px 0;
  color: ${({ theme }) => theme.colors.darkShade75};
`
export const ItemTitle = styled.h3`
  font-weight: bold;
  font-size: 12px;
  line-height: 15px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.darkShade100};
`
export const ItemLink = styled.a`
  font-size: 12px;
  line-height: 17px;
  margin-top: 20px;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.darkShade50};
`
export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  & > * {
    margin-left: 20px;
  }
`
