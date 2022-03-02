import styled from 'styled-components'
import { ReactComponent as IconDot } from '../../../assets/icons/list-dot.svg'

export const Container = styled.div`
  margin: ${({ margin }) => margin || ''};
  display: flex;
  flex-direction: column;
  width: 266px;
`
export const Title = styled.h5`
  margin-left: 20px;
  margin-bottom: 16px;
  font-weight: 700;
  font-size: 12px;
  line-height: 15px;
  color: ${({ theme }) => theme.colors.darkShade100};
  display: ${({ title }) => (title && 'block') || 'none'};
`
export const ItemBox = styled.div`
  display: flex;
  align-items: flex-start;
`
export const Dot = styled(IconDot)`
  flex-shrink: 0;
  height: 24px;
`
export const Item = styled.p`
  font-size: 14px;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.darkShade75};
  margin: 0 0 10px 10px;
`
