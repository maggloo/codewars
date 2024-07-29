function getSum(a, b)
{
   if (a === b) return a
  const [start, finish] = a > b ? [b, a] : [a, b]
  let sum = 0;
  for (let i = start; i <= finish; i++){
    sum += i
  }
  return sum
}
