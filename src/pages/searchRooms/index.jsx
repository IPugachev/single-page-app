import React from 'react'
import styled from 'styled-components'
import CardsField from '../../components/CardsField'
import Sidebar from '../../components/Sidebar'

const Body = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid rgba(31, 32, 65, 0.25);
`
const Main = styled.div`
  width: 100%;
  max-width: 1440px;
  min-width: 1200px;
  padding: 30px 140px 70px;
  display: flex;
  justify-content: space-between;
  & > :first-child {
    margin-right: 60px;
  }
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
