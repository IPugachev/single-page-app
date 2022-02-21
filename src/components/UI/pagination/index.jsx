import React, { useState } from 'react'
import * as S from './style.jsx'

const Pagination = ({ count }) => {
  const [currentPage, setCurrentPage] = useState(0)
  console.log(count)
  const pages = () => {
    let pages = []
    for (let i = 1; i < count - 1; i++) {
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
        <S.ArrBack max={count - 1} current={currentPage} onClick={() => setCurrentPage(currentPage - 1)} />

        <S.Page max={count - 1} number={0} current={currentPage} onClick={() => setCurrentPage(0)}>
          {1}
        </S.Page>
        {currentPage - 4 >= 0 && count > 7 && <S.Page number={-1}>..</S.Page>}
        {pages()}
        {currentPage + 4 <= count - 1 && count > 7 && <S.Page number={-1}>..</S.Page>}
        <S.Page max={count - 1} number={count - 1} current={currentPage} onClick={() => setCurrentPage(count - 1)}>
          {count}
        </S.Page>

        <S.ArrForward max={count - 1} current={currentPage} onClick={() => setCurrentPage(currentPage + 1)} />
      </S.PagesBox>
      <S.PaginationText>1 – 12 из 100+ вариантов аренды</S.PaginationText>
    </S.PaginationContainer>
  )
}

export default Pagination
