function warnTheSheep(queue) {
    if (queue.indexOf('wolf') === queue.length - 1) {
      return "Pls go away and stop eating my sheep";
    } else {
      queue.reverse();
      return `Oi! Sheep number ${queue.indexOf('wolf')}! You are about to be eaten by a wolf!`
    }
}
