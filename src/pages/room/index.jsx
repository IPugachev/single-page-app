import React, { useEffect, useState } from 'react'
import BookingForm from '../../components/BookingForm'
import PageSection from '../../components/PageSection'
import BackgroundGroup from '../../components/BackgroundGroup'
import * as S from './style'
import { useParams } from 'react-router-dom'
import { cardsData } from '../../components/CardsField/data'

const RoomPage = () => {
  const { roomId } = useParams()
  const [currentRoom, setCurrentRoom] = useState('')
  useEffect(() => {
    if (roomId) {
      const room = cardsData.find((item) => item.number === Number(roomId))
      setCurrentRoom(room)
    }
  }, [roomId])
  return (
    <S.Body>
      <BackgroundGroup />
      <S.Main>
        <PageSection reviews={currentRoom.reviews} />
        <BookingForm currentRoom={currentRoom} />
      </S.Main>
    </S.Body>
  )
}

export default RoomPage
