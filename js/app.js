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



function SalmonCookie(storeName, minCust, maxCust, avgCookies) {
    this.storeName = storeName;
    this.minCust = minCust;
    this.maxCust = maxCust;
    this.avgCookies = avgCookies;
    this.cookiesPerHour = [];
    this.total = 0;
    this.getCustomer= function() {
        for(let i = 0; i < hours.length; i++) {
          let cookies = Math.ceil(getRandomCustomer(this.minCust, this.maxCust) * this.avgCookies);
          this.cookiesPerHour.push(cookies);
          this.total += cookies;
         
        }
    
        
      };
      this.render= function() {
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
    
        let total = document.createElement('th');
          tr.appendChild(total);
          total.textContent = this.total;
      }

}
let tr= document.createElement('tr');
let td1 = document.createElement('td');
        tr.appendChild(td1);

salesTable.appendChild(tr)

td1.textContent = 'Location';

for(let i = 0; i < hours.length; i++) {
let td1 = document.createElement('td');
        tr.appendChild(td1);

            td1.textContent = hours [i];
        }
         td1 = document.createElement('td');
         tr.appendChild(td1);

        td1.textContent = 'total';




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

  function makeTableHeader () {
    let tr = document.createElement('tr');
      salesTable.appendChild('tr');

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
    
      }

    // //   function makeTableFooter(){
    //     function makeTableFooter () {
    //         let tr = document.createElement('tr');
    //           salesTable.appendChild('tr');
        
    //            let th1 =document.createElement('th');
    //            tr.appendChild(th1);
    //            th.textContent = 'totals';
        
    //            for (let i = 0; i < hours.length; i++) {
    //                for (let j = 0; j < SalmonCookie.length; j++) {
    //                   let hourlyTotal =+SalmonCookieallCookies[j].cookiesPerHour                     
    //                }
    //                let th2 = document.createElement('th');
    //                tr.appendChild(th2);
    //                th2.textContent= hours[i];
    //            }
               
            //    let th3 =document.createElement('th');
            //    tr.appendChild(th);
            //   th3.textContent = 'the day totals';
            
            //   }
    
     

  








  

  

  
  function getRandomCustomer(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
  }

    
  

