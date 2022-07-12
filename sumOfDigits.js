function digital_root(n) {
  let a = n.toString().split('');
  let summa;
  do {
    summa = a.reduce((sum, current) => {
    return +sum + +current;
    }, 0);
    a = summa.toString().split('');
  } while (a.length !== 1)
  return  summa;
}
