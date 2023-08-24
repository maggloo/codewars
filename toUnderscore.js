function toUnderscore(string) {
  let a = string.toString().split('');
  let newString = [];
  for (let i = 0; i < a.length; i++) {
    if (a[i] == a[i].toUpperCase() && a[i - 1] && !(a[i] * 1)){
      newString.push(`_${a[i].toLowerCase()}`)
    } else {
      newString.push(a[i].toLowerCase())
    }
  }
  return newString.join('')
}
