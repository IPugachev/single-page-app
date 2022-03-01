export const initialValues = {
  list: [
    { title: 'Завтрак', name: 'breackfast' },
    { title: 'Письменный стол', name: 'table' },
    { title: 'Стул для кормления', name: 'babyChair' },
    { title: 'Кроватка', name: 'babyBed' },
    { title: 'Телевизор', name: 'tv' },
    { title: 'Шампунь', name: 'shampoo' },
  ],

  default: [
    { title: 'Можно курить', name: 'smoking' },
    { title: 'Можно с питомцами', name: 'pets' },
    { title: 'Можно пригласить гостей (до 10 человек)', name: 'party' },
  ],

  rich: [
    { title: 'Широкий коридор', subtitle: 'Ширина коридоров в номере не менее 91 см.', name: 'wideHall' },
    {
      title: 'Помощник для инвалидов',
      subtitle: 'На 1 этаже вас встретит специалист и проводит до номера.',
      name: 'invalidHelper',
    },
  ],
  guests: [
    { title: 'взрослые', count: 0, name: 'guestsAdults' },
    { title: 'дети', count: 0, name: 'guestsKids' },
    { title: 'младенцы', count: 0, name: 'guestsBabies' },
  ],
  rooms: [
    { title: 'спальни', count: 2, name: 'bedrooms' },
    { title: 'кровати', count: 2, name: 'beds' },
    { title: 'ванные комнаты', count: 0, name: 'bathrooms' },
  ],
  slider: [
    { min: 0, name: 'from' },
    { max: 150, name: 'to' },
  ],
}
