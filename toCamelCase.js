function toCamelCase(str){
 let arrStr = str.split('')
  for (let i = 0; i < str.length; i++) {
    if (arrStr[i] === "-" || arrStr[i] === "_") {
      arrStr.splice(i, 1)
      arrStr[i] = arrStr[i].toUpperCase()
    }
  }
  return arrStr.join('')
}
