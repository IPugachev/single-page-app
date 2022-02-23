import styled from 'styled-components'

export const LikeWrapper = styled.div`
  margin-top: 14px;
  display: flex;
  align-items: center;
  border: 1px solid ${({ click }) => (click ? '#BC9CFF' : 'rgba(31, 32, 65, 0.25)')};
  width: 40px;
  height: 20px;
  border-radius: 10px;
  cursor: pointer;
  user-select: none;
`

export const LikeCount = styled.div`
  font-size: 10px;
  line-height: 12px;
  color: ${({ click }) => (click ? '#BC9CFF' : 'rgba(31, 32, 65, 0.25)')};
`
