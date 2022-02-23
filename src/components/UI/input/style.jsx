import styled from 'styled-components'
import { ReactComponent as ArrowDown } from '../../../assets/icons/arrow-down.svg'
import ArrowForwardPath from '../../../assets/icons/arrow-forward-email.svg'

export const Input = styled.div`
  width: ${({ width }) => width || '320px'};
  margin: ${({ margin }) => margin || '0'};
`
export const Title = styled.div`
  font-size: 12px;
  line-height: 15px;
  color: ${({ theme }) => theme.colors.darkShade100};
  font-weight: 700;
  font-style: normal;
  text-transform: uppercase;
  margin-bottom: 5px;
  display: ${({ title }) => (title ? 'block' : 'none')};
`
export const Wrapper = styled.div`
  position: relative;
`

export const Field = styled.input`
  width: 100%;
  color: ${({ input, theme }) => (input === 'date' ? theme.colors.darkShade75 : theme.colors.darkShade25)};
  border: 1px solid rgba(31, 32, 65, 0.25);
  border-radius: 4px;
  padding: 12px 15px;
  font-size: 14px;
  line-height: 18px;
  pointer-events: ${({ input }) => (input === 'date' ? 'none' : 'auto')};
  &:focus {
    outline: none;
    color: ${({ theme }) => theme.colors.darkShade75};
    border: 1px solid rgba(31, 32, 65, 0.5);
  }
  &:hover {
    color: ${({ theme }) => theme.colors.darkShade75};
    border: 1px solid rgba(31, 32, 65, 0.5);
  }
  &::placeholder {
    opacity: 0.75;
  }
`
export const Arrow = styled(ArrowDown)`
  position: absolute;
  right: 0;
  top: 0;
  cursor: pointer;
  display: ${({ input }) => (input === 'date' ? 'block' : 'none')};
`
export const ArrowEmail = styled.div`
  position: absolute;
  width: 44px;
  height: 44px;
  right: 0;
  top: 0;
  background-image: url(${ArrowForwardPath});
  cursor: pointer;
  display: ${({ input }) => (input === 'email' ? 'block' : 'none')};
`
