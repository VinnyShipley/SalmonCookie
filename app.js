'use strict'

//Constructor function
function City (name, minCustAllDay, maxCustAllDay, avgCookiePerGuest){
  this.name = name;
  this.minCustAllDay = minCustAllDay;
  this.maxCustAllDay = maxCustAllDay;
  this.avgCookiePerGuest = avgCookiePerGuest;
  this.custPerHour = this.generateCustPerHour();
  this.randcookiePerHour = this.cookiePerHour();
  this.cookiesSoldDailyArray = [];
}

//list of times
let timeArray = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

//returns the random range of customers per day
City.prototype.generateCustPerHour = function(){
    let span = this.maxCustAllDay - this.minCustAllDay;
    let range = Math.ceil(Math.random()*span + this.minCustAllDay);
    return range;
}

//returns cookies sold per hour
City.prototype.cookiePerHour = function (){
  let cookieSoldHourly = Math.ceil(this.custPerHour*this.avgCookiePerGuest);
  return cookieSoldHourly;
}

//returns array of cookie hourly sold. needs fixing, only displaying one number
City.prototype.cookiePerDay = function (){
  for (let i=0; i <= 13; i++){
    this.cookiesSoldDailyArray.push(this.cookiePerHour());
  }
}

//Rendered text on page
//links to cityEstimates in sales.html
const containerElem = document.getElementById('cityEstimates');

//creates table element
const tableElem = document.createElement('table');
containerElem.appendChild(tableElem);

//creates the row that houses the hour slots
const timeRowElem = document.createElement('tr');
tableElem.appendChild(timeRowElem);

//prints to screen the time slots
const timeRowHeading = document.createElement('th');
timeRowElem.appendChild(timeRowHeading);
for(let i = 0; i<timeArray.length; i++){
  const timeRowContent = document.createElement('td')
  timeRowHeading.appendChild(timeRowContent);
  timeRowContent.textContent = `${timeArray[i]}`;
};

//creates the cookie sales per hour row
const salesRowElem = document.createElement('tr');
tableElem.appendChild(salesRowElem);

//prints to screen the name of the city

const cityRowHeading = document.createElement('th');
  salesRowElem.appendChild(cityRowHeading);

for(let i = 0; i<timeArray.length; i++){
  const cityRowContent = document.createElement('td');
  cityRowHeading.appendChild(cityRowContent);
  cityRowContent.textContent = `${`random`}`;
}











// const containerElem = document.getElementById('cityEstimates');
// const articleElem = document.createElement('article');
// containerElem.appendChild(articleElem);

// //Whole table element
// const tableElem = document.createElement('table');
// articleElem.appendChild(tableElem);


// //table body element where daily raw data is stored
// const tableBody = document.createElement('th');
// tableElem.appendChild(tableBody);

// //header of the time table row
// const timeTableHeader = document.createElement('th');
// articleElem.appendChild(timeTableHeader);



// //creates the time row of table/ prints it to page
// for(let i = 0; i < timeArray.length; i++){
//   const timeHeaderRow = document.createElement('td');
//   timeTableHeader.appendChild(timeHeaderRow);
//   timeHeaderRow.textContent = `${timeArray[i]}`;
// }


// //creates row that the sales values will go into
// const newDataRow = document.createElement('tr');
// tableElem.appendChild(newDataRow);



// //looping text render
// City.prototype.render = function(){
  
//   //City Name row
//   const headingElem = document.createElement('h2');
//   timeTableHeader.appendChild(headingElem);
//   timeTableHeader.textContent = `${this.name}`;

//   //cookies sold hourly row 
//   for(let i = 0; i < timeArray.length; i++){
//     const newDataRow = document.createElement('td');
//     tableBody.appendChild(newDataRow);
//     newDataRow.textContent = this.cookiesSoldDailyArray[i];
//   }
  


//}


const seattle = new City ('Seattle', 23, 65, 6.3);
const tokyo = new City ('Tokyo', 3, 24, 1.2);


seattle.cookiePerDay();
// seattle.render();
// tokyo.cookiePerDay();
// tokyo.render();
