import React, { useEffect, useRef, useState } from 'react'
import * as S from './style.jsx'

const Pagination = ({ count }) => {
  const [currentPage, setCurrentPage] = useState(0)
  console.log(count)
  const pages = () => {
    let pages = []
    for (let i = 0; i < count; i++) {
      pages.push(
        <S.Page key={i} max={count - 1} number={i} current={currentPage} onClick={() => setCurrentPage(i)}>
          {i + 1}
        </S.Page>
      )
    }
    return pages
  }
  console.log(currentPage)
  return (
    <S.PaginationContainer>
      <S.PagesBox>
        {currentPage !== 0 && <S.ArrBack onClick={() => setCurrentPage(currentPage - 1)} />}
        {pages()}

        {currentPage !== count - 1 && <S.ArrForward onClick={() => setCurrentPage(currentPage + 1)} />}
      </S.PagesBox>
      <S.PaginationText>1 – 12 из 100+ вариантов аренды</S.PaginationText>
    </S.PaginationContainer>
  )
}

export default Pagination
