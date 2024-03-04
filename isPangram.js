function isPangram(string){
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
  return alphabet.filter((el) => string.toLowerCase().includes(el)).length === alphabet.length
}
