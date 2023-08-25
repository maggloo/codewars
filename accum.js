function accum(s) {
	return s.split('').map((el, i) => `${el[0].toUpperCase()}${el.toLowerCase().repeat(i)}`).join('-') 
}
