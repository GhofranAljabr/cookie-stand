'use strict';

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

let father = document.getElementById('father');

function render(contryName,min,max,avg) {

    let contry = document.createElement('h2');
    contry.textContent = contryName;
    father.appendChild(contry);

    let contryList = document.createElement('ul');
    father.appendChild(contryList);



    let all ;


    for (let index = 0; index < hours.length; index++) {
        let randomNum = Math.ceil(Math.random() * (max - min)) + min;
        let hoursItem = document.createElement('li');
         all =Math.ceil(all+ randomNum*avg)
        hoursItem .textContent = `${hours[index]} ${Math.ceil( randomNum*avg)} cookies`;

        contryList.appendChild(hoursItem);
    
    }  

    let hoursItem = document.createElement('li');

    hoursItem .textContent = `solid ${all} cookies`;
}

render('Seattle',23,65,6.3)
render('Tokyo',3,24,1.2)
render('Seattle',23,65,6.3)
render('Seattle',23,65,6.3)
render('Seattle',23,65,6.3)