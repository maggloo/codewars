//return the total number of smiling faces in the array
function countSmileys(arr) {
 let count = 0
  arr.map(el => {
    if (el.includes(':') || el.includes(';')){
      if (el.includes(')') || el.includes('D')){
       el.length >= 2 ? count++ : (el.includes('-') || el.includes('~')) ? count++ : el
      }
    }
  })
  return count
}
