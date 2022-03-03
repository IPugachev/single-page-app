import styled, { css } from 'styled-components'
import { ReactComponent as ArrowForward } from '../../../assets/icons/arrow-forward-pagination.svg'

export const Button = styled.button`
  background: ${({ buttonStyle, theme }) => (buttonStyle === 'white' ? '#ffffff' : theme.background.purple)};
  position: relative;
  border-radius: 22px;
  ${({ buttonStyle }) => (buttonStyle === 'long' ? 'width: 320px' : 'width: 99px')};
  ${({ width }) => 'width: ' + width || ''};
  height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: ${({ margin }) => margin || '0'};
  transition: 0.3s;
  text-decoration: none;
  border: none;
  cursor: pointer;
  &:hover {
    ${({ buttonStyle }) => (buttonStyle !== 'white' ? 'opacity:0.5' : 'border: 2px solid rgba(188, 156, 255, 0.5)')}
  }
  ${({ buttonStyle, theme }) => buttonStyle === 'white' && 'border: 2px solid ' + theme.colors.purple}
`
export const ButtonText = styled.p`
  font-size: 12px;
  line-height: 15px;
  text-transform: uppercase;
  ${({ buttonStyle }) => buttonStyle !== 'white' && 'color: #ffffff'};
  font-style: normal;
  font-weight: bold;

  ${({ buttonStyle }) =>
    buttonStyle === 'white' &&
    css`
      background: linear-gradient(180deg, #bc9cff 0%, #8ba4f9 100%);
      background-clip: text;
      -webkit-text-fill-color: transparent;
    `}
`
export const Arrow = styled(ArrowForward)`
  position: absolute;
  right: 0;
`
