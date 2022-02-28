import React, { useCallback, useState } from 'react'
import styled from 'styled-components'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Calendar from '../components/UI/Calendar'
import Dropdown from '../components/UI/Dropdown'
import Slider from '../components/UI/Slider'
import DefaultCheckbox from '../components/UI/Checkbox/Default'
import RichCheckbox from '../components/UI/Checkbox/Rich'

const Body = styled.div`
  max-width: 100vw;
  min-width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Main = styled.div`
  width: 100%;
  padding: 30px 140px 70px;
  display: flex;
`
const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  width: 266px;
  & > p {
    font-size: 12px;
    line-height: 14px;
    color: ${({ theme }) => theme.colors.darkShade50};
    margin-top: 14px;
  }
`

const SearchRoomsPage = () => {
  // Dropdown state

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

  // Checkbox state

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

  const [optionsRichCheckbox, setOptionsRichCheckbox] = useState([
    { title: 'Широкий коридор', subtitle: 'Ширина коридоров в номере не менее 91 см.', handle: false },
    {
      title: 'Помощник для инвалидов',
      subtitle: 'На 1 этаже вас встретит специалист и проводит до номера.',
      handle: false,
    },
  ])

  //

  return (
    <Body>
      <Header />
      <Main>
        <Sidebar>
          <Calendar filter={true} start={'даты пребывания в отеле'} />
          <Dropdown
            dropdownValues={optionsGuests}
            type='guests'
            onChange={onChangeGuests}
            title='гости'
            margin='20px 0 30px'
          />
          <Slider
            title='диапазон цены'
            min={0}
            max={150}
            onChange={({ min, max }) => console.log(`min = ${min}, max = ${max}`)}
          />
          <p>Стоимость за сутки пребывания в номере</p>
          <DefaultCheckbox title='правила дома' options={optionsCheckboxButtons} margin='30px 0' />
          <RichCheckbox title='доступность' options={optionsRichCheckbox} />
          <Dropdown
            dropdownValues={optionsRooms}
            type='rooms'
            onChange={onChangeRooms}
            title='удобства номера'
            margin='30px 0'
          />
          <DefaultCheckbox title='дополнительные удобства' type='list' options={optionsCheckboxList} />
        </Sidebar>
        <div></div>
      </Main>
      <Footer />
    </Body>
  )
}

export default SearchRoomsPage
