//**********push()***********//
let arr1 = new Array(1, 2, 3, 5);
Array.prototype.myPush = function (index) {
  let value = this.length;
  this[value] = index;
};
arr1.myPush(12);
//console.log(arr1)

//**********pop()***********//

let arr2 = new Array(1, 2, 3, 5);

Array.prototype.myPop = function () {
  this.pop();
};
arr2.myPop();
console.log(arr2);
