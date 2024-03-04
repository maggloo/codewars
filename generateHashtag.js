function generateHashtag (str) {
  let string = str.replace(/\s\s+/g, ' ')
  if (string.trim().length === 0) {
       return false;
  } else {
    const arr = string.split(" ");   
      for (var i = 0; i < arr.length; i++) {
      arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
      }
      const str2 = '#' + arr.join("");
      if (str2.length > 140) {
        return false
      } else {
        return str2;
      }

  }
}
