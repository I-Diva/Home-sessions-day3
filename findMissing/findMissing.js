function findMissing(arr1, arr2) {
  var myArr1 = arr1.length;
  var myArr2 = arr2.length;
  for (var i = 0; i < myArr2; i++) {
    if (myArr1.indexOf(myArr2[i]) == -1) {
      return arr2[i];
    }
  }
  return 0
}
findMissing([4], [4]);
