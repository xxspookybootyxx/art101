// Lucy Jordan <meljorda@ucsc.edu> 7 November 2024
// Program that sorts the letters in your name

function sortLetters() {
    // Get the user's name
    var userName = window.prompt("What is your name?");

    // If the user cancels or provides no input, return a default message
    if (!userName) {
        return "You did not provide a name!";
    }

    // Split the string into an array of characters, sort them, and join back into a string
    var sortedName = userName.split('').sort().join('');

    // Return the sorted name
    return `Here is your name sorted: ${sortedName}`;
}

function handlePrompt() {
    // Clear the previous result
    document.getElementById("output").innerHTML = "";

    // Get the result from sortLetters()
    const result = sortLetters();

    // Display the result in the output div
    document.getElementById("output").innerHTML = `<p>${result}</p>`;
}

// Wait 3 seconds before showing the initial prompt
setTimeout(function () {
    handlePrompt();
}, 3000);

// Add an event listener for the button
document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("ask-again");
    button.addEventListener("click", handlePrompt);
});
