const isValidLetter = (str) => {
  return str.toLowerCase() !== str.toUpperCase()
}

const isEqual = (str1 = '', str2 = '') => {
  return str1.toLowerCase() === str2.toLowerCase()
}

var isPalindrome = function(s) {
  let start = 0;
  let end = s.length - 1;
  
  while (start < end) {
    const firstChar = s[start];
    const lastChar = s[end];
    
    if (!isValidLetter(firstChar)){
      start += 1
      continue
    }
    if (!isValidLetter(lastChar)) {
      end -= 1
      continue
    }
    if (!isEqual(firstChar, lastChar)) {
      return false
    }
    start += 1
    end -= 1
  }
  return true
};

console.log(isPalindrome(`Madam, I'm Adam`));
console.log(isPalindrome('race a car'));
