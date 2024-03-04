function wave(str){
  let returnArray = [];
  for (let i=0; i < str.length; i++) {
    if (str[i] !== " ") {
      let newWord = str.split('').map((el, index) => i === index ? el.toUpperCase() : el)
      returnArray.push(newWord.join('')) 
    }
  
  }
  return returnArray
}
