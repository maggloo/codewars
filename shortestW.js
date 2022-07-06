function findShort(s){
  let l = [];
  s.split(' ').map(x => l.push(x.length))
  return Math.min(...l);
}
