const array1 = [1, 4, 9, 16];

const map1 = array1.map((x) => x * 2);

console.log(map1);  // [ 2, 8, 18, 32 ]

// array1.map(callback(currentValue[, index[, array]])[, thisArg])

var num = [1, 4, 9];
var roots = num.map(Math.sqrt);
console.log(roots);

var keyArr = [
    { key: 1, value: 10 },
    { key: 2, value: 20 },
    { key: 3, value: 30 }
];

var reformat = keyArr.map(function (obj) {
    var robj = {};
    robj[obj.key] = obj.value;
    return robj;
})

console.log(reformat);

var numbers = [1, 4, 9];
var doubles = numbers.map(function (num) {
    return num * 2;
});
console.log(doubles);

var map = Array.prototype.map;
var a = map.call("Hello World!", function (x) {
    return x.charCodeAt(0);
});
console.log(a);

// var elems = document.querySelectorAll("select option:checked");
// var values = [].map.call(elems, function (obj) {
//     return obj.value;
// })
// console.log(values);

console.log(["1", "2", "3"].map(parseInt));

function returnInt(element) {
    return parseInt(element, 10);
}
console.log(["1", "2", "3"].map(returnInt));

console.log(["1", "2", "3"].map((str) => parseInt(str)));

console.log(["1", "2", "3"].map(Number));

console.log(["1.1", "2.2e2", "3e300"].map(Number));