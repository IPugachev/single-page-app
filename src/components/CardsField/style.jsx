import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const CardLink = styled(Link)`
  text-decoration: none;
`
export const CardsField = styled.div`
  width: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const Title = styled.h3`
  font-size: 24px;
  line-height: 29px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.darkShade100};
  margin-bottom: 20px;
  align-self: flex-start;
`

export const CardsBox = styled.div`
  width: fit-content;
  height: 1166px;
  display: grid;
  grid-column-gap: 12px;
  grid-row-gap: 20px;
  grid-template-columns: 270px 270px 270px;
`
