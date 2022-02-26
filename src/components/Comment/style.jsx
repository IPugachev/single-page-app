import styled from 'styled-components'

export const Container = styled.div`
  margin: ${({ margin }) => margin || ''};
  display: flex;
`
export const UserBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 48px;
  margin-right: 10px;
`
export const UserImage = styled.img`
  width: 48px;
  height: 48px;
  border: 2px solid #ffffff;
  border-radius: 32px;
  object-fit: cover;
  filter: drop-shadow(0px 10px 20px rgba(31, 32, 65, 0.1));
  margin-bottom: 12px;
`
export const TextBlock = styled.div`
  font-size: 14px;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.darkShade75};
`
export const UserStatus = styled.div`
  margin-bottom: 10px;
  & p:first-child {
    font-weight: 700;
  }
`
