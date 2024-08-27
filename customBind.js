Function.prototype.myBind = function(ctx, ...args) {
  const _self = this
  return function(...args2){ 
    _self.call(ctx, ...args, ...args2)
  }
}
Function.prototype.myCall = function(ctx, ...args) {
  ctx._bla = this
  ctx._bla(...args)
}

const obj = {
  name: 'Rita!',
  lastName: 'Privalko',
  sayHi: function() {
    console.log(this.name, ...arguments)
  }
}

const obj1 = {
  name: 'Hanna'
}

const obj2 = {
  name: 'Sasha'
}


// const binded = obj.sayHi.myBind(obj2, 'Minsk') //ctx = obj2, this = sayHi
// .myBind(obj1,'100')() //ctx = obj1, this = function...


obj.sayHi.myCall(obj2, 'Minsk')
