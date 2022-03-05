import styled from 'styled-components'

export const Form = styled.form`
  padding: 40px 30px 30px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 380px;
  box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.12);
`
export const Title = styled.h4`
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  color: ${({ theme }) => theme.colors.darkShade100};
`
export const Wrapper = styled.div`
  display: flex;
  width: fit-content;
`
export const Underline = styled.p`
  font-size: 14px;
  line-height: 18px;
  color: #000000;
`
