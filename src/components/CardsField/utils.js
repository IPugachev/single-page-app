export const filter = (state, cardsData) => {
  let arr = cardsData.map((item) => {
    let guests = state.guestsAdults + state.guestsKids + state.guestsBabies < item.maxGuests,
      price = state.from * 100 <= item.price && item.price <= state.to * 100,
      table = state.table === true ? item.table : true,
      breakfast = state.breakfast === true ? item.breakfast : true,
      bathrooms = state.bathrooms === item.bathrooms || state.bathrooms === 0,
      beds = state.beds >= item.beds || state.beds === 0,
      bedrooms = state.bedrooms >= item.bedrooms || state.bedrooms === 0,
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
  arr.sort()
  let indexOfFalse = arr.indexOf(false)
  arr = arr.splice(0, indexOfFalse !== -1 ? indexOfFalse : arr.length)
  return arr
}
