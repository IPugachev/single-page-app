export const splitNumbers = (number) => {
  let duplicate = number
  duplicate = Math.trunc(duplicate / 1000)
  number = number - duplicate * 1000
  return duplicate + ' ' + number
}
