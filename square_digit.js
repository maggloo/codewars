function squareDigits(num){
  let splat = num.toString().split('');
  for (let i = 0; i < splat.length; i++) {
    if (+splat[i] > 0) {
      splat[i] = splat[i]**2;
    }    
  }
  return +splat.join('');
}
