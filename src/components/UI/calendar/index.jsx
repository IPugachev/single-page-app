import React, { useState, useRef, useEffect } from 'react'
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
import Input from '../Input'
import Flex from '../../../styles/Flex'
import { ru } from 'date-fns/locale'
import * as S from './style.jsx'
import { useClickOutside } from '../../../hooks/useClickOutside'

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

const Calendar = ({ start, end, date }) => {
  const [currentMonth, setCurrentMonth] = useState(new Date())
  const [selectedStartDate, setSelectedStartDate] = useState(null)
  const [selectedEndDate, setSelectedEndDate] = useState(null)
  const [fromStr, setFromStr] = useState('')
  const [untilStr, setUntilStr] = useState('')
  const [visible, setVisible] = useState(false)
  const fromRef = useRef()
  const untilRef = useRef()
  const clickRef = useRef()
  const dayComp = (day) => {
    return day > new Date() || isSameDay(day, new Date())
  }

  useClickOutside(clickRef, () => setVisible(false))

  // console.log((selectedEndDate - selectedStartDate) / 86400000) для счета суток

  const renderHeader = () => {
    const dateFormat = 'yyyy'
    return (
      <S.Row>
        <S.Col position='flex-start' onClick={prevMonth}>
          <S.ArrowB />
        </S.Col>
        <S.Col>{months[format(currentMonth, 'L') - 1] + ' ' + format(currentMonth, dateFormat, { locale: ru })}</S.Col>
        <S.Col position='flex-end' onClick={nextMonth}>
          <S.ArrowF />
        </S.Col>
      </S.Row>
    )
  }

  const renderDays = () => {
    const dateFormat = 'EEEEEE'
    const days = []
    let startDate = startOfWeek(currentMonth, { weekStartsOn: 1 })

    for (let i = 0; i < 7; i++) {
      days.push(
        <div key={i}>
          {format(addDays(startDate, i), dateFormat, { locale: ru }).charAt(0).toUpperCase() +
            format(addDays(startDate, i), dateFormat, { locale: ru }).charAt(1)}
        </div>
      )
    }
    return <S.Days date={date}>{days}</S.Days>
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
          <S.CellBgackground
            className={`${
              dayComp(day)
                ? selectedEndDate !== null && isSameDay(day, selectedStartDate) && selectedStartDate < selectedEndDate
                  ? 'selected-start'
                  : isSameDay(day, selectedEndDate) && selectedStartDate < selectedEndDate
                  ? 'selected-end'
                  : day > selectedStartDate && day < selectedEndDate
                  ? 'selected'
                  : ''
                : 'unable'
            }`}
            key={day}>
            <S.Cell
              className={`${
                dayComp(day) &&
                (isSameDay(day, selectedStartDate) || isSameDay(day, selectedEndDate)
                  ? 'selected'
                  : isSameDay(day, new Date())
                  ? 'default'
                  : !isSameMonth(day, monthStart)
                  ? 'disabled'
                  : '')
              }`}
              onClick={() => onDateClick(cloneDay)}>
              <S.Number>{formattedDate}</S.Number>
            </S.Cell>
          </S.CellBgackground>
        )
        day = addDays(day, 1)
      }
      rows.push(
        <S.RowCells date={date} key={day}>
          {days}
        </S.RowCells>
      )
      days = []
    }
    return rows
  }

  useEffect(() => {
    date === 'filter' &&
      (fromRef.current.value = `${fromStr.substring(0, fromStr.length - 1)}${untilStr.substring(
        0,
        untilStr.length - 1
      )}`)
  }, [fromStr, untilStr, date])

  const onDateClick = (day) => {
    if (selectedStartDate === null) {
      setSelectedStartDate(day)
      console.log(format(day, 'd MM y', { locale: ru }))
      date !== 'filter'
        ? (fromRef.current.value = format(day, 'd.MM.yyyy'))
        : setFromStr(format(day, 'd MMM', { locale: ru }))
    } else if (day < selectedStartDate) {
      setSelectedStartDate(day)
      console.log(format(day, 'd MM y', { locale: ru }))
      date !== 'filter'
        ? (fromRef.current.value = format(day, 'd.MM.yyyy'))
        : setFromStr(format(day, 'd MMM', { locale: ru }))
    } else {
      setSelectedEndDate(day)
      console.log(format(day, 'd MM y', { locale: ru }))
      date !== 'filter'
        ? (untilRef.current.value = format(day, 'd.MM.yyyy'))
        : setUntilStr(' - ' + format(day, 'd MMM', { locale: ru }))
    }
  }

  const nextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1))
  }

  const prevMonth = () => {
    setCurrentMonth(subMonths(currentMonth, 1))
  }

  const handleInputClear = () => {
    setSelectedStartDate(null)
    setSelectedEndDate(null)
    if (date !== 'filter') {
      fromRef.current.value = ''
      untilRef.current.value = ''
    } else {
      setFromStr('')
      setUntilStr('')
    }
  }

  return (
    <S.CalendarBox ref={clickRef}>
      <Flex justify='space-between'>
        {date !== 'filter' && (
          <Input
            width='150px'
            placeholder='ДД.ММ.ГГГГ'
            input='date'
            ref={fromRef}
            onClick={() => setVisible(!visible)}
            title={start}
          />
        )}
        {date !== 'filter' && (
          <Input
            width='150px'
            placeholder='ДД.ММ.ГГГГ'
            input='date'
            ref={untilRef}
            onClick={() => setVisible(!visible)}
            title={end}
          />
        )}
        {date === 'filter' && (
          <Input
            width='100%'
            placeholder='Выберите даты'
            input='date'
            ref={fromRef}
            onClick={() => setVisible(!visible)}
            title={start}
          />
        )}
      </Flex>
      <div>
        <S.Calendar visible={visible}>
          <S.Wrapper>
            {renderHeader()}
            {renderDays()}
            {renderCells()}
            <Flex justify='space-between' margin='20px 0'>
              <S.Btn
                onClick={() => {
                  handleInputClear()
                }}>
                ОЧИСТИТЬ
              </S.Btn>
              <S.Btn onClick={() => setVisible(false)}>ПРИМЕНИТЬ</S.Btn>
            </Flex>
          </S.Wrapper>
        </S.Calendar>
      </div>
    </S.CalendarBox>
  )
}

export default Calendar
