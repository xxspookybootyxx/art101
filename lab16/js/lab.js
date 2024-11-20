/*
lab.js - Image based Sorting Program
This program assigns a user a personality type based on the image they click.
Author: Lucy Jordan
Date: 2024
*/

$(document).ready(function () {
    // Function to handle sorting based on the image clicked
    function assignHouse(house) {
      // Display the result in the output div
      const result = `<p>Your personality type is <strong>${house}</strong></p>`;
      $("#output").html(result); // Update the #output div with the result
    }
  
    // Event listeners for image clicks
    $("#image1").click(function () {
      assignHouse("ISTJ - Apple: Reliable. Trustworthy. Keeps doctors away.");
    });
  
    $("#image2").click(function () {
      assignHouse("ENFP - Banana: Who doesn't love bananas? As a bonus, the peel can be used to prank your friends when you're done.");
    });
  
    $("#image3").click(function () {
      assignHouse("ESTJ - Blueberry: Efficient. Grab a handful and go!");
    });
  
    $("#image4").click(function () {
      assignHouse("INFP - Cherry: Cute and looks so inviting. If you take things slow, nothing tastes sweeter. But if you're hasty and bite down too quick, it'll get ya and you might get hurt.");
    });
  
    // Add more event listeners if you want to include more images
    $("#image5").click(function () {
      assignHouse("INTJ - Pomegranate: Tough shell, and it'll make you work for every juicy morsel even once you've gotten inside. However, you actually feel like you came out of the experience a better person, having persevered and put it in the effort to dig out each bite.");
    });
  
    $("#image6").click(function () {
      assignHouse("ENTP - Durian: Either you love them or hate them, not in between. Banned in multiple countries. Enjoys causing a stink and seeing people's reactions.");
    });
  
    $("#image7").click(function () {
      assignHouse("ESTP - Fig: Part fruit, part wasp. 100% badass");
    });
  
    $("#image8").click(function () {
      assignHouse("ENTJ - Grape: Only fruit fit for emperors. Best enjoyed in your palace while being fanned by palm leaves.");
    });
  
    $("#image9").click(function () {
      assignHouse("INTP - Tomato: Is it a fruit or a vegetable? Nobody knows, except for the tomato itself. Here's some education to go along with your meal.");
    });
  });
  