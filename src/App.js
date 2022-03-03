import { useState } from 'react'
import LandingPage from './pages/landing'
import RegistrationPage from './pages/registration'
import RoomPage from './pages/room'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import SearchRoomsPage from './pages/searchRooms'
import Header from './components/Header'
import Footer from './components/Footer'
import styled from 'styled-components'

const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
`

function App() {
  return (
    <BrowserRouter>
      <Body>
        <Header />
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/search' element={<SearchRoomsPage />} />
          <Route path='/registration' element={<RegistrationPage />} />
          <Route path='/room' element={<RoomPage />} />
        </Routes>
        <Footer />
      </Body>
    </BrowserRouter>
  )
}

export default App
