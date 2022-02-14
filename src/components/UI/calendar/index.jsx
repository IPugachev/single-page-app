import React, { useState } from 'react'
import dateFns, {
  format,
  startOfWeek,
  addDays,
  startOfMonth,
  endOfMonth,
  endOfWeek,
  isSameMonth,
  isSameDay,
  parse,
  addMonths,
  subMonths,
} from 'date-fns'

import './styles.css'

const Calendar = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date())
  const [selectedDate, setSelectedDate] = useState(new Date())

  const renderHeader = () => {
    const dateFormat = 'MMMM yyyy'
    return (
      <div className='header row flex-middle'>
        <div className='col col-start'>
          <div className='icon' onClick={prevMonth}>
            прошлый месяц
          </div>
        </div>
        <div className='col col-center'>
          <span>{format(currentMonth, dateFormat)}</span>
        </div>
        <div className='col col-end' onClick={nextMonth}>
          <div className='icon'>следующий месяц</div>
        </div>
      </div>
    )
  }

  const renderDays = () => {
    const dateFormat = 'EEE'
    const days = []
    let startDate = startOfWeek(currentMonth, { weekStartsOn: 1 })
    for (let i = 0; i < 7; i++) {
      days.push(
        <div className='col col-center' key={i}>
          {format(addDays(startDate, i), dateFormat)}
        </div>
      )
    }
    return <div className='days row'>{days}</div>
  }

  const renderCells = () => {
    // const { currentMonth, selectedDate } = this.state ??
    const monthStart = startOfMonth(currentMonth)
    const monthEnd = endOfMonth(monthStart)
    const startDate = startOfWeek(monthStart, { weekStartsOn: 1 })
    const endDate = endOfWeek(monthEnd)

    let result = parse(currentMonth, 'MM/dd/yyyy', new Date())
    console.log(currentMonth)

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
              !isSameMonth(day, monthStart) ? 'disabled' : isSameDay(day, selectedDate) ? 'selected' : ''
            }`}
            key={day}
            onClick={() => onDateClick(cloneDay)}>
            <span className='number'>{formattedDate}</span>
            <span className='bg'>{formattedDate}</span>
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
    setSelectedDate(parse(day))
  }

  const nextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1))
  }

  const prevMonth = () => {
    setCurrentMonth(subMonths(currentMonth, 1))
  }

  return (
    <div className='calendar'>
      {renderHeader()}
      {renderDays()}
      {renderCells()}
    </div>
  )
}

export default Calendar
