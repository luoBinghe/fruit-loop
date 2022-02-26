export const formatter = (value) => {
  return value.replace('.', ',')
}

export const parseDouble = (value) => {
  return parseFloat(value).toFixed(2).replace('.', ',')
}

export const correctName = (value) => {
  switch(value){
    case 'maca': 
      return value.replace('c', 'ç')
    case 'pera': 
      return value.replace('e', 'ê')
    default:
      return value
  }
}