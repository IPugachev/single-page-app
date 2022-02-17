import React, { useCallback, useState } from 'react'
import Flex, { Wrapper } from '../styles/Flex'
import Dropdown from '../components/UI/dropdown'
import Calendar from '../components/UI/calendar'
import Input from '../components/UI/input'

const UIKit = () => {
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
          <Input title='text field' placeholder='Email' />
          <Dropdown dropdownValues={optionsGuests} type='guests' onChange={onChangeGuests} title='dropdown' />
          <Calendar filter={false} start={'date dropdown'} end={'date dropdown'} />
          <Calendar filter={true} start={'filter date dropdown'} />
          <Input title='subscription text field' placeholder='Email' input='email' width='267px' />
        </Flex>
      </React.StrictMode>
    </div>
  )
}

export default UIKit
