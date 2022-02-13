import React, { useCallback, useState } from 'react'
import Flex from '../styles/Flex'
import DropdownGuests from '../components/UI/dropdown/DropdownGuests'
import DropdownRooms from '../components/UI/dropdown/DropdownRooms'

const SearchRoom = () => {
  const [optionsGuests, setOptionsGuests] = useState([
    { title: 'взрослые', count: 0 },
    { title: 'дети', count: 0 },
    { title: 'младенцы', count: 0 },
  ])
  const [optionsRooms, setOptionsRooms] = useState([
    { title: 'спальни', count: 2 },
    { title: 'кровати', count: 2 },
    { title: 'ванные комнаты', count: 0 },
  ])
  const onChangeRooms = useCallback((value) => {
    setOptionsRooms(value)
  }, [])
  const onChangeGuests = useCallback((value) => {
    setOptionsGuests(value)
  }, [])

  return (
    <div className='App'>
      <React.StrictMode>
        <Flex margin='20px' justify='space-around'>
          {/* <DropdownGuests dropdownValues={optionsGuests} onChange={onChangeGuests} /> */}
          <DropdownRooms dropdownValues={optionsGuests} onChange={onChangeGuests} />
          <DropdownRooms dropdownValues={optionsRooms} onChange={onChangeRooms} />
        </Flex>
      </React.StrictMode>
    </div>
  )
}

export default SearchRoom
