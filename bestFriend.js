function bestFriend(txt, a, b) {
  return txt.split('').filter((el, i) => el === a && txt.split('')[i + 1] === b).length === txt.split('').filter(el => el === a).length
}
