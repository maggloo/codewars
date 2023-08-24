function firstNonRepeatingLetter(s) {
  let stringArray = s.toLowerCase();
  
  for (let i = 0; i < stringArray.length; i++) {
    
       if (stringArray.indexOf(stringArray[i]) === stringArray.lastIndexOf(stringArray[i])){
           return s[i]
           
       }
    
  }
 return ''
}
