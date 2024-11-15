/*
   lab.js - This simple JavaScript/jQuery script uses buttons to modify some elements on the page

   Requirements: jQuery must be loaded for this script to work.

   Author: Lucy Jordan
   Date: 2024
*/

$(document).ready(function() {
    console.log("jQuery version:", $.fn.jquery); // Test jQuery loading
    
    // Add button to challenge section
    $("#challenge").append("<button id='button-challenge'>Make Special</button>");

    // Add a click listener to the challenge button
    $("#button-challenge").click(function() {
        // Toggle the "special" class for the #challenge section
        $("#challenge").toggleClass("special");
    });
});