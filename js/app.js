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


const hours = ['6am', '7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];

let parentElement = document.getElementById('father');

let seattle = {
  name: 'Seattle',
  minCust: 23,
  maxCust: 65,
  agvCookie: 6.3,
  cookiesPerHour: [],
  total: 0,
  getCustomer: function() {
    for(let i = 0; i < hours.length; i++) {
      
      let cookies = Math.ceil(getRandomCustomer(this.minCust, this.maxCust) * this.agvCookie);

      this.cookiesPerHour.push(cookies);

      this.total += cookies;
      
    }

    
  },
  render: function() {
    let h2 = document.createElement('h2');
    parentElement.appendChild(h2);
    h2.textContent = this.name;

    let ul = document.createElement('ul');
    parentElement.appendChild(ul);

    for(let i = 0; i < hours.length; i++) {
      let li = document.createElement('li');
      ul.appendChild(li);
      li.textContent = `${hours[i]}: ${this.cookiesPerHour[i]} cookies`;
    }

    let total = document.createElement('li');
      ul.appendChild(total);
      total.textContent = `Total: ${this.total} cookies`;
  }
}

let tokyo = {
  name: 'Tokyo',
  minCust: 3,
  maxCust: 24,
  agvCookie: 1.2,
  cookiesPerHour: [],
  total: 0,
  getCustomer: function() {
    for(let i = 0; i < hours.length; i++) {
    

      let cookies = Math.ceil(getRandomCustomer(this.minCust, this.maxCust) * this.agvCookie);

      this.cookiesPerHour.push(cookies);

      this.total += cookies;
      
    }

    
  },
  render: function() {
    let h2 = document.createElement('h2');
    parentElement.appendChild(h2);
    h2.textContent = this.name;

    let ul = document.createElement('ul');
    parentElement.appendChild(ul);

    for(let i = 0; i < hours.length; i++) {
      let li = document.createElement('li');
      ul.appendChild(li);
      li.textContent = `${hours[i]}: ${this.cookiesPerHour[i]} cookies`;
    }

    let total = document.createElement('li');
      ul.appendChild(total);
      total.textContent = `Total: ${this.total} cookies`;
  }
}


seattle.getCustomer();
seattle.render();
tokyo.getCustomer();
tokyo.render();

function getRandomCustomer(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}




let Dubai = {
    name: 'Dubai',
    minCust: 11,
    maxCust: 38,
    agvCookie: 3.7,
    cookiesPerHour: [],
    total: 0,
    getCustomer: function() {
      for(let i = 0; i < hours.length; i++) {
        
  
        let cookies = Math.ceil(getRandomCustomer(this.minCust, this.maxCust) * this.agvCookie);
  
        this.cookiesPerHour.push(cookies);
  
        this.total += cookies;
       
      }
  
     
    },
    render: function() {
      let h2 = document.createElement('h2');
      parentElement.appendChild(h2);
      h2.textContent = this.name;
  
      let ul = document.createElement('ul');
      parentElement.appendChild(ul);
  
      for(let i = 0; i < hours.length; i++) {
        let li = document.createElement('li');
        ul.appendChild(li);
        li.textContent = `${hours[i]}: ${this.cookiesPerHour[i]} cookies`;
      }
  
      let total = document.createElement('li');
        ul.appendChild(total);
        total.textContent = `Total: ${this.total} cookies`;
    }
  }
  
  Dubai.getCustomer();
  Dubai.render();
  
  function getRandomCustomer(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
  }
  
  let Paris = {
    name: 'paris',
    minCust: 20,
    maxCust: 38,
    agvCookie: 2.3,
    cookiesPerHour: [],
    total: 0,
    getCustomer: function() {
      for(let i = 0; i < hours.length; i++) {
    
  
        let cookies = Math.ceil(getRandomCustomer(this.minCust, this.maxCust) * this.agvCookie);
  
        this.cookiesPerHour.push(cookies);
  
        this.total += cookies;
        // this.total = this.total + cookies;
      }
  
    },
    render: function() {
      let h2 = document.createElement('h2');
      parentElement.appendChild(h2);
      h2.textContent = this.name;
  
      let ul = document.createElement('ul');
      parentElement.appendChild(ul);
  
      for(let i = 0; i < hours.length; i++) {
        let li = document.createElement('li');
        ul.appendChild(li);
        li.textContent = `${hours[i]}: ${this.cookiesPerHour[i]} cookies`;
      }
  
      let total = document.createElement('li');
        ul.appendChild(total);
        total.textContent = `Total: ${this.total} cookies`;
    }
  }
  
  
  
  Paris.getCustomer();
  Paris.render();
 
  function getRandomCustomer(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
  }



  let Lima = {
    name: 'lima',
    minCust: 2,
    maxCust: 16,
    agvCookie: 4.6,
    cookiesPerHour: [],
    total: 0,
    getCustomer: function() {
      for(let i = 0; i < hours.length; i++) {
    
  
        let cookies = Math.ceil(getRandomCustomer(this.minCust, this.maxCust) * this.agvCookie);
  
        this.cookiesPerHour.push(cookies);
  
        this.total += cookies;
        // this.total = this.total + cookies;
      }
  
    },
    render: function() {
      let h2 = document.createElement('h2');
      parentElement.appendChild(h2);
      h2.textContent = this.name;
  
      let ul = document.createElement('ul');
      parentElement.appendChild(ul);
  
      for(let i = 0; i < hours.length; i++) {
        let li = document.createElement('li');
        ul.appendChild(li);
        li.textContent = `${hours[i]}: ${this.cookiesPerHour[i]} cookies`;
      }
  
      let total = document.createElement('li');
        ul.appendChild(total);
        total.textContent = `Total: ${this.total} cookies`;
    }
  }
  
  
  
  Lima.getCustomer();
  Lima.render();
 
  function getRandomCustomer(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
  }