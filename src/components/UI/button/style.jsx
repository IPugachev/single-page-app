import styled, { css } from 'styled-components'
import { ReactComponent as ArrowForward } from '../../../assets/icons/arrow-forward-pagination.svg'

export const Button = styled.a`
  background: ${({ type, theme }) => (type === 'white' ? '#ffffff' : theme.background.purple)};
  position: relative;
  border-radius: 22px;
  ${({ type }) => (type === 'long' ? 'width: 320px' : 'width: 99px')};
  ${({ width }) => 'width: ' + width || ''};
  height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: ${({ margin }) => margin || '0'};
  transition: 0.3s;
  border: none;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    ${({ type }) => (type !== 'white' ? 'opacity:0.5' : 'border: 3px solid rgba(188, 156, 255, 0.5)')}
  }

  ${({ type, theme }) => type === 'white' && 'border: 3px solid ' + theme.colors.purple}
`
export const ButtonText = styled.p`
  font-size: 12px;
  line-height: 15px;
  text-transform: uppercase;
  ${({ type }) => type !== 'white' && 'color: #ffffff'};
  font-style: normal;
  font-weight: bold;

  ${({ type }) =>
    type === 'white' &&
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
