import { profileActions } from './action'
export const users = [
  {
    firstName: 'Pavel',
    lastName: 'Popov',
    gender: 'male',
    birthDate: '12.11.1998',
    email: 'test@mail.com',
    password: '1111',
    adPermission: false,
  },
]
export const initialState = {
  hasAccount: false,
  isAuth: false,
  firstName: '',
  lastName: '',
  validationLoginError: '',
  validationPasswordError: '',
}

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case profileActions.REGISTRATION_USER:
      // добавляем пользователя в юзерс
      // авторизируем пользователя
      users.push(action.payload.newUser)
      return {
        ...state,
        firstName: action.payload.newUser.firstName,
        lastName: action.payload.newUser.lastName,
        hasAccount: true,
        isAuth: true,
      }
    case profileActions.LOGIN_USER:
      // email pass payload ищем по почте внутри users
      // если пользователь найден сравниваем пароли
      // если пользователь не найден иначе предупреждаем
      // если пароль совпадает то авторизируем пользователя, иначе предупреждаем
      const currentUser = users.find((user) => user.email === action.payload.data.email)
      const validation = currentUser?.password === action.payload.data.password
      if (currentUser) {
        return validation
          ? {
              ...state,
              firstName: currentUser.firstName,
              lastName: currentUser.lastName,
              isAuth: true,
              validationLoginError: '',
              validationPasswordError: '',
            }
          : { ...state, validationLoginError: '', validationPasswordError: 'Неправильный пароль' }
      } else {
        return { ...state, validationLoginError: 'Неверный логин', validationPasswordError: '' }
      }

    // return { ...state, hasAccount: true, isAuth: true}
    case profileActions.SET_USER_STATUS:
      return { ...state, [action.payload.name]: action.payload.value }
    default:
      return state
  }
}
