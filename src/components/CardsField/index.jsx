import React, { useState } from 'react'
import { useSelector } from 'react-redux'
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
  const state = useSelector((state) => state.filter)
  const filteredArray = filter(state, cardsData)
  console.log(filteredArray)
  return (
    <S.CardsField>
      <S.Title>{title}</S.Title>
      <S.CardsBox>
        {filteredArray.map(
          (item, index) =>
            item !== false &&
            index > currentPage * 12 - 1 &&
            index < currentPage * 12 + 12 && (
              <S.CardLink to={`/${item.link}`} key={index}>
                <RoomCard initialValues={item} key={index} />
              </S.CardLink>
            )
        )}
      </S.CardsBox>
      <Pagination maxPages={Math.ceil(filteredArray.length / 12)} onClick={setPage} />
    </S.CardsField>
  )
}

export default CardsField
