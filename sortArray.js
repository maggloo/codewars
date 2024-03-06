function sortArray(array) {
  let sorted = array.filter( el => el % 2 !== 0).sort((a, b) => a - b) 
  let arrInd = 0;
  outer:
  for (let i = 0; i < sorted.length; i++){
    inner:
    for (let j = arrInd; j < array.length; j++) {
       if (array[j] % 2 !== 0){
        array[j] = sorted[i] 
         arrInd++
         break inner
      }
      arrInd++
    }
  }
  return array
}
