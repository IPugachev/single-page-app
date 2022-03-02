import styled from 'styled-components'

export const PageSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  & h5 {
    font-weight: 700;
    font-size: 19px;
    line-height: 23px;
    color: ${({ theme }) => theme.colors.darkShade100};
  }
`

export const UpperBlock = styled.div`
  display: flex;
  margin-bottom: 10px;
`
export const Info = styled.div`
  display: flex;
  flex-direction: column;
  width: 280px;
`
export const DetailsBox = styled.div`
  & > :not(:first-child) {
    border-top: 1px solid rgba(31, 32, 65, 0.1);
  }
`
export const RateDiagram = styled.div`
  width: 320px;
  margin: 0 auto;
  & > h5 {
    margin-bottom: 20px;
  }
`
export const CommentBlock = styled.div`
  display: flex;
  flex-direction: column;
  & > :not(:first-child) {
    margin-top: 23px;
    margin-right: 20px;
  }
`
export const NoteBlock = styled.div`
  display: flex;
  margin-top: 30px;
  justify-content: space-between;
`
export const Cancel = styled.div`
  width: 320px;
  & h5 {
    margin-bottom: 20px;
  }
  & p {
    font-size: 14px;
    line-height: 24px;
    color: ${({ theme }) => theme.colors.darkShade75};
  }
`
