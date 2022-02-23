import styled from 'styled-components'

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 380px;
  padding: 40px 30px 30px;
  background-color: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.12);
  box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
`
export const HeaderSection = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  align-items: flex-end;
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
export const Subtitle = styled.h5`
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  color: ${({ theme }) => theme.colors.darkShade50};
  & span {
    font-size: 14px;
    font-weight: 700;
  }
`
export const PriceInfo = styled.div`
  font-size: 14px;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.darkShade75};
  display: flex;
  flex-direction: column;
`
export const Item = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  & span {
    display: flex;
    align-items: center;
  }
`
export const TotalPrice = styled.div`
  font-weight: 700;
  font-size: 19px;
  line-height: 23px;
  color: ${({ theme }) => theme.colors.darkShade100};
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
`
export const Border = styled.div`
  border-bottom: 1px dashed rgba(31, 32, 65, 0.25);
  /* flex-shrink: 1; */
  flex-grow: 1;
  margin-bottom: 4px;
`
