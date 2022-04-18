 'use strict'

//Constructor function
function CookieStand(name, minCustAllDay, maxCustAllDay, avgCookiePerGuest) {
  this.name = name;
  this.minCustAllDay = minCustAllDay;
  this.maxCustAllDay = maxCustAllDay;
  this.avgCookiePerGuest = avgCookiePerGuest;
  this.custPerHour = this.generateCustPerHour();
  this.cookiesSoldDailyArray = this.generateCookiesPerHour();
  this.allDayTotalOneLocation = this.generateAllDayTotalOneLocation();
  
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
    cookieHourlyArray.push(singleHourCookieSales);
  }
  return cookieHourlyArray;
}

//Finds sum of total cookies sold at one location all day
CookieStand.prototype.generateAllDayTotalOneLocation = function (){
  let sumOfCookieArray = this.cookiesSoldDailyArray.reduce(function(a, b){
    return a + b;
  }, 0);
  return sumOfCookieArray;
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

//creates spaceholder cell so that the table lines up with itself
const spaceHolderCell = document.createElement('td');
tableElem.appendChild(spaceHolderCell);

//creates the time of day row
for (let i = 0; i < timeArray.length; i++) {
  const timeRowContent = document.createElement('td');
  tableElem.appendChild(timeRowContent);
  timeRowContent.textContent = `${timeArray[i]}`;
};

//looping text render of the city and the hourly sale of one location
CookieStand.prototype.render = function(){
  const newDataRow = document.createElement('tr');
  tableElem.appendChild(newDataRow);

  //cookie stand city name
  const cityCell = document.createElement('td');
  newDataRow.appendChild(cityCell);
  cityCell.textContent = `${this.name}`;

  //loop that prints the hourly sale of each location (unsummed), to the table
  for(let i = 0; i < timeArray.length; i++){
    const salesCellValues = document.createElement('td');
    newDataRow.appendChild(salesCellValues);
    salesCellValues.textContent = `${this.cookiesSoldDailyArray[i]}`;
  } 

  
  // adds all day totals for single location into cell
      const totalOneLocationAllDayCell = document.createElement('td');
      newDataRow.appendChild(totalOneLocationAllDayCell);
      totalOneLocationAllDayCell.textContent = `${this.allDayTotalOneLocation}`;
}

//adds cell above the daily totals
 const labelOfTotalByLocationPerDayColumn = document.createElement('td');
timeRowElem.appendChild(labelOfTotalByLocationPerDayColumn);
labelOfTotalByLocationPerDayColumn.textContent = `totals`;

//creates row that total by hour at location will live in
const totalRowElem = document.createElement('tr');
tableElem.appendChild(totalRowElem);

//creates blank spaceholder cell for total by hourly row 
const hourlyPlaceholderCell = document.createElement('td');
totalRowElem.appendChild(hourlyPlaceholderCell);


//populates the total by hour row
for (let i = 0; i < timeArray.length; i++){
const hourlyTotalCell = document.createElement('td');
totalRowElem.appendChild(hourlyTotalCell);
hourlyTotalCell.textContent = `Hourly Totals Needed`;
}

let cookieStands = [];

function createCookieStands(){
  const seattle = new CookieStand('Seattle', 23, 65, 6.3)
  seattle.render();
  cookieStands.push(seattle);

  const tokyo = new CookieStand('Tokyo', 3, 24, 1.2)
  tokyo.render();
  cookieStands.push(tokyo);

  const dubai = new CookieStand('Dubai', 11, 38, 3.7);
  dubai.render();
  cookieStands.push(dubai);

  const paris = new CookieStand('Paris', 20, 38, 2.3);
  paris.render();
  cookieStands.push(paris);

  const lima = new CookieStand('Lima', 2, 16, 4.6);
  lima.render();
  cookieStands.push(lima);
}



//New submission input function

function handleSubmit(event){
  const cityInputElem = event.target.cityname.value;
  const newMinCustPerHour = parseInt(event.target.minCust.value);
  const newMaxCustomerPerHour = parseInt(event.target.maxCust.value);
  const newAvgCookiePerGuest = parseFloat(event.target.avgCookiePerGuest.value);
 
  let newCityArray = [cityInputElem, newMinCustPerHour, newMaxCustomerPerHour, newAvgCookiePerGuest];
  return cookieStands.push(handleSubmit);

}
console.log(handleSubmit.event)


const formElem = document.getElementById('newCityInput');
formElem.addEventListener('submit', handleSubmit);


//populates the sales data into the table
createCookieStands();
