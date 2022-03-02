export const filter = (state, cardsData) => {
  let cardsArray = cardsData.map((item) => {
    let guests = state.guests[0].count + state.guests[1].count + state.guests[2].count <= item.maxGuests,
      price = state.from * 100 <= item.price && item.price <= state.to * 100,
      table = state.table === true ? item.table : true,
      breakfast = state.breakfast === true ? item.breakfast : true,
      bedrooms = state.rooms[0].count <= item.bedrooms,
      beds = state.rooms[1].count <= item.beds,
      bathrooms = state.rooms[2].count <= item.bathrooms,
      wideHall = state.wideHall === true ? item.wideHall : true,
      party = state.party === true ? item.party : true,
      pets = state.pets === true ? item.pets : true,
      invalidHelper = state.invalidHelper === true ? item.invalidHelper : true,
      smoking = state.smoking === true ? item.smoking : true,
      babyChair = state.babyChair === true ? item.babyChair : true,
      babyBed = state.babyBed === true ? item.babyBed : true,
      tv = state.tv === true ? item.tv : true,
      shampoo = state.shampoo === true ? item.shampoo : true

    return guests &&
      price &&
      table &&
      breakfast &&
      bathrooms &&
      beds &&
      bedrooms &&
      wideHall &&
      party &&
      pets &&
      invalidHelper &&
      smoking &&
      babyChair &&
      babyBed &&
      tv &&
      shampoo
      ? item
      : false
  })
  cardsArray.sort()
  let indexOfFalse = cardsArray.indexOf(false)
  cardsArray = cardsArray.splice(0, indexOfFalse !== -1 ? indexOfFalse : cardsArray.length)
  return cardsArray
}
