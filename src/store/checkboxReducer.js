const defaultState = {
  list: [
    { title: 'Завтрак', handle: false },
    { title: 'Письменный стол', handle: false },
    { title: 'Стул для кормления', handle: false },
    { title: 'Кроватка', handle: false },
    { title: 'Телевизор', handle: false },
    { title: 'Шампунь', handle: false },
  ],
  default: [
    { title: 'Можно курить', handle: false },
    { title: 'Можно с питомцами', handle: false },
    { title: 'Можно пригласить гостей (до 10 человек)', handle: false },
  ],
  rich: [
    { title: 'Широкий коридор', subtitle: 'Ширина коридоров в номере не менее 91 см.', handle: false },
    {
      title: 'Помощник для инвалидов',
      subtitle: 'На 1 этаже вас встретит специалист и проводит до номера.',
      handle: false,
    },
  ],
}

export const checkboxReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'CHANGE_CHECKBOX_LIST':
      return { ...state, list: action.update }
    case 'CHANGE_CHECKBOX_DEFAULT':
      return { ...state, default: action.update }
    case 'CHANGE_CHECKBOX_RICH':
      return { ...state, rich: action.update }

    default:
      return state
  }
}
