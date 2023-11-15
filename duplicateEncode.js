function duplicateEncode(word){
   const str = word.toLowerCase().split('')
   return str.map( el => str.indexOf(el) === str.lastIndexOf(el) ? '(' : ')').join('')
}
