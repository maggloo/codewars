function findOutlier(integers){
  let filtered  = integers.filter(el => el % 2 === 0)
  return filtered.length === 1 ? integers.find(el => el % 2 === 0) : integers.find(el => el % 2 !== 0)
}
