import { useState } from 'react'
import LandingPage from './pages/LandingPage'
import RegistrationPage from './pages/RegistrationPage'
import RoomPage from './pages/RoomPage'
import SearchRoomsPage from './pages/SearchRoomsPage'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/search' element={<SearchRoomsPage />} />
        <Route path='/registration' element={<RegistrationPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
