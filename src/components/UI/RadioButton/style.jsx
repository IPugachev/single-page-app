import styled from 'styled-components'
import RadioBtn from '../../../assets/icons/radio-checked.svg'

export const Radio = styled.div`
  position: relative;
`
export const Title = styled.h4`
  font-size: 12px;
  line-height: 15px;
  color: ${({ theme }) => theme.colors.darkShade100};
  font-weight: 700;
  font-style: normal;
  text-transform: uppercase;
  margin-bottom: 16px;
  display: ${({ title }) => !title && 'none'};
`

export const Label = styled.label`
  margin-right: 20px;
  display: inline-flex;
  align-items: center;
  user-select: none;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.darkShade50};
  &::before {
    margin-right: 10px;
    content: '';
    display: inline-block;
    width: 20px;
    height: 20px;
    flex-shrink: 0;
    flex-grow: 0;
    box-sizing: border-box;
    border: 1px solid rgba(31, 32, 65, 0.25);
    border-radius: 10px;
    margin-right: 10px;
    background-repeat: no-repeat;
    background-position: center center;
  }
`
export const Input = styled.input`
  opacity: 0;
  top: 2px;
  width: 20px;
  height: 20px;
  position: absolute;
  cursor: pointer;
  &:checked + ${Label} {
    color: ${({ theme }) => theme.colors.darkShade75};
  }
  &:checked + ${Label}::before {
    border: 1px solid #bc9cff;
    background-image: url(${RadioBtn});
  }
`
