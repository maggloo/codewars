function duplicateCount(text){
  let count = 0;
  let string = text.toLowerCase().split('')
  for (let i = 0; i < string.length; i++) {
    if (string.indexOf(string[i]) !== string.lastIndexOf(string[i]) && !(string.slice(0, i).includes(string[i]))){
      count++
    }
  }
  return count 
}
