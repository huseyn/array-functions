Array.prototype.myFilter = function (fn) {
  const localArray = [];
  for (let i = 0; i < this.length; i++) {
    let item = this[i];
    let isSelected = fn(item, i);
    if (isSelected) localArray.push(item);
  }

  return localArray;
};
