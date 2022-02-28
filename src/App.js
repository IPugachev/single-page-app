import Footer from './components/Footer'
import RoomInfo from './components/RoomInfo'
import SearchForm from './components/SearchForm'
import RegistrationForm from './components/RegistrationForm'
import SignInForm from './components/SignInForm'
import BulletList from './components/BulletList'
import UIKit from './pages/UI Kit'
import RichCheckbox from './components/UI/Checkbox/Rich'
import { useState } from 'react'
import Comment from './components/Comment'
import LandingPage from './pages/LandingPage'
import RegistrationPage from './pages/RegistrationPage'
import RoomPage from './pages/RoomPage'
import SerachRoomsPage from './pages/SearchRoomsPage'
import RoomCard from './components/UI/RoomItem'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import SearchRoomsPage from './pages/SearchRoomsPage'
import { store } from './store'

function App() {
  return (
    <Provider store={store}>
      <div style={{}}>
        <SearchRoomsPage />
      </div>
    </Provider>
  )
}

export default App
