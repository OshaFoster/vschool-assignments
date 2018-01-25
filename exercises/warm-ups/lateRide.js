function lateRide(n) {
  var hour = Math.floor(n/60);
  console.log(hour)
var second = n%60;
console.log(second)
    return Math.floor(hour/10) + hour %10 + Math.floor(second/10) +second%10;
}

console.log(lateRide(808))
