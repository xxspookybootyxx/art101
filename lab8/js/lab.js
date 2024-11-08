// //Lucy Jordan <meljorda@ucsc.edu> 7 November 2024

// var numbers = [1, 2, 3, 4, 5];

// function lucyfunction(x) {
//     var results = x * x;
//     return results;
// }

// console.log(lucyfunction(2));

// var mappedNumbers = numbers.map(lucyfunction);
// console.log("Mapped Results: ", mappedNumbers);

// var newMappedNumbers = numbers.map(function(x) {
//     var results = x + 1;
//     return results;
// });

// console.log("New Mapped Results: ", newMappedNumbers);

//  // Your map results data
//  var mapResults = "Your map results here";

//  // Use jQuery to select the element by its ID and set the HTML content
//  $("#output").html(mapResults);

/*
Lucy Jordan <meljorda@ucsc.edu>
7 November 2024

This program demonstrates basic array operations and mapping functions in JavaScript. It includes creating an array of numbers, defining a named function for calculations, testing the function, using map with both named and anonymous functions to operate on array elements, and printing out results using console.log().

*/
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

// Assign mappedNumbers to mapResults
var mapResults = JSON.stringify(mappedNumbers); // Convert to string

// Use jQuery to select the element by its ID and set the HTML content
$("#output").html(mapResults);