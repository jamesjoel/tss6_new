// var demo = require("./demo")
// var x = demo.test();

// var y = x.log(5);

// y.info();

// var demo = require("./demo");
// var x =demo();
// x.info();

var x = require("string-reverse");
var rand = require("random-string-gen");

// var a = "rohit sharma";

// var b = x(a);

// console.log(b);
var a = rand({ type : 'numeric', length : 10 });
console.log(a);