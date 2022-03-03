import React from 'react'
import BookingForm from '../../components/BookingForm'
import PageSection from '../../components/PageSection'
import BackgroundGroup from '../../components/BackgroundGroup'
import * as S from './style'
import { useSelector } from 'react-redux'

const RoomPage = () => {
  const updatingInitialValues = useSelector((state) => state.filter)
  return (
    <S.Body>
      <BackgroundGroup />
      <S.Main>
        <PageSection />
        <BookingForm initialValues={updatingInitialValues} />
      </S.Main>
    </S.Body>
  )
}

export default RoomPage
