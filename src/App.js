import { useState } from 'react'
import styled from 'styled-components'
import Flex from './components/Flex'
import Dropdown from './components/UI/dropdown/Dropdown'
import TextInput from './components/UI/input/TextInput'

const App = () => {
  const [dropdownStatus, setDropdownStatus] = useState('none')
  console.log(dropdownStatus)
  const setStatus = () => {
    dropdownStatus === 'none' ? setDropdownStatus('flex') : setDropdownStatus('none')
  }
  return (
    <div className='App'>
      <Flex justify='center' margin='20px 0'>
        <Dropdown
          onClick={setStatus}
          display={dropdownStatus}
          options={[
            { value: '1', name: '1 гость' },
            { value: '2', name: '2 гостя' },
            { value: '3', name: '3 гостя' },
            { value: '4', name: '4 гостя' },
          ]}
        />
      </Flex>
    </div>
  )
}

export default App
