//Author: Lucy Jordan <meljorda@ucsc.edu>
//Created: 6th November

//Define Variables
myTransport = ["feet", "bike", "bus", "AmysCar"];

//create an object for my main ride
myMainRide = {
  make: 'HarleyDavidson',
  model: 'Teri',
  color: 'black',
  quirks: 'twineBinding',
  year: 2005,
  //we can define a function within our object called a method
  //that uses the value of year above using this year
  age : function()  {
    return 2024 - this.year;
  }
}

//output
document.writeln("My Main Ride: <pre>",
  JSON.stringify(myMainRide, null,), "<pre>");