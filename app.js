 'use strict'

//Constructor function
function CookieStand(name, minCustAllDay, maxCustAllDay, avgCookiePerGuest) {
  this.name = name;
  this.minCustAllDay = minCustAllDay;
  this.maxCustAllDay = maxCustAllDay;
  this.avgCookiePerGuest = avgCookiePerGuest;
  this.custPerHour = this.generateCustPerHour();
  this.cookiesSoldDailyArray = this.generateCookiesPerHour();
}



//list of times
let timeArray = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

//returns the random range of customers per day
CookieStand.prototype.generateCustPerHour = function () {
  let span = this.maxCustAllDay - this.minCustAllDay;
  let range = Math.ceil((Math.random() * span) + this.minCustAllDay);
  return range;
}


//returns cookies sold per hour
CookieStand.prototype.generateCookiesPerHour = function () {
  let singleHourCookieSales;
  let cookieHourlyArray = [];
  for (let i = 0; i < timeArray.length; i++){
    singleHourCookieSales = Math.ceil(this.generateCustPerHour() * this.avgCookiePerGuest);
    cookieHourlyArray.push(singleHourCookieSales);}
  return cookieHourlyArray;
}


//Rendered text on page
//links to CookieStandEstimates in sales.html
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

//creates spaceholder cell so that the table lines up with itself
const spaceHolderCell = document.createElement('td');
tableElem.appendChild(spaceHolderCell);

for (let i = 0; i < timeArray.length; i++) {
  const timeRowContent = document.createElement('td');
  tableElem.appendChild(timeRowContent);
  timeRowContent.textContent = `${timeArray[i]}`;
};


//looping text render
CookieStand.prototype.render = function(){
  const newDataRow = document.createElement('tr');
  tableElem.appendChild(newDataRow);
  //CookieStand Name row
  const cityCell = document.createElement('td');
  newDataRow.appendChild(cityCell);
  cityCell.textContent = `${this.name}`;

  //loop that prints the hourly sale of each location (unsummed), to the table
  for(let i = 0; i < timeArray.length; i++){
    const salesCellValues = document.createElement('td');
    newDataRow.appendChild(salesCellValues);
    salesCellValues.textContent = `${this.cookiesSoldDailyArray[i]}`
  }
}


//creates the cookie sales per hour row
const salesRowElem = document.createElement('tr');
tableElem.appendChild(salesRowElem);

//creates heading for sales row
const salesRowHeading = document.createElement('th');
salesRowElem.appendChild(salesRowHeading);

const seattle = new CookieStand('Seattle', 23, 65, 6.3);
const tokyo = new CookieStand('Tokyo', 3, 24, 1.2);
const dubai = new CookieStand('Dubai', 11, 38, 3.7);
const paris = new CookieStand('Paris', 20, 38, 2.3)
const lima = new CookieStand('Lima', 2, 16, 4.6)

seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();