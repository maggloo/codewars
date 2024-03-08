function count(string) {
  const countObj = {}
  for (let i = 0; i < string.length; i++){
    (!Object.keys(countObj).includes(string[i])) ? countObj[string[i]] = 1 : countObj[string[i]] += 1
  }
  return countObj
}
