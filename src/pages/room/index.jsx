import React from 'react'
import Room1 from '../../assets/backgrounds/room1.png'
import Room2 from '../../assets/backgrounds/room2.png'
import Room3 from '../../assets/backgrounds/room3.png'
import styled from 'styled-components'
import BookingForm from '../../components/BookingForm'
import Datails from '../../components/UI/Datails'
import Diagram from '../../components/UI/Diagram'
import Comment from '../../components/Comment'
import BulletList from '../../components/BulletList'

const Body = styled.div`
  max-width: 100vw;
  min-width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const BackgroundGroup = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 68% 32%;
  & > div {
    display: flex;
    flex-direction: column;
  }
`
const BackgroundImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`
const Main = styled.div`
  padding: 70px 140px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid rgba(31, 32, 65, 0.25);
`
const PageSection = styled.div`
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

const UpperBlock = styled.div`
  display: flex;
  margin-bottom: 10px;
`
const Info = styled.div`
  display: flex;
  flex-direction: column;
  width: 280px;
`
const DetailsBox = styled.div`
  & > :not(:first-child) {
    border-top: 1px solid rgba(31, 32, 65, 0.1);
  }
`
const RateDiagram = styled.div`
  width: 320px;
  margin: 0 auto;
  & > h5 {
    margin-bottom: 20px;
  }
`
const CommentBlock = styled.div`
  display: flex;
  flex-direction: column;
  & > :not(:first-child) {
    margin-top: 23px;
    margin-right: 20px;
  }
`
const NoteBlock = styled.div`
  display: flex;
  margin-top: 30px;
  justify-content: space-between;
`
const Cancel = styled.div`
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

const RoomPage = () => {
  return (
    <Body>
      <BackgroundGroup>
        <BackgroundImg src={Room1} alt='background' />
        <div>
          <BackgroundImg src={Room2} alt='background' />
          <BackgroundImg src={Room3} alt='background' style={{ marginTop: '-1px' }} />
        </div>
      </BackgroundGroup>
      <Main>
        <PageSection>
          <UpperBlock>
            <Info>
              <h5>Сведения о номере</h5>
              <DetailsBox>
                <Datails number={0} />
                <Datails number={1} />
                <Datails number={2} />
              </DetailsBox>
            </Info>
            <RateDiagram>
              <h5>Впечатления от номера</h5>
              <Diagram />
            </RateDiagram>
          </UpperBlock>

          <CommentBlock>
            <h5>Отзывы посетителей номера</h5>
            <Comment />
            <Comment />
          </CommentBlock>
          <NoteBlock>
            <BulletList title='Правила' />
            <Cancel>
              <h5>Отмена</h5>
              <p>
                Бесплатная отмена в течение 48 ч. После этого при отмене не позднее чем за 5 дн. до прибытия вы получите
                полный возврат за вычетом сбора за услуги.
              </p>
            </Cancel>
          </NoteBlock>
        </PageSection>
        <BookingForm />
      </Main>
    </Body>
  )
}

export default RoomPage
