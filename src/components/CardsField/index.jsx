import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setCurrentRoom } from '../../store/room/action'
import RoomCard from '../UI/Card'
import Pagination from '../UI/Pagination'
import { cardsData } from './data'
import * as S from './style'
import { filter } from './utils'

const CardsField = ({ title }) => {
  const [currentPage, setCurrentPage] = useState(0)
  const setPage = (pageNumber) => {
    setCurrentPage(pageNumber)
  }
  const dispatch = useDispatch()
  const state = useSelector((state) => state.filter)
  const filteredArray = filter(state, cardsData)
  const currentRoom = (room) => {
    dispatch(setCurrentRoom(room))
  }

  return (
    <S.CardsField>
      <S.Title>{title}</S.Title>
      <S.Wrapper>
        {filteredArray.length !== 0 ? (
          <S.CardsBox>
            {filteredArray.map(
              (item, index) =>
                item !== false &&
                index > currentPage * 12 - 1 &&
                index < currentPage * 12 + 12 && (
                  <S.CardLink
                    to={`/study-project-toxin/room/${item.number}`}
                    key={index}
                    onClick={() => currentRoom(item)}>
                    <RoomCard initialValues={item} key={index} />
                  </S.CardLink>
                )
            )}
          </S.CardsBox>
        ) : (
          <S.SearchError>К сожалению нет подходящих номеров...</S.SearchError>
        )}
      </S.Wrapper>
      <Pagination maxPages={Math.ceil(filteredArray.length / 12)} onClick={setPage} />
    </S.CardsField>
  )
}

export default CardsField
