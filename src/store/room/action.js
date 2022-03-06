export const roomActions = {
  SET_CURRENT_ROOM: 'SET_CURRENT_ROOM',
  BOOK_ROOM: 'BOOK_ROOM',
}

export const setCurrentRoom = (data) => ({
  type: roomActions.SET_CURRENT_ROOM,
  payload: { data },
})
export const bookRoom = () => ({
  type: roomActions.BOOK_ROOM,
})
