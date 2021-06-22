'use strict';


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
// ///////////////////////////////

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
let parentElement =document.getElementById('father');
 let father = document.getElementById('father');
 let salesTable = document.getElementById('salesTable');
let fform = document.getElementById("new-location-form");

let total=0

function myFunction() {
  document.getElementById("myForm").submit();
}
function SalmonCookie(storeName, minCust, maxCust, avgCookies) {
    this.storeName = storeName;
    this.minCust = minCust;
    this.maxCust = maxCust;
    this.avgCookies = avgCookies;
    this.cookiesPerHour = [];
    this.total = 0;
    allCookies.push(this)
}
let allCookies = [];
    SalmonCookie.prototype.getCustomer= function() {
        for(let i = 0; i < hours.length; i++) {
          let cookies = Math.ceil(getRandomCustomer(this.minCust, this.maxCust) * this.avgCookies);
          this.cookiesPerHour.push(cookies);
          this.total += cookies;
         
        }
    
        
      };
      SalmonCookie.prototype.render= function() {
        let tr = document.createElement('tr');
        salesTable.appendChild(tr);

        
        
        let th = document.createElement('th');
        tr.appendChild(th);
        
        th.textContent = this.storeName;
    
        for(let i = 0; i < hours.length; i++) {
          let td = document.createElement('td');
          tr.appendChild(td);

          td.textContent = this.cookiesPerHour[i] ;
        }
    
         total = document.createElement('th');
          tr.appendChild(total);
          total.textContent = this.total;
      }


let tr= document.createElement('tr');
let td1 = document.createElement('td');

        tr.appendChild(td1);

salesTable.appendChild(tr)


function getTime() {
  td1.textContent = 'Location';
  
  for(let i = 0; i < hours.length; i++) {
  let td1 = document.createElement('td');
          tr.appendChild(td1);
  
              td1.textContent = hours [i];
          }
           td1 = document.createElement('td');
           tr.appendChild(td1);
  
          td1.textContent = 'total';
}

getTime()



let Seattle = new SalmonCookie('Seattle', 23, 65, 6.3);
 let Tokyo = new SalmonCookie('Tokyo', 3, 24, 1.2);
let Dubai = new SalmonCookie('Dubai', 11, 38, 3.7);
 let Paris = new SalmonCookie('Paris', 20, 38, 2.3);
 let Lima = new SalmonCookie('Lima', 2, 16, 4.6);
 
 
 
 Seattle.getCustomer();
 Tokyo.getCustomer();
 Dubai.getCustomer();
 Paris.getCustomer();
 Lima.getCustomer();
 
 Seattle.render();
 Tokyo.render();
 Dubai.render();
 Paris.render();
 Lima.render();
 
//  makeTableHeader();

//   function makeTableHeader () {
//     let tr = document.createElement('tr');
//       salesTable.appendChild('tr');

    //    let th1 =document.createElement('th');
    //    tr.appendChild(th1);
    //    th.textContent = 'location';

    //    for (let i = 0; i < hours.length; i++) {
    //        let th2 = document.createElement('th');
    //        tr.appendChild(th2);
    //        th2.textContent= hours[i];
    //    }
    //    l
    //    let th3 =document.createElement('th');
    //    tr.appendChild(th);
    //   th3.textContent = 'the day totals';

    let storeName =document.getElementById('storeInput');
    let minn =document.getElementById('minCust');
    let maxx =document.getElementById('maxCust');
    let cookieInput =document.getElementById('cookieInput');

    function submitForm(e) {
      e.preventDefault();

      salesTable.innerHTML=''
      getTime()
      Seattle.getCustomer();
      Tokyo.getCustomer();
      Dubai.getCustomer();
      Paris.getCustomer();
      Lima.getCustomer();
      
      Seattle.render();
      Tokyo.render();
      Dubai.render();
      Paris.render();
      Lima.render();

      let amman = new SalmonCookie(storeName.value, minn.value, maxx.value, cookieInput.value);

      amman.getCustomer();
 
      amman.render();
 
      makeTableFooter ()
      console.log(storeName.value);
      
    }
    
    fform.addEventListener('submit', submitForm);

    //   function makeTableFooter(){
        function makeTableFooter () {

            let tr = document.createElement('tr');
              salesTable.appendChild(tr);
        
               let th1 =document.createElement('th');
               tr.appendChild(th1);
               th1.textContent = 'totals';
               let totalOfTotal = 0
               for (let i = 0; i < hours.length; i++) {
                   let totalPH = 0
                   for (let j = 0; j < allCookies.length; j++) {
                      totalPH +=allCookies[j].cookiesPerHour[i]   
                                       
                   }
                totalOfTotal+= totalPH
                    
                   let th2 = document.createElement('th');
                   tr.appendChild(th2);
                   th2.textContent= totalPH;

                }
                let th3 =document.createElement('th');
                tr.appendChild(th3);
               th3.textContent = totalOfTotal;


               }
               
              makeTableFooter();
            
           
    
     

  








  

  

  
  function getRandomCustomer(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
  }

    
  

