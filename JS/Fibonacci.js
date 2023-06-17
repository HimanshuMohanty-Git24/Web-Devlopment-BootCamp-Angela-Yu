var first = 0;
var second = 1;
var n =10;
console.log(first);
console.log(second);
for (let i = 0; i < n; i++) {
    var nextNum=first+second;
    console.log(nextNum);
    first=second;
    second=nextNum;
}