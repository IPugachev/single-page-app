import React, { useState } from 'react'
import * as S from './style.jsx'

const Pagination = ({ maxPages, onClick }) => {
  const [currentPage, setCurrentPage] = useState(0)
  // console.log(maxPages)

  const setPage = (page) => {
    setCurrentPage(page)
    onClick(page)
  }
  const getPages = () => {
    let pages = []
    for (let index = 1; index < maxPages - 1; index++) {
      pages.push(
        <S.Page
          key={index}
          totalpages={maxPages - 1}
          pageNumber={index}
          currentpage={currentPage}
          onClick={() => setPage(index)}>
          {index + 1}
        </S.Page>
      )
    }
    return pages
  }
  // console.log(currentPage)
  return (
    <S.PaginationContainer>
      <S.PagesBox>
        <S.ArrowPageBack totalpages={maxPages - 1} currentpage={currentPage} onClick={() => setPage(currentPage - 1)} />
        <S.Page totalpages={maxPages - 1} pageNumber={0} currentpage={currentPage} onClick={() => setPage(0)}>
          {1}
        </S.Page>
        {currentPage - 4 >= 0 && maxPages > 7 && <S.Page pageNumber={-1}>..</S.Page>}
        {getPages()}
        {currentPage + 4 <= maxPages - 1 && maxPages > 7 && <S.Page pageNumber={-1}>..</S.Page>}
        <S.Page
          totalpages={maxPages - 1}
          pageNumber={maxPages - 1}
          currentpage={currentPage}
          onClick={() => setPage(maxPages - 1)}>
          {maxPages}
        </S.Page>
        <S.ArrowPageForward
          totalpages={maxPages - 1}
          currentpage={currentPage}
          onClick={() => setPage(currentPage + 1)}
        />
      </S.PagesBox>
      <S.PaginationText>1 – 12 из 100+ вариантов аренды</S.PaginationText>
    </S.PaginationContainer>
  )
}

export default Pagination
