// Lucy Jordan <meljorda@ucsc.edu> 7 November 2024
// Program that sorts the letters in your name

function sortLetters() {
    // Get the user's name
    var userName = window.prompt("What is your name?");

    // Split the string into an array of characters, sort them, and join back into a string
    var sortedName = userName.split('').sort().join('');

    // Return the sorted name
    return sortedName;
}

// Call the function and output its result to the webpage.
document.writeln(sortLetters());