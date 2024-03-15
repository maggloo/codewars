// Return the output array, and ignore all non-op characters
function parse( data )
{
  let val = 0
  let arr = []
  let arrOld = data.split('')
  for (let i = 0; i < arrOld.length; i++){
    switch(arrOld[i]) {
      case 'i': ++val
        break
      case 's': val = val*val
        break
      case 'd': --val
        break
      case 'o': arr.push(val)
        break   
      defaut:
        break
    }
  }
  return arr
}
