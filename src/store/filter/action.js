export const filterActions = {
  CHANGE_VALUES: 'CHANGE_VALUES',
  CHANGE_DROPDOWN_VALUES: 'CHANGE_DROPDOWN_VALUES',
}

export const changeValues = (name, value) => ({
  type: filterActions.CHANGE_VALUES,
  payload: { name, value },
})

export const changeDropdownValues = (type, changedValues) => ({
  type: filterActions.CHANGE_DROPDOWN_VALUES,
  payload: { type, changedValues },
})
