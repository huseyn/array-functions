Array.prototype.myMap = function (fn) {
  const localArray = [];
  for (let i = 0; i < this.length; i++) {
    let item = this[i];
    let converted = fn(item, i);
    localArray.push(converted);
  }

  return localArray;
};
