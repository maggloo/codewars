function spinWords(string){
  let a = string.split(' ');
  let b = a.map(x => {
    if (x.length > 4) {
    return x.split('').reverse().join('');
    } else {
      return x;
    }
    });
  return b.toString().split(',').join(' ');
}
