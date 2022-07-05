function countSheeps(arrayOfSheep) {
  let counter = 0;
  arrayOfSheep.forEach(element => element? counter++ : counter);
  return counter;
}
