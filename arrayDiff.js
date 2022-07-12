function arrayDiff(a, b) {
  return a.filter(x => {
    return x !== b.find(z => z === x);
  });
}
