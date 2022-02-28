import React from 'react'
import * as S from './style.jsx'
import { useDispatch, useSelector } from 'react-redux'

// const optionsCheckboxList = [
//   { title: 'Широкий коридор', subtitle: 'Ширина коридоров в номере не менее 91 см.', handle: false },
//   {
//     title: 'Помощник для инвалидов',
//     subtitle: 'На 1 этаже вас встретит специалист и проводит до номера.',
//     handle: false,
//   },
// ]

const RichCheckbox = (props) => {
  const richCheckbox = useSelector((state) => state.checkbox.rich)
  const dispatch = useDispatch()

  const changer = (event, title) => {
    let arrayCopy = richCheckbox.map(
      (item) => (item.title === title && { ...item, handle: event.target.checked }) || { ...item }
    )
    dispatch({ type: 'CHANGE_CHECKBOX_RICH', update: arrayCopy })
  }

  return (
    <S.Checkbox margin={props.margin}>
      <S.Title title={props.title}>{props.title}</S.Title>
      {richCheckbox.map((item, index) => (
        <div key={index}>
          <S.Input type='checkbox' id={item.title} onChange={(event) => changer(event, item.title)} />
          <S.Label htmlFor={item.title}>
            <S.Item>
              <p>{item.title}</p>
              <span>{item.subtitle}</span>
            </S.Item>
          </S.Label>
        </div>
      ))}
    </S.Checkbox>
  )
}

export default RichCheckbox
