Array.prototype.toTwenty = function() {
  var arr = [];
  for (i = 1; i <= 20; i++) {
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

function binarySearch(numbers, key) {
  var max = numbers.length - 1;
  var min = 0;
  while (min <= max) {
    mid = Math.floor((min + max) / 2);
    if (numbers[mid] === key) {
      return mid;
    }

    if (numbers[mid] < key) {
      min = mid + 1;
    } else if (numbers[mid] > key) {
      max = mid - 1;
    }
  }

  return -1;
}

Array.prototype.toTwenty = function() {
  var arr = []
  for (i = 1; i <= 20; i++) {
    arr.push(i);
  }
  return arr;
}
