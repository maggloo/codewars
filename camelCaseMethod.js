String.prototype.camelCase=function(){
  return this.split(' ').map(el => el.split('').map((el, i) => !i ? el.toUpperCase() : el).join('')).join('')
}
