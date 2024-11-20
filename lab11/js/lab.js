/*
lab.js - This simple JavaScript/jQuery script gets a value from an input field and outputs a modified version.

   Requirements: jQuery must be loaded for this script to work.

Author: Lucy Jordan
Date: 2024
*/

// Sorts the characters of a string in alphabetical order.
function sortString(inputString) {
  if (!inputString) return "Please enter a valid name.";
  // Convert the string to an array, sort it, and join it back
  return inputString.split('').sort().join('');
}

// Click listener for button
$("#submit").click(function () {
  // Get the value of the input field
  const userName = $("#user-name").val();

  // Sort the string
  const userNameSorted = sortString(userName);

  // Append the sorted name to the output div
  $("#output").html('<div class="text"><p>' + userNameSorted + '</p></div>');
});

// Change Background Color Button
$("#change-color").click(function () {
  const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
  $("body").css("background-color", randomColor);
});

// Reset Page Button
$("#reset-page").click(function () {
  // Reset styles and content
  $("body").css("background-color", "");
  $("#output").html("");
  $(".minor-section").css({
      transform: "",
      color: "",
  });
});