import React, { useState } from 'react'
import Flex from '../styles/Flex'
import Dropdown from '../components/UI/dropdown/Dropdown'

const SearchRoom = () => {
  const [options, setOptions] = useState([
    { title: 'взрослые', count: 0 },
    { title: 'дети', count: 0 },
    { title: 'младенцы', count: 0 },
  ])

  console.log(options.map((p) => p.count))
  return (
    <div className='App'>
      <Flex justify='center' margin='20px 0'>
        <Dropdown dropdownValues={options} setVal={setOptions} />
      </Flex>
    </div>
  )
}

export default SearchRoom
