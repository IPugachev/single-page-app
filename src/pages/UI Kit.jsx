import React, { useCallback, useState } from 'react'
import Flex from '../styles/Flex'
import Dropdown from '../components/UI/dropdown'
import Calendar from '../components/UI/calendar'
import Input from '../components/UI/input'
import Checkbox from '../components/UI/checkbox'
import RadioBtn from '../components/UI/radio'
import Toggle from '../components/UI/toggle'
import LikeBtn from '../components/UI/like'
import RatingBtn from '../components/UI/rating/rating'
import Slider from '../components/UI/slider'
import Button from '../components/UI/button'
import Pagination from '../components/UI/pagination'

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

  const [optionsCheckboxList, setOptionsCheckboxList] = useState([
    { title: 'Завтрак', handle: false },
    { title: 'Письменный стол', handle: false },
    { title: 'Стул для кормления', handle: false },
    { title: 'Кроватка', handle: false },
    { title: 'Телевизор', handle: false },
    { title: 'Шампунь', handle: false },
  ])

  const [optionsCheckboxButtons, setOptionsCheckboxButtons] = useState([
    { title: 'Можно курить', handle: false },
    { title: 'Можно с питомцами', handle: false },
    { title: 'Можно пригласить гостей (до 10 человек)', handle: false },
  ])
  const [optionToggle, setOptionToggle] = useState(false)

  const onChangeRooms = useCallback((value) => {
    setOptionsRooms(value)
  }, [])
  const onChangeGuests = useCallback((value) => {
    setOptionsGuests(value)
  }, [])
  const onChangeToggle = () => {
    setOptionToggle(!optionToggle)
  }

  return (
    <div className='App'>
      <React.StrictMode>
        <Flex margin='20px' direction='column'>
          <Input title='text field' placeholder='Email' />
          <Dropdown dropdownValues={optionsGuests} type='guests' onChange={onChangeGuests} title='dropdown' />
          <Calendar filter={false} start={'date dropdown'} end={'date dropdown'} />
          <Calendar filter={true} start={'filter date dropdown'} />
          <Input title='subscription text field' placeholder='Email' input='email' width='267px' />
          <Dropdown dropdownValues={optionsRooms} type='rooms' onChange={onChangeRooms} title='dropdown' />
          <Checkbox title='expandable checkbox list' type='list' options={optionsCheckboxList} />
          <Checkbox title='checkbox buttons' options={optionsCheckboxButtons} />
          <RadioBtn title='radio buttons' />
          <Toggle title='toggle' onClick={onChangeToggle} />
          <LikeBtn />
          <RatingBtn rating={3} />
          <Slider
            title='range slider'
            min={0}
            max={150}
            onChange={({ min, max }) => console.log(`min = ${min}, max = ${max}`)}
          />
          <Button text='click me' />
          <Button type='white' text='click me' />
          <Button type='long' text='зарегестрироваться' arrow={true} />
          <Pagination count={9} />
        </Flex>
      </React.StrictMode>
    </div>
  )
}

export default UIKit
