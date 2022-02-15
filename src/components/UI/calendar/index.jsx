import React, { useState, useRef } from 'react'
import {
  format,
  startOfWeek,
  addDays,
  startOfMonth,
  endOfMonth,
  endOfWeek,
  isSameMonth,
  isSameDay,
  addMonths,
  subMonths,
} from 'date-fns'
import { ReactComponent as ArrowBack } from '../../../assets/icons/arrow-back.svg'
import { ReactComponent as ArrowForward } from '../../../assets/icons/arrow-forward.svg'
import './styles.css'
import TextField from '../input/TextField'
import Flex from '../../../styles/Flex'
import { ru } from 'date-fns/locale'

const months = [
  'Январь',
  'Февраль',
  'Март',
  'Апрель',
  'Май',
  'Июль',
  'Июнь',
  'Август',
  'Сентябрь',
  'Октябрь',
  'Ноябрь',
  'Декабрь',
]

const Calendar = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date())

  const [selectedStartDate, setSelectedStartDate] = useState('')
  const [selectedEndDate, setSelectedEndDate] = useState('')
  const [visible, setVisible] = useState(false)
  const fromRef = useRef()
  const untilRef = useRef()
  const renderHeader = () => {
    const dateFormat = 'yyyy'
    return (
      <div className='header row flex-middle'>
        <div className='col col-start' onClick={prevMonth}>
          <div className='icon'>
            <ArrowBack />
          </div>
        </div>
        <div className='col col-center'>
          <span>{months[format(currentMonth, 'L') - 1] + ' ' + format(currentMonth, dateFormat, { locale: ru })}</span>
        </div>
        <div className='col col-end' onClick={nextMonth}>
          <div className='icon'>
            <ArrowForward />
          </div>
        </div>
      </div>
    )
  }

  const renderDays = () => {
    const dateFormat = 'EEEEEE'
    const days = []
    let startDate = startOfWeek(currentMonth, { weekStartsOn: 1 })
    for (let i = 0; i < 7; i++) {
      days.push(
        <div className='col col-center' key={i}>
          {/* {format(addDays(startDate, i), dateFormat, { locale: ru })} */}
          {format(addDays(startDate, i), dateFormat, { locale: ru }).charAt(0).toUpperCase() +
            format(addDays(startDate, i), dateFormat, { locale: ru }).charAt(1)}
        </div>
      )
    }
    return <div className='days row'>{days}</div>
  }

  const renderCells = () => {
    const monthStart = startOfMonth(currentMonth)
    const monthEnd = endOfMonth(monthStart)
    const startDate = startOfWeek(monthStart, { weekStartsOn: 1 })
    const endDate = endOfWeek(monthEnd, { weekStartsOn: 1 })

    const dateFormat = 'd'
    const rows = []
    let days = []

    let day = startDate
    let formattedDate = ''
    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        formattedDate = format(day, dateFormat)
        const cloneDay = day
        days.push(
          <div
            className={`col cell ${
              !isSameMonth(day, monthStart)
                ? 'disabled'
                : isSameDay(day, selectedStartDate) || isSameDay(day, selectedEndDate)
                ? 'selected'
                : isSameDay(day, new Date())
                ? 'default'
                : ''
            }`}
            key={day}
            onClick={() => onDateClick(cloneDay)}>
            <span className='number'>{formattedDate}</span>
          </div>
        )
        day = addDays(day, 1)
      }
      rows.push(
        <div className='row' key={day}>
          {days}
        </div>
      )
      days = []
    }
    return <div className='body'>{rows}</div>
  }

  const onDateClick = (day) => {
    if (day > selectedStartDate && selectedStartDate === '') {
      setSelectedStartDate(day)
      fromRef.current.value = format(day, 'd.MM.yyyy')
    } else if (day < selectedStartDate) {
      setSelectedStartDate(day)
      fromRef.current.value = format(day, 'd.MM.yyyy')
      untilRef.current.focus()
    } else {
      setSelectedEndDate(day)
      untilRef.current.value = format(day, 'd.MM.yyyy')
      fromRef.current.focus()
    }
  }

  const nextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1))
  }

  const prevMonth = () => {
    setCurrentMonth(subMonths(currentMonth, 1))
  }

  const handleFromFocus = () => {
    setVisible(true)
  }

  return (
    <Flex margin='20px' direction='column'>
      <Flex justify='space-between' margin='5px 0'>
        <TextField style={{ width: '150px' }} placeholder='Начало' ref={fromRef} onFocus={handleFromFocus} />
        <TextField style={{ width: '150px' }} placeholder='Конец' ref={untilRef} onFocus={handleFromFocus} />
      </Flex>
      <div className='calendar' style={{ opacity: visible ? '1' : '0' }}>
        <div style={{ margin: '20px' }}>
          {renderHeader()}
          {renderDays()}
          {renderCells()}
          <Flex justify='space-between' margin='20px 0'>
            <span onClick={() => setVisible(false)} style={{ cursor: 'pointer' }}>
              ОЧИСТИТЬ
            </span>
            <span onClick={() => setVisible(false)} style={{ cursor: 'pointer' }}>
              ПРИМЕНИТЬ
            </span>
          </Flex>
        </div>
      </div>
    </Flex>
  )
}

export default Calendar
