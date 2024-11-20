/*
lab.js - Sorting Hat Program
This program assigns a user to a fictional house based on the length of their name.
Author: [Your Name]
Date: 2024
*/

// Function to sort a user into a house
function sortingHat(str) {
    // Count the length of the string
    const length = str.length;
  
    // Use modulus operator to determine house
    const mod = length % 4;
  
    // Assign a house based on the value of mod
    if (mod === 0) {
      return "Gryffindor"; // Example from Hogwarts
    } else if (mod === 1) {
      return "Ravenclaw";
    } else if (mod === 2) {
      return "Hufflepuff";
    } else {
      return "Slytherin";
    }
  }
  
  // Event listener for button click
  $("#submit-button").click(function () {
    // Get the user's name from the input field
    const name = $("#name-input").val();
  
    // Run the sortingHat function and get the assigned house
    const house = sortingHat(name);
  
    // Create a styled paragraph and append it to the output div
    const result = `<p>The Sorting Hat has sorted you into <strong>${house}</strong>!</p>`;
    $("#output").html(result);
  });
  