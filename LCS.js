function LCS(x, y) {
  const xArr = x.split('')
  const yArr = y.split('')
  let arr = xArr.length > yArr.length ? xArr : yArr
  return arr.map(el => {
    return (arr == xArr ? yArr : xArr).includes(el) ? el : ""
  }).join('')
}
