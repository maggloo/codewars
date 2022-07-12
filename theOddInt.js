function findOdd(A) { 
  for (let i = 0; i < A.length; i++) {
    let arr = A.filter(x => {
      return x === A[i];
    })
    if (arr.length % 2 != 0) {
      return A[i];
    } 
  }
}
