function titleCase(title, minorWords) {
  const wordsArr = minorWords ? minorWords.toLowerCase().split(' ') : ''
  return title && title.toLowerCase().split(' ').map((el, i) => wordsArr.includes(el) && i ? el : el[0].toUpperCase() + el.slice(1, el.length)).join(' ')
}
