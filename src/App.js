import { useState } from 'react'
import LandingPage from './pages/landing'
import RegistrationPage from './pages/registration'
import RoomPage from './pages/room'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import SearchRoomsPage from './pages/searchRooms'
import Header from './components/Header'
import Footer from './components/Footer'
import CardsField from './components/CardsField'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/search' element={<SearchRoomsPage />} />
        <Route path='/registration' element={<RegistrationPage />} />
        <Route path='/room' element={<RoomPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
