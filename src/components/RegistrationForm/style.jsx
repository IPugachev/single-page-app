import styled from 'styled-components'

export const Container = styled.div`
  width: 380px;
  box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.12);
`
export const Box = styled.div`
  margin: 40px 30px 30px;
  display: flex;
  justify-content: center;
  flex-direction: column;
`
export const Title = styled.h3`
  font-weight: bold;
  font-size: 24px;
  line-height: 29px;
  color: ${({ theme }) => theme.colors.darkShade100};
`
export const Underline = styled.div`
  font-size: 14px;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.darkShade75};
`
