function moveZeros(arr) {
  return arr.sort((a,b) => {
    return (b === 0) ? -1 : 0;
  })
}
