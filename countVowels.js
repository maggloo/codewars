function getCount(str) {
  const VOWELS = "aeiou";
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (VOWELS.includes(str[i])) {
      count++;
    } 
  }
  return count;
}
