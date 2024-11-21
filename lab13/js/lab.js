/*
FizzBuzz Program
Author: Lucy Jordan
Date: 2024
*/

$(document).ready(function () {
    // Function to perform FizzBuzz logic
    function fizzBuzz() {
        let oneLongString = ""; // Initialize an empty string for output

        // Loop through numbers 1 to 200
        for (let num = 1; num <= 200; num++) {
            let result = ""; // Reset result for each number

            // Check conditions and build the result string
            if (num % 3 === 0) result += "Fizz";
            if (num % 5 === 0) result += "Buzz";
            if (num % 7 === 0) result += "Boom";

            // If result is empty, just add the number
            if (result === "") {
                result = num;
            }

            // Append the result to the long string with a line break
            oneLongString += result + "<br>";
        }

        // Output the final string to the #output div
        $("#output").html(oneLongString);
    }

    // Call the fizzBuzz function to execute on page load
    fizzBuzz();
});
