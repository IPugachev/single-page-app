export const filterActions = {
  CHANGE_VALUES: 'CHANGE_VALUES',
}

export const changeValues = (name, value) => ({
  type: filterActions.CHANGE_VALUES,
  payload: { name, value },
})
