function alphabetPosition(text) {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const textArr = text.split(' ')
  return textArr.map((el) => (el.split('').map((item) => alphabet.includes(item.toUpperCase()) ? alphabet.indexOf(item.toUpperCase()) + 1 + " " : "")).join('')).join('').trim()
}
