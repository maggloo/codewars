function findMissingLetter(array)
{
  let alphLow = 'abcdefghijklmnopqrstuvwxyz'
  const alphabet = array[0] == array[0].toUpperCase() ? alphLow.toUpperCase().split('') : alphLow.split('')
  return alphabet.slice(alphabet.findIndex(el => el === array[0]), alphabet.findIndex(el => el === array[array.length - 1])).find((el, i) => el !== array[i])
}
