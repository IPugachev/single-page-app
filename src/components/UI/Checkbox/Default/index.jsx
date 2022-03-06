import React, { useState } from 'react'
import * as S from './style.jsx'
import { ReactComponent as ArrowExpand } from '../../../../assets/icons/expand-arrow.svg'
import { ReactComponent as ArrowClose } from '../../../../assets/icons/close-arrow.svg'
import { useDispatch, useSelector } from 'react-redux'
import { changeValues } from '../../../../store/filter/action.js'

const DefaultCheckbox = (props) => {
  const [handler, setHandler] = useState(false)
  const handlerSwitch = () => {
    props.type === 'list' && setHandler(!handler)
  }
  const dispatch = useDispatch()
  const reducerValues = useSelector((state) => state.filter)

  const handleCheck = (name, event) => {
    dispatch(changeValues(name, event.target.checked))
  }

  return (
    <S.Checkbox margin={props.margin}>
      <S.Title title={props.title} onClick={handlerSwitch} type={props.type}>
        {props.title}
        {props.type === 'list' && (handler ? <ArrowClose /> : <ArrowExpand />)}
      </S.Title>
      <S.CheckboxContainer>
        <S.Wrapper visible={handler} type={props.type}>
          {props.initialValues.map((item, index) => (
            <div key={index}>
              <S.Input
                type='checkbox'
                defaultChecked={reducerValues[item.name]}
                id={item.title}
                onClick={(event) => handleCheck(item.name, event)}
              />
              <S.Label htmlFor={item.title}>
                <span>{item.title}</span>
              </S.Label>
            </div>
          ))}
        </S.Wrapper>
      </S.CheckboxContainer>
    </S.Checkbox>
  )
}

export default DefaultCheckbox
