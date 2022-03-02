import React from 'react'
import styled from 'styled-components'
import CardsField from '../../components/CardsField'
import Sidebar from '../../components/Sidebar'

const Body = styled.div`
  max-width: 100vw;
  min-width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: 1px solid rgba(31, 32, 65, 0.25);
`
const Main = styled.div`
  width: 100%;
  padding: 30px 140px 70px;
  display: flex;
  justify-content: center;
`

const SearchRoomsPage = () => {
  return (
    <Body>
      <Main>
        <Sidebar />
        <CardsField title='Номера, которые мы для вас подобрали' />
      </Main>
    </Body>
  )
}

export default SearchRoomsPage
