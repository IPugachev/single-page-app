import React from 'react'
import Button from '../UI/Button'
import Input from '../UI/Input'
import * as S from './style.jsx'
import Flex from '../../styles/Flex'

const SignInForm = (props) => {
  return (
    <S.Form>
      <S.Title>Войти</S.Title>
      <Input placeholder='Email' />
      <Input placeholder='Пароль' margin='10px 0' />
      <Button type='long' text='войти' arrow={true} margin='10px 0 30px' />
      <Flex justify='space-between' align='center'>
        <S.Underline>Нет аккаунта на Toxin?</S.Underline>
        <Button type='white' text='создать' action={props.onClick} />
      </Flex>
    </S.Form>
  )
}

export default SignInForm
