import React from 'react'
import * as S from './style.jsx'
import { useDispatch } from 'react-redux'
import { changeValues } from '../../../../store/filter/action.js'

const RichCheckbox = (props) => {
  const dispatch = useDispatch()

  return (
    <S.Checkbox margin={props.margin}>
      <S.Title title={props.title}>{props.title}</S.Title>
      {props.initialValues.map((item, index) => (
        <div key={index}>
          <S.Input
            type='checkbox'
            id={item.title}
            onChange={(event) => dispatch(changeValues(item.name, event.target.checked))}
          />
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
