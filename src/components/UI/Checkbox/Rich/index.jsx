import React, { useState } from 'react'
import * as S from './style.jsx'
import { ReactComponent as ArrowExpand } from '../../../../assets/icons/expand-arrow.svg'
import { ReactComponent as ArrowClose } from '../../../../assets/icons/close-arrow.svg'

const optionsCheckboxList = [
  { title: 'Широкий коридор', subtitle: 'Ширина коридоров в номере не менее 91 см.', handle: false },
  {
    title: 'Помощник для инвалидов',
    subtitle: 'На 1 этаже вас встретит специалист и проводит до номера.',
    handle: false,
  },
]

const RichCheckbox = (props) => {
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
                <S.Item>
                  <p>{item.title}</p>
                  <span>{item.subtitle}</span>
                </S.Item>
              </S.Label>
            </div>
          ))}
        </S.Wrapper>
      </S.CheckboxContainer>
    </S.Checkbox>
  )
}

export default RichCheckbox
