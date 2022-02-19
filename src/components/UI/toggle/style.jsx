import styled from 'styled-components'

export const Toggle = styled.form`
  margin: 15px 0;
`
export const Title = styled.div`
  font-size: 12px;
  line-height: 15px;
  color: #1f2041;
  font-weight: 700;
  font-style: normal;
  text-transform: uppercase;
  margin-bottom: 16px;
`
export const Wrapper = styled.div``
export const Label = styled.label`
  & + span {
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    color: rgba(31, 32, 65, 0.5);
  }
  margin-right: 10px;
  position: relative;
  display: inline-block;
  width: 40px;
  height: 20px;
`
export const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border: 1px solid rgba(31, 32, 65, 0.25);
  border-radius: 10px;
  &::before {
    position: absolute;
    content: '';
    height: 12px;
    width: 12px;
    left: 3px;
    bottom: 3px;
    background: rgba(31, 32, 65, 0.25);
    border-radius: 50%;
  }
`
export const Input = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
  &:checked + ${Slider} {
    border: 1px solid rgba(188, 156, 255, 1);
  }
  &:checked + ${Slider}::before {
    background: linear-gradient(180deg, #bc9cff 0%, #8ba4f9 100%);
    transform: translateX(20px);
  }
`
