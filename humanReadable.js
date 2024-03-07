function humanReadable (seconds) {
 let time = []
 const hours = seconds / 3600
 if (seconds >= 3600) {
   const hoursLeft = seconds % 3600
   let min = hoursLeft / 60
   let sec = hoursLeft % 60
   time = [...time, Math.floor(hours), Math.floor(min), Math.floor(sec)]
  } else {
    let sec = seconds % 60
    time = [...time, Math.floor(hours), Math.floor(seconds / 60), Math.floor(sec)]
  }
  
  return time.map(el => el < 10 ? '0' + el : el.toString()).join(':')
}
