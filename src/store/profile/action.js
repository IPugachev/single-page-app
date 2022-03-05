export const profileActions = {
  REGISTRATION_USER: 'REGISTRATION_USER',
  SET_USER_STATUS: 'SET_USER_STATUS',
}

export const registrationUser = (newUser) => ({
  type: profileActions.REGISTRATION_USER,
  payload: { newUser },
})

export const setUserStatus = (name, value) => ({
  type: profileActions.SET_USER_STATUS,
  payload: { name, value },
})
