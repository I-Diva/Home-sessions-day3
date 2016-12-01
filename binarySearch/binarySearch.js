Array.prototype.toTwenty = function() {
  var arr = [];
  var count = 0;
  for (i = 1; i <= 20; i++) {
    count += i;
    arr.push(i);
  }
  return arr;
}

Array.prototype.toForty = function() {
  var arr = [];
  for (var i = 2; i <= 40; i += 2) {
    arr.push(i);
  }
  return arr;
}

Array.prototype.toOneThousand = function() {
  var arr = [];
  for (var i = 10; i <= 1000; i += 10) {
    arr.push(i);
  }

  return arr;
}

Array.prototype.search = function(key) {
  var max = this.length - 1;
  var min = 0;
  count = 0;
  while (min <= max) {
    mid = Math.floor((min + max) / 2);
    if (this[mid] === key) {
      return {
        index: mid,
        count: count,
        length: this.length
      };
    }

    if (this[min] === key) {
      return {
        index: min,
        count: count,
        length: this.length
      }
    }

    if (this[max] === key) {
      return max;
    }

    if (this[mid] < key) {
      min = mid + 1;
      max = max - 1;
    } else if (this[mid] > key) {
      max = mid - 1;
      min = min + 1;
    }
    count++;
  }

  return -1;
}

module.exports = {
  Array: Array
};
