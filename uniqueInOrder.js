var uniqueInOrder=function(iterable){
    if (!iterable.length) return []
   let arr = typeof(iterable) === 'string' ? iterable.split('') : iterable.toString().split(',') 
   let newArr = arr.reduce((sum, current, index) => {
     if (arr.join('').charAt(index + 1) === current) {
       if (index === 0) {
         return ''
       } else {
         return sum 
       }   
     } else {
       if (index === 0) {
         return sum
       } else {
         return sum = sum + current
       }       
     }    
   }, arr[0]).split('')
  return (!!(+newArr[0])) ? newArr.map(Number) : newArr
}
