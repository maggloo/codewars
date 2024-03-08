function toWeirdCase(string){
   let arr = string.includes(' ') ? string.split(' ') : string.split('')
  let newArr = arr.map((el, i) => {
    if (!string.includes(' ')) {
      return i % 2 === 0 ? el.toUpperCase() : el.toLowerCase()
    } else {
       return el.split('').map((element, index) => {
        return index % 2 === 0 ? element.toUpperCase() : element.toLowerCase()
      }).join('')
    }
  })
  return string.includes(' ') ? newArr.join(' ') : newArr.join('')
}
