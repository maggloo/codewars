function fibonnachi(n) {
  if (n <= 1) return n
  return fibonnachi(n - 1) + fibonnachi(n - 2)
}
