function persistence(num) {
   let numb = num.toString().split('');
   let times = 0;
    while (numb.length > 1 ) {
     numb = numb.reduce((accumulator, currentValue) => {
     return accumulator * currentValue
    }, 1).toString().split('')
       times++
    }
  return times
}
