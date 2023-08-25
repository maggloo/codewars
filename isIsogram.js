function isIsogram(str){
  let found = true;
  for (let i = 0; i < str.length; i++) {
    found = str.toLowerCase().indexOf(str[i]) === str.toLowerCase().lastIndexOf(str[i])
    if (!found) {
      return false
    }
  }
  
  return found
}
