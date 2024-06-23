/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
     const stack = [];
     const map = {
            '}': '{',
            ']': '[',
            ')': '(',
     };
  
     for (const el of s) {
       if (el in map) {
         if (stack.length && stack[stack.length-1] === map[el]){
           stack.pop()
         } else {
           return false
         }
       } else {
         stack.push(el)      
       }
     }
  return stack.length === 0
};

console.log(isValid('()[]{}('))
