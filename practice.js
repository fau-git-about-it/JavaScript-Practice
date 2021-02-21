let testArray1 = [1, 3, 4];
let testArray2 = [9, 2, 6];

//#1 - forEach() - start
Array.prototype.myEach = function (callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this);
  }
};
const testMyEach = function (p) {
  console.log(p);
};
testArray1.myEach(testMyEach);
//#1 - forEach() - end

//#5 - every() - start
Array.prototype.myEveryThang = function (callback) {
  for (let i = 0; i < this.length; i++) {
    if (this[i] !== undefined) {
      if (callback(this[i], i, this) === false) {
        return false;
      }
    }
  }
  return true;
};
const testMyEveryThang = function (p) {
  return p > 5;
};
console.log(testArray1.myEveryThang(testMyEveryThang));
//#5 - every() - end

//#9 - push() - start
Array.prototype.myPush = function (arr, elementToAdd) {
  if (arr.length === 0) {
    arr[0] = elementToAdd;
  } else {
    arr[arr.length] = elementToAdd;
  }
  return arr.length;
};

console.log(testArray1.myPush(testArray2, 7));
console.log(testArray2.myEach(testMyEach));
//#9 - push() - end
