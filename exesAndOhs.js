function XO(str) {
     return str.split('').filter( el => el.toLowerCase() === 'x').length === str.split('').filter( el => el.toLowerCase() === 'o').length 
}
