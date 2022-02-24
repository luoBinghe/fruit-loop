export const formatter = (value) => {
  return value.replace('.', ',')
}

export const parseDouble = (value) => {
  return parseFloat(value).toFixed(2).replace('.', ',')
}