import React, { useState } from 'react'
import * as S from './style.jsx'
import { ReactComponent as ArrowExpand } from '../../../../assets/icons/expand-arrow.svg'
import { ReactComponent as ArrowClose } from '../../../../assets/icons/close-arrow.svg'

const optionsCheckboxList = [
  { title: 'Завтрак', handle: false },
  { title: 'Письменный стол', handle: false },
  { title: 'Стул для кормления', handle: false },
  { title: 'Кроватка', handle: false },
  { title: 'Телевизор', handle: false },
  { title: 'Шампунь', handle: false },
]

const optionsCheckboxButtons = [
  { title: 'Можно курить', handle: false },
  { title: 'Можно с питомцами', handle: false },
  { title: 'Можно пригласить гостей (до 10 человек)', handle: false },
]

const DefaultCheckbox = (props) => {
  const [handler, setHandler] = useState(false)

  const handlerSwitch = () => {
    props.type === 'list' && setHandler(!handler)
  }

  return (
    <S.Checkbox margin={props.margin}>
      <S.Title title={props.title} onClick={handlerSwitch} type={props.type}>
        {props.title}
        {props.type === 'list' && (handler ? <ArrowClose /> : <ArrowExpand />)}
      </S.Title>
      <S.CheckboxContainer>
        <S.Wrapper visible={handler} type={props.type}>
          {optionsCheckboxList.map((item, index) => (
            <div key={index}>
              <S.Input type='checkbox' id={item.title} />
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
