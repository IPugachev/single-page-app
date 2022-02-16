import React, { useCallback, useState } from 'react'
import Flex from '../styles/Flex'
import Dropdown from '../components/UI/dropdown/index'
import Calendar from '../components/UI/calendar'

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
        <Flex margin='20px' direction='column'>
          <Dropdown dropdownValues={optionsGuests} onChange={onChangeGuests} type='guests' title='гости' />
          <Dropdown dropdownValues={optionsRooms} onChange={onChangeRooms} type='rooms' title='удобства номера' />
          <Calendar />
          <Dropdown dropdownValues={optionsGuests} onChange={onChangeGuests} type='guests' title='гости' />
          <Dropdown dropdownValues={optionsRooms} onChange={onChangeRooms} type='rooms' title='удобства номера' />
        </Flex>
      </React.StrictMode>
    </div>
  )
}

export default SearchRoom
