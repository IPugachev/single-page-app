import styled from 'styled-components'
import { ReactComponent as LikeIconColored } from '../../../assets/icons/like-btn-clicked.svg'
import { ReactComponent as LikeIconGray } from '../../../assets/icons/like-btn-unclicked.svg'

export const LikeWrapper = styled.div`
  margin-top: 14px;
  display: flex;
  align-items: center;
  border: 1px solid ${(props) => (props.click ? '#BC9CFF' : 'rgba(31, 32, 65, 0.25)')};
  width: 40px;
  height: 20px;
  border-radius: 10px;
  cursor: pointer;
  user-select: none;
`
export const LikeUnclicked = styled(LikeIconGray)``
export const LikeClicked = styled(LikeIconColored)``
export const LikeCount = styled.div`
  font-size: 10px;
  line-height: 12px;
  color: ${(props) => (props.click ? '#BC9CFF' : 'rgba(31, 32, 65, 0.25)')};
`
