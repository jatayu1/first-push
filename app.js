var base = Number(prompt(`input the base`));
var exponant = Number(prompt(`input the exponant`));
var kth = Number(prompt(`input the place of digit you want from right`));

var multilication = base;
for (var i = 0; i < exponant - 1; i++) {
  multilication = multilication * base;
}
var stringResult = multilication.toString();

var output = stringResult[stringResult.length - kth];
console.log(output);

// var base = Number(prompt(`input the base`));
// var exponant = Number(prompt(`input the exponant`));
// var kth = Number(prompt(`input the place of digit you want from right`));

// var powerResult = Math.pow(base, exponant);
// var stringResult = powerResult.toString();

// var output = stringResult[stringResult.length - kth];
// console.log(output);
