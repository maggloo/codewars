let voted = new Map()

function check_voter(name) {
  if (voted.get(name)){
    return 'kick them out!'
  }
  else {
    voted.set(name, true)
    return 'let them vote'
  }
}

console.log(check_voter('mark'))
console.log(check_voter('mike'))
console.log(check_voter('mike'))
