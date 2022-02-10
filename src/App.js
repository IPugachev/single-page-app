import { useState } from 'react'
import styled from 'styled-components'
import Flex from './components/Flex'
import Dropdown from './components/UI/dropdown/Dropdown'
import TextInput from './components/UI/input/TextInput'

const App = () => {
  return (
    <div className='App'>
      <Flex justify='center' margin='20px 0'>
        <Dropdown />
      </Flex>
    </div>
  )
}

export default App
