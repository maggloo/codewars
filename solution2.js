function solution(string) {
 const strArr = string.split('')
 return strArr.map(el => el.toUpperCase() === el ? " " + el : el).join('')
}
