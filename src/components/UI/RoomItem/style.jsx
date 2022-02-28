import styled from 'styled-components'

export const RoomCard = styled.div`
  width: 270px;
  background: #ffffff;
  box-shadow: 0px 10px 20px rgba(31, 32, 65, 0.05);
`
export const BackgroundRoom = styled.img`
  width: 100%;
  height: 151px;
`
export const MainInfo = styled.div`
  padding: 20px;
  width: 100%;
`
export const Upper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding-bottom: 10px;
  border-bottom: 1px solid rgba(31, 32, 65, 0.1); ;
`

export const Title = styled.h4`
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  color: ${({ theme }) => theme.colors.darkShade100};
  & span {
    font-size: 14px;
    line-height: 17px;
  }
  & span:nth-child(2) {
    color: ${({ theme }) => theme.colors.purple};
  }
`
export const Subtitle = styled.p`
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  color: ${({ theme }) => theme.colors.darkShade50};
  & span {
    font-size: 14px;
    font-weight: 700;
  }
`
export const Lower = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 10px;
`
export const Reviews = styled.p`
  font-size: 14px;
  line-height: 18px;
  color: ${({ theme }) => theme.colors.darkShade50};
  & span {
    font-weight: 700;
  }
`
