import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Form = styled.form`
  padding: 40px 30px 30px;
  display: flex;
  flex-direction: column;
  width: 380px;
  box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.12);
`
export const SuccessedRegistration = styled.form`
  padding: 40px 30px 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 380px;
  box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.12);
  & h4 {
    font-weight: 700;
    font-size: 14px;
    line-height: 24px;
    color: ${({ theme }) => theme.colors.darkShade100};
  }
`
export const ButtonLink = styled(Link)`
  text-decoration: none;
`
export const Title = styled.h4`
  font-weight: 700;
  margin-bottom: 20px;
  font-size: 24px;
  line-height: 29px;
  color: ${({ theme }) => theme.colors.darkShade100};
`
export const Underline = styled.div`
  font-size: 14px;
  line-height: 18px;
  color: #000000;
`
