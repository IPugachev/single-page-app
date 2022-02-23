import React, { useState } from 'react'
import * as S from './style.jsx'

const Pagination = ({ totalPages }) => {
  const [currentPage, setCurrentPage] = useState(0)
  console.log(totalPages)
  const getPages = () => {
    let pages = []
    for (let index = 1; index < totalPages - 1; index++) {
      pages.push(
        <S.Page
          key={index}
          totalPages={totalPages - 1}
          pageNumber={index}
          currentPage={currentPage}
          onClick={() => setCurrentPage(index)}>
          {index + 1}
        </S.Page>
      )
    }
    return pages
  }
  console.log(currentPage)
  return (
    <S.PaginationContainer>
      <S.PagesBox>
        <S.ArrowPageBack
          totalPages={totalPages - 1}
          currentPage={currentPage}
          onClick={() => setCurrentPage(currentPage - 1)}
        />
        <S.Page totalPages={totalPages - 1} pageNumber={0} currentPage={currentPage} onClick={() => setCurrentPage(0)}>
          {1}
        </S.Page>
        {currentPage - 4 >= 0 && totalPages > 7 && <S.Page pageNumber={-1}>..</S.Page>}
        {getPages()}
        {currentPage + 4 <= totalPages - 1 && totalPages > 7 && <S.Page pageNumber={-1}>..</S.Page>}
        <S.Page
          totalPages={totalPages - 1}
          pageNumber={totalPages - 1}
          currentPage={currentPage}
          onClick={() => setCurrentPage(totalPages - 1)}>
          {totalPages}
        </S.Page>
        <S.ArrowPageForward
          totalPages={totalPages - 1}
          currentPage={currentPage}
          onClick={() => setCurrentPage(currentPage + 1)}
        />
      </S.PagesBox>
      <S.PaginationText>1 – 12 из 100+ вариантов аренды</S.PaginationText>
    </S.PaginationContainer>
  )
}

export default Pagination
