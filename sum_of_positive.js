function positiveSum(arr) {
  let counter = 0;
  arr.forEach (element => {
    if (element > 0) {
      counter += element;
    }
  })
  return counter;
}
