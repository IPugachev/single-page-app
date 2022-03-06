import React from 'react'
import Button from '../UI/Button'
import Input from '../UI/Input'
import * as S from './style.jsx'
import Flex from '../../styles/Flex'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { loginUser } from '../../store/profile/action'
import { users } from '../../store/profile/reducer'

const SignInForm = (props) => {
  const validationSchema = yup.object({
    email: yup.string().email('Неверный формат почты').required('Введите email'),
    password: yup.string().required('Введите пароль'),
  })
  const dispatch = useDispatch()
  const { validationLoginError, validationPasswordError } = useSelector((state) => state.profile)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(validationSchema) })
  const onSubmit = (data) => {
    dispatch(loginUser(data))
  }
  console.log(users[0])
  const onError = (e) => console.log(e)
  return props.isAuth ? (
    <S.SuccessedRegistration>
      <h4>Вы успешно зарегестрированы!</h4>
      <S.ButtonLink to='/study-project-toxin/search'>
        <Button buttonStyle='long' text='подобрать номер' hasArrow={true} margin='30px 0 0 0' />
      </S.ButtonLink>
    </S.SuccessedRegistration>
  ) : (
    <S.Form onSubmit={handleSubmit(onSubmit, onError)}>
      <S.Title>Войти</S.Title>
      <Input {...register('email')} placeholder='Email' error={errors.email?.message || validationLoginError} />
      <Input
        {...register('password')}
        placeholder='Пароль'
        margin='10px 0'
        error={errors.password?.message || validationPasswordError}
      />
      <Button buttonStyle='long' text='войти' hasArrow={true} margin='10px 0 30px' />
      <Flex justify='space-between' align='center'>
        <S.Underline>Нет аккаунта на Toxin?</S.Underline>
        <Button buttonStyle='white' text='создать' onClick={props.handler} />
      </Flex>
    </S.Form>
  )
}

export default SignInForm
