import React from 'react'
import BookingForm from '../../components/BookingForm'
import PageSection from '../../components/PageSection'
import BackgroundGroup from '../../components/BackgroundGroup'
import * as S from './style'

const RoomPage = () => {
  return (
    <S.Body>
      <BackgroundGroup />
      <S.Main>
        <PageSection />
        <BookingForm />
      </S.Main>
    </S.Body>
  )
}

export default RoomPage
