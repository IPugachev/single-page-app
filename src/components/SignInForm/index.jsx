import React from 'react'
import Button from '../UI/Button'
import Input from '../UI/Input'
import * as S from './style.jsx'
import Flex from '../../styles/Flex'

const SignInForm = (props) => {
  const submit = (event) => {
    event.preventDefault()
  }
  return props.isAuth ? (
    <S.SuccessedRegistration>
      <h4>Вы успешно зарегестрированы!</h4>
      <S.ButtonLink to='/search'>
        <Button buttonStyle='long' text='подобрать номер' arrow={true} margin='30px 0 0 0' />
      </S.ButtonLink>
    </S.SuccessedRegistration>
  ) : (
    <S.Form onSubmit={(e) => submit(e)}>
      <S.Title>Войти</S.Title>
      <Input placeholder='Email' />
      <Input placeholder='Пароль' margin='10px 0' />
      <Button buttonStyle='long' text='войти' arrow={true} margin='10px 0 30px' />
      <Flex justify='space-between' align='center'>
        <S.Underline>Нет аккаунта на Toxin?</S.Underline>
        <Button buttonStyle='white' text='создать' onClick={props.handler} />
      </Flex>
    </S.Form>
  )
}

export default SignInForm
