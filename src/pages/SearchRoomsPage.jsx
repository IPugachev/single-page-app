import React, { useCallback, useState } from 'react'
import styled from 'styled-components'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Sidebar from '../components/Sidebar'

const Body = styled.div`
  max-width: 100vw;
  min-width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Main = styled.div`
  width: 100%;
  padding: 30px 140px 70px;
  display: flex;
`

const SearchRoomsPage = () => {
  return (
    <Body>
      <Header />
      <Main>
        <Sidebar />
        <div></div>
      </Main>
      <Footer />
    </Body>
  )
}

export default SearchRoomsPage
