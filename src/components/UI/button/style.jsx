import styled, { css } from 'styled-components'
import { ReactComponent as ArrowForward } from '../../../assets/icons/arrow-forward-pagination.svg'

export const Btn = styled.div`
  background: ${(props) => (props.type === 'white' ? '#ffffff' : 'linear-gradient(180deg, #bc9cff 0%, #8ba4f9 100%)')};
  position: relative;
  border-radius: 22px;
  width: ${(props) => (props.type === 'long' ? '320px' : '99px')};
  height: ${(props) => (props.type === 'white' ? '40px' : '44px')};
  ${(props) => props.type === 'white' && 'width: 95px'};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: ${(props) => props.margin || '18px 0'};
  transition: 0.3s;
  cursor: pointer;
  ${(props) =>
    props.type !== 'white' &&
    css`
      &:hover {
        opacity: 0.5;
      }
    `}
  ${(props) =>
    props.type === 'white' &&
    css`
      &:hover::before {
        opacity: 0.5;
      }
      &::before {
        content: '';
        position: absolute;
        top: -2px;
        bottom: -2px;
        left: -2px;
        right: -2px;
        background: linear-gradient(180deg, #bc9cff 0%, #8ba4f9 100%);
        border-radius: 25px;
        z-index: -1;
        transition: 0.3s;
      }
    `}
`
export const BtnText = styled.div`
  font-size: 12px;
  line-height: 15px;
  text-transform: uppercase;
  ${(props) => props.type !== 'white' && 'color: #ffffff'};
  font-style: normal;
  font-weight: bold;

  ${(props) =>
    props.type === 'white' &&
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
