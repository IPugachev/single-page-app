import { Link } from 'react-router-dom'
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
  font-weight: bold;
  font-size: 24px;
  line-height: 29px;
  font-style: normal;
  color: ${({ theme }) => theme.colors.darkShade100};
  margin-bottom: 20px;
`
export const ButtonLink = styled(Link)`
  text-decoration: none;
`
