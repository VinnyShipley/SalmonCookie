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

//returns array of cookie hourly sold
City.prototype.cookiePerDay = function (){
  for (let i=0; i <= 13; i++){
    this.cookiesSoldDailyArray.push(this.cookiePerHour());
  }
}

//Rendered text on page
City.prototype.render = function(){
  const containerElem = document.getElementById('cityEstimates');

  const articleElem = document.createElement('article');
  containerElem.appendChild(articleElem);

  //City Name
  const headingElem = document.createElement('h2');
  articleElem.appendChild(headingElem);
  headingElem.textContent = `${this.name}`;

  //Table of Projected Sales by Hour
  const tableElem = document.createElement('table');
  articleElem.appendChild(tableElem);


  //table header row
  function timeRowTitles(){
    for(let i = 0; i < timeArray.length; i++){
      const timeHeaderRow = document.createElement('th');
      tableElem.appendChild(timeHeaderRow);
      timeHeaderRow.textContent = `${timeArray[i]}`;
    }
  }
  timeRowTitles();

  // cookies sold hourly row 
  // function salesRowValues(){
  //   for(let i = 0; i < timeArray.length; i++){
  //     const salesValueRow = document.createElement('td');
  //     tableElem.appendChild(salesValueRow);
  //     salesValueRow.textContent = `${this.cookiesSoldDailyArray};`;
  //   }
  // }
  // salesRowValues();

}


const seattle = new City ('Seattle', 23, 65, 6.3);
const tokyo = new City ('Tokyo', 3, 24, 1.2);


seattle.cookiePerDay();
tokyo.cookiePerDay();
seattle.render();
tokyo.render();
