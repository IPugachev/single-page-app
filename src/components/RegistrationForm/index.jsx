import React from 'react'
import Button from '../UI/Button'
import RadioButton from '../UI/RadioButton'
import ToggleButton from '../UI/ToggleButton'
import Input from '../UI/Input'
import * as S from './style.jsx'
import Flex from '../../styles/Flex'
import { useDispatch } from 'react-redux'
import { registrationUser } from '../../store/profile/action'
import { users } from '../../store/profile/reducer'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

const validationSchema = yup.object({
  firstName: yup.string().required('Обязательное поле*'),
  lastName: yup.string().required('Обязательное поле*'),
  gender: yup.string().nullable(),
  birthDate: yup
    .string('Неверный формат даты (ДД.ММ.ГГГГ)')
    .min(10, 'Неверный формат даты (ДД.ММ.ГГГГ)')
    .max(10, 'Неверный формат даты (ДД.ММ.ГГГГ)')
    .required('Обязательное поле*'),
  email: yup.string().email('Неверный формат почты').required('Обязательное поле*'),
  password: yup.string().required('Обязательное поле*'),
  adPermisson: yup.boolean(),
})

const RegistrationForm = (props) => {
  const dispatch = useDispatch()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(validationSchema) })
  const onSubmit = (data) => {
    dispatch(registrationUser(data))
    console.log(users)
  }
  const onError = (e) => console.log(e)

  // const dateInput = (event) => {
  //   if (event.target.value.length === 2) {
  //     event.target.value += '.'
  //   } else if (event.target.value.length === 5) {
  //     event.target.value += '.'
  //   }
  // }

  return (
    <S.Form onSubmit={handleSubmit(onSubmit, onError)}>
      <S.Title>Регистрация аккаунта</S.Title>
      <Input
        type='text'
        {...register('firstName')}
        placeholder='Имя'
        margin='20px 0 0 0'
        error={errors.firstName?.message}
      />
      <Input
        type='text'
        {...register('lastName')}
        placeholder='Фамилия'
        margin='10px 0'
        error={errors.lastName?.message}
      />

      <S.Wrapper>
        <RadioButton {...register('gender')} value='male' label='Мужчина' />
        <RadioButton {...register('gender')} value='female' label='Женщина' />
      </S.Wrapper>
      <Input
        type='date'
        {...register('birthDate')}
        title='дата рождения'
        placeholder='ДД.ММ.ГГГГ'
        margin='20px 0'
        error={errors.birthDate?.message}
        // onChange={(event) => dateInput(event)}
      />
      <Input
        type='email'
        {...register('email')}
        title='данные для входа в сервис'
        placeholder='Email'
        error={errors.email?.message}
      />
      <Input
        type='password'
        {...register('password')}
        placeholder='Пароль'
        margin='10px 0'
        error={errors.password?.message}
      />
      <ToggleButton {...register('adPermisson')} />
      <Button type='submit' buttonStyle='long' text='зарегестрироваться' hasArrow='{true}' margin='20px 0 30px' />
      <Flex justify='space-between' align='center'>
        <S.Underline>Уже есть аккаунт на Toxin</S.Underline>
        <Button buttonStyle='white' text='войти' onClick={props.handler} />
      </Flex>
    </S.Form>
  )
}

export default RegistrationForm
