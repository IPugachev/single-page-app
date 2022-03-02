import React from 'react'
import Button from '../UI/Button'
import RadioButton from '../UI/RadioButton'
import ToggleButton from '../UI/ToggleButton'
import Input from '../UI/Input'
import * as S from './style.jsx'
import Flex from '../../styles/Flex'

const RegistrationForm = (props) => {
  return (
    <S.Form>
      <S.Title>Регистрация аккаунта</S.Title>
      <Input placeholder='Имя' margin='20px 0 0 0' />
      <Input placeholder='Фамилия' margin='10px 0' />
      <RadioButton />
      {/* сделать формат ввода даты после дня точка, после месяца ставится автоматом */}
      <Input title='дата рождения' placeholder='ДД.ММ.ГГГГ' margin='20px 0' />
      <Input title='данные для входа в сервис' placeholder='Email' />
      <Input placeholder='Пароль' margin='10px 0' />
      <ToggleButton />
      <Button type='long' text='зарегестрироваться' arrow={true} margin='20px 0 30px' />
      <Flex justify='space-between' align='center'>
        <S.Underline>Уже есть аккаунт на Toxin</S.Underline>
        <Button type='white' text='войти' action={props.onClick} />
      </Flex>
    </S.Form>
  )
}

export default RegistrationForm
