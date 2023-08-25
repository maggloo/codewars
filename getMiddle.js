function getMiddle(s){
  let middleLetter = s.charAt((s.length / 2));
  if (s.length % 2 === 0) {  
    return `${s.charAt((s.length / 2) - 1)}${middleLetter}`
  }
  else {
    return middleLetter
  }
}
