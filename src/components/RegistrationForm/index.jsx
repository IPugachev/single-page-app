import React, { useRef, useState } from 'react'
import Button from '../UI/Button'
import RadioButton from '../UI/RadioButton'
import ToggleButton from '../UI/ToggleButton'
import Input from '../UI/Input'
import * as S from './style.jsx'
import Flex from '../../styles/Flex'
import { useDispatch } from 'react-redux'
import { changeValues, registrationUser } from '../../store/filter/action'

const RegistrationForm = (props) => {
  const [userNameWarning, setUserNameWarning] = useState(0)
  const [userLastNameWarning, setUserLastNameWarning] = useState(0)
  const [userDateWarning, setUserDateWarning] = useState(0)
  const [userPasswordWarning, setUserPasswordWarning] = useState(0)

  const userNameRef = useRef()
  const userLastNameRef = useRef()
  const userDateRef = useRef()
  const userRadioMaleRef = useRef()
  const userRadioFemaleRef = useRef()
  const userEmailRef = useRef()
  const userPasswordRef = useRef()
  const userToggleRef = useRef()
  const radioRefs = [userRadioMaleRef, userRadioFemaleRef]
  const dispatch = useDispatch()

  const submit = (event) => {
    event.preventDefault()
    setUserNameWarning(userNameRef.current.value === '' ? 1 : 0)
    setUserLastNameWarning(userLastNameRef.current.value === '' ? 1 : 0)
    setUserDateWarning(userDateRef.current.value === '' ? 1 : 0)
    setUserPasswordWarning(userPasswordRef.current.value === '' ? 1 : 0)

    if (
      userNameRef.current.value !== '' &&
      userLastNameRef.current.value !== '' &&
      userDateRef.current.value !== '' &&
      userPasswordRef.current.value !== ''
    ) {
      let userData = {
        name: userNameRef.current.value,
        lastName: userLastNameRef.current.value,
        birthDate: userDateRef.current.value,
        gender: userRadioMaleRef.current.checked ? 'male' : userRadioFemaleRef.current.checked ? 'female' : '',
        email: userEmailRef.current.value,
        password: userPasswordRef.current.value,
        ads: userToggleRef.current.checked,
      }
      dispatch(registrationUser(userData))
      dispatch(changeValues('isAuth', true))
      dispatch(changeValues('hasAccount', true))
      dispatch(changeValues('name', userNameRef.current.value))
      dispatch(changeValues('lastName', userLastNameRef.current.value))
    }
  }

  return (
    <S.Form>
      <S.Title>Регистрация аккаунта</S.Title>
      <Input ref={userNameRef} placeholder='Имя' margin='20px 0 0 0' warning={userNameWarning} />
      <Input ref={userLastNameRef} placeholder='Фамилия' margin='10px 0' warning={userLastNameWarning} />
      <RadioButton ref={radioRefs} />
      {/* сделать формат ввода даты после дня точка, после месяца ставится автоматом */}
      <Input
        ref={userDateRef}
        title='дата рождения'
        placeholder='ДД.ММ.ГГГГ'
        margin='20px 0'
        warning={userDateWarning}
      />
      <Input ref={userEmailRef} title='данные для входа в сервис' placeholder='Email' />
      <Input ref={userPasswordRef} placeholder='Пароль' margin='10px 0' warning={userPasswordWarning} />
      <ToggleButton ref={userToggleRef} />
      <Button buttonStyle='long' text='зарегестрироваться' arrow={true} margin='20px 0 30px' onClick={submit} />
      <Flex justify='space-between' align='center'>
        <S.Underline>Уже есть аккаунт на Toxin</S.Underline>
        <Button buttonStyle='white' text='войти' onClick={props.handler} />
      </Flex>
    </S.Form>
  )
}

export default RegistrationForm
