Array.prototype.toTwenty = function() {
  'use strict';
  var arr = [];
  var count = 0;
  for (var i = 1; i <= 20; i++) {
    count += i;
    arr.push(i);
  }
  return arr;
};

Array.prototype.toForty = function() {
  'use strict';
  var arr = [];
  for (var i = 2; i <= 40; i += 2) {
    arr.push(i);
  }
  return arr;
};

Array.prototype.toOneThousand = function() {
  'use strict';
  var arr = [];
  for (var i = 10; i <= 1000; i += 10) {
    arr.push(i);
  }
  return arr;
};

Array.prototype.search = function(key) {
  'use strict';
  var max = this.length - 1;
  var min = 0;
  var count = 0;
  while (min <= max) {
    var mid = Math.floor((min + max) / 2);
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
      };
    }

    if (this[max] === key) {
      return { index: max, count: count, length: this.length };
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

  return {
    count: count,
    length: this.length,
    index: -1
  };
};

module.exports = {
  Array: Array
};
