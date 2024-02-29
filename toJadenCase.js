String.prototype.toJadenCase = function () {
    const strArr = this.split(' ')
    return strArr.map((element) => {
    return element.split('').map((el, i) => i === 0 ? el.toUpperCase() : el).join('')
  }).join(' ')
};
