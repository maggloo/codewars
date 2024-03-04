function isPangram(string){
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
  const strArr = string.toLowerCase().split(' ')
  for (let i = 0; i < alphabet.length; i++){
    if (string.includes(alphabet[i])){
      alphabet.splice(i, 1)
      alphabet[i] = ""
    }
  }
  return !alphabet.join('')
}
