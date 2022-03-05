import React, { useCallback } from 'react'
import Button from '../UI/Button'
import RadioButton from '../UI/RadioButton'
import ToggleButton from '../UI/ToggleButton'
import Input from '../UI/Input'
import * as S from './style.jsx'
import Flex from '../../styles/Flex'
import { useDispatch } from 'react-redux'
import { registrationUser, setUserStatus } from '../../store/profile/action'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

const useYupValidationResolver = (validationSchema) =>
  useCallback(
    async (data) => {
      try {
        const values = await validationSchema.validate(data, {
          abortEarly: false,
        })

        return {
          values,
          errors: {},
        }
      } catch (errors) {
        return {
          values: {},
          errors: errors.inner.reduce(
            (allErrors, currentError) => ({
              ...allErrors,
              [currentError.path]: {
                type: currentError.type ?? 'validation',
                message: currentError.message,
              },
            }),
            {}
          ),
        }
      }
    },
    [validationSchema]
  )

const validationSchema = yup.object({
  firstName: yup.string().required('Обязательное поле*'),
  lastName: yup.string().required('Обязательное поле*'),
  gender: yup.string().nullable(),
  birthDate: yup.string().required('Обязательное поле*'),
  email: yup.string().email('Неверный формат почты'),
  password: yup.string().required('Обязательное поле*'),
  adPermisson: yup.boolean(),
})

const RegistrationForm = (props) => {
  const dispatch = useDispatch()
  const resolver = useYupValidationResolver(validationSchema)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver })
  const onSubmit = (data) => {
    dispatch(registrationUser(data))
    dispatch(setUserStatus('isAuth', true))
    dispatch(setUserStatus('hasAccount', true))
    dispatch(setUserStatus('firstName', data.firstName))
    dispatch(setUserStatus('lastName', data.lastName))
    console.log(data)
  }
  const onError = () => console.log()

  return (
    <S.Form onSubmit={handleSubmit(onSubmit, onError)}>
      <S.Title>Регистрация аккаунта</S.Title>
      <Input {...register('firstName')} placeholder='Имя' margin='20px 0 0 0' error={errors.firstName?.message} />
      <Input {...register('lastName')} placeholder='Фамилия' margin='10px 0' error={errors.lastName?.message} />

      <S.Wrapper>
        <RadioButton {...register('gender')} value='male' label='Мужчина' />
        <RadioButton {...register('gender')} value='female' label='Женщина' />
      </S.Wrapper>
      <Input
        {...register('birthDate')}
        title='дата рождения'
        placeholder='ДД.ММ.ГГГГ'
        margin='20px 0'
        error={errors.birthDate?.message}
      />
      <Input {...register('email')} title='данные для входа в сервис' placeholder='Email' />
      <Input {...register('password')} placeholder='Пароль' margin='10px 0' error={errors.password?.message} />
      <ToggleButton {...register('adPermisson')} />
      <Button buttonStyle='long' text='зарегестрироваться' hasArrow='{true}' margin='20px 0 30px' />
      <Flex justify='space-between' align='center'>
        <S.Underline>Уже есть аккаунт на Toxin</S.Underline>
        <Button buttonStyle='white' text='войти' onClick={props.handler} />
      </Flex>
    </S.Form>
  )
}

export default RegistrationForm
