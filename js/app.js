'use strict';

// let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

// let father = document.getElementById('father');

// function render(contryName,min,max,avg) {

//     let contry = document.createElement('h2');
//     contry.textContent = contryName;
//     father.appendChild(contry);

//     let contryList = document.createElement('ul');
//     father.appendChild(contryList);



//     let all ;


//     for (let index = 0; index < hours.length; index++) {
//         let randomNum = Math.ceil(Math.random() * (max - min)) + min;
//         let hoursItem = document.createElement('li');
//          all =Math.ceil(all+ randomNum*avg)
//         hoursItem .textContent = `${hours[index]} ${Math.ceil( randomNum*avg)} cookies`;

//         contryList.appendChild(hoursItem);
    
//     }  

//     let hoursItem = document.createElement('li');

//     hoursItem .textContent = `solid ${all} cookies`;
// }

// render('Seattle',23,65,6.3)
// render('Tokyo',3,24,1.2)
// render('Dubai',11,38,3.7)
// render('Paris',20,38,2.3)
// render('Lima',2,16,4.6)
///////////////////////////////
const hours = ['6am', '7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];

let parentElement = document.getElementById('father');



function Store(storeName, minCustomers, maxCustomers, avgCookies) {
    this.storeName = storeName;
    this.minCustomers = minCustomers;
    this.maxCustomers = maxCustomers;
    this.avgCookies = avgCookies;
    this.customersEachHour = [];
    this.cookiesEachHour = [];
    this.totalCookies = 0;
  }
  // Hourly customer calculation
  Store.prototype.calcHourlyCustomers = function() {
    for (var i = 0; i < hours.length; i++) {
      this.customersEachHour.push(Math.floor(Math.random() * (this.maxCustomers - this.minCustomers)) + this.minCustomers);
    }
  };
  // Hourly cookies calculation
  Store.prototype.calcCookiesEachHour = function() {
    for (var i = 0; i < hours.length; i++) {
      this.cookiesEachHour.push(this.customersEachHour[i] * Math.ceil(this.avgCookies));
    }
  };
  // Total cookies calculation
  Store.prototype.calcTotalCookies = function() {
    for (var i = 0; i < hours.length; i++) {
      this.totalCookies += this.cookiesEachHour[i];
    }
  };
  // Render to table
  Store.prototype.render = function() {
    this.calcHourlyCustomers();
    this.calcCookiesEachHour();
    this.calcTotalCookies();
//     // create table row
//     var tableRow = document.createElement('tr');
//     // create first table cell (store name)
//     var storeCell = document.createElement('td');
//     storeCell.textContent = this.storeName;
//     tableRow.appendChild(storeCell);
//     // loop over array and create other td's
//     for (var i = 0; i < hours.length; i++) {
//       var tableCell = document.createElement('td');
//       tableCell.textContent = this.cookiesEachHour[i];
//       tableRow.appendChild(tableCell);
//     }
//     // create total column
//     var totalCell = document.createElement('td');
//     totalCell.textContent = this.totalCookies;
//     tableRow.appendChild(totalCell);
//     // append
//     document.getElementById('table').appendChild(tableRow);
//     stores.push(this);
//   };
  
//   var footRow = document.createElement('tr');
  
//   var footName = document.createElement('th');
//   footName.textContent = 'Total';
//   footRow.appendChild(footName);
  
//   var collumnTotal = 0;
  
//   function total() {
//     for (var i = 0; i < hours.length; i++) {
//       for (var j = 0; j < stores.length; j++) {
//         collumnTotal = collumnTotal + stores[j].cookiesEachHour[i];
//       }
  
//       var footCell = document.createElement('th');
  
//       footCell.textContent = collumnTotal;
//       footCell.className = 'cellIndex';
//       footRow.appendChild(footCell);
//       collumnTotal = 0;
//     }
//   }
  
  function newTotal() {
    for (var i = 0; i < hours.length; i++) {
      for (var j = 0; j < stores.length; j++) {
        collumnTotal = collumnTotal + stores[j].cookiesEachHour[i];
      }
  
      var totalArray = document.getElementsByClassName('cellIndex');
      for (var k = 0; k < totalArray.length; k++) {
        var index = totalArray[i];
        index.textContent = collumnTotal;
      }
      collumnTotal = 0;
    }
  }
  
  
  // Form input and store creation
  
  function handleForm(e) {
    e.preventDefault();
    let store = e.target.store.value;
    let min = parseInt(e.target.min.value);
    let max = parseInt(e.target.max.value);
    let cookies = parseFloat(e.target.cookies.value);
  
     addNewLocation = new Store(store, min, max, cookies);
    addNewLocation.render();
  
    e.target.store.value = '';
    e.target.min.value = '';
    e.target.max.value = '';
    e.target.cookies.value = '';
    newTotal();
  }
  
  
//   document.getElementById('new-location-form').addEventListener('submit', handleForm);
  
  
  let Seattle = new Store('Seattle', 23, 65, 6.3);
  let Tokyo = new Store('Tokyo', 3, 24, 1.2);
  let Dubai = new Store('Dubai', 11, 38, 3.7);
  let Paris = new Store('Paris', 20, 38, 2.3);
  let Lima = new Store('Lima', 2, 16, 4.6);
  
  

  Seattle.render();
  Tokyo.render();
  Dubai.render();
  Paris.render();
  Lima.render();
  
  
  
  document.getElementById('tfoot').appendChild(footRow);
  console.log(stores);
  total();



