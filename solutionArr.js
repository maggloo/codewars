function solution(str){
    const strArr = str.split('')
   let arr = []
   for (let i = 0; i < str.length; i++){
     if (i % 2 === 0) {
       if (!strArr[i+1]) arr.push(strArr[i] + "_")
       else arr.push(strArr[i] + strArr[i+1]) 
     }
   }
  return arr
}
