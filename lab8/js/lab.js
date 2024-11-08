//Lucy Jordan <meljorda@ucsc.edu> 7 November 2024

var numbers = [1, 2, 3, 4, 5];

function lucyfunction(x) {
    var results = x * x;
    return results;
}

console.log(lucyfunction(2));

var mappedNumbers = numbers.map(lucyfunction);
console.log("Mapped Results: ", mappedNumbers);

var newMappedNumbers = numbers.map(function(x) {
    var results = x + 1;
    return results;
});

console.log("New Mapped Results: ", newMappedNumbers);