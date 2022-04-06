import LandingPage from './pages/landing'
import RegistrationPage from './pages/registration'
import RoomPage from './pages/room'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SearchRoomsPage from './pages/searchRooms'
import Header from './components/Header'
import Footer from './components/Footer'
import styled from 'styled-components'

const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`

function App() {
  return (
    <BrowserRouter>
      <Body>
        <Header />
        <Routes>
          <Route path='/study-project-toxin/' element={<LandingPage />} />
          <Route path='/study-project-toxin/search' element={<SearchRoomsPage />} />
          <Route path='/study-project-toxin/registration' element={<RegistrationPage />} />
          <Route path='/study-project-toxin/room/:roomId' element={<RoomPage />} />
        </Routes>
        <Footer />
      </Body>
    </BrowserRouter>
  )
}

export default App
