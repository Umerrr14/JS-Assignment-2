"use strict";

// answer 1


function addNumberClosure(num) {
    function addNum(x) {
        return x + num;
    }
    return addNum;
}

let finalNum = addNumberClosure(55);
console.log(finalNum(5));



//answer 2

function searchArray(arr, val) {

    if (arr.length === 0) {
        return false;
    }

    if (arr[0] === val) {
        return true;
    }

    return searchArray(arr.slice(1), val);
}

const arr = [1, 2, 3, 4, 5];
console.log(searchArray(arr, 3)); // Output: true
console.log(searchArray(arr, 6)); // Output: false


//answer 3

function addParagraph(text) {
    const newParagraph = document.createElement('p');
  
    newParagraph.textContent = text;
  
    document.body.appendChild(newParagraph);
  }

  //answer 4

  function addListItem(text) {
    const newListItem = document.createElement('li');
  
    newListItem.textContent = text;
  
    const unorderedList = document.querySelector('ul');
    unorderedList.appendChild(newListItem);
  }


  //answer 5

  function changeBackgroundColor(element, color) {
  element.style.backgroundColor = color;
}


//answer 6

function saveToLocalStorage(key, object) {
    localStorage.setItem(key, JSON.stringify(object));
  }

  //answer 7

  function getFromLocalStorage(key) {
    const storedObject = localStorage.getItem(key);
    return JSON.parse(storedObject);
  }

  //answer 8

  
  function saveObjectToLocalStorage(object) {
    for (const key in object) {
      localStorage.setItem(key, object[key]);
    }
    return object;
  }
  
  



































































































/* const calcAverage = (a, b, c) => a + b + c / 3;

const calcDolphineAve = calcAverage(85, 54, 41);
const calcKoalasAve = calcAverage(23, 34, 27);


const checkWinner = function (avgDolphin, avgKoalas) {
    if (avgDolphin >= 2 * avgKoalas) {
        console.log(` Dolphins are the winners ( ${avgDolphin} vs ${avgKoalas})`);
    }
    else if
        (avgKoalas >= 2 * avgDolphin)
        console.log(` Koalas are the winners ( ${avgDolphin} vs ${avgKoalas})`);
    else
        console.log(Nowinner);

}

checkWinner(calcDolphineAve, calcKoalasAve);
*/

/*function calcTemp(tempInFerhiet) {
    const c = (tempInFerhiet - 32) * 5 / 9;
    console.log(`Temp in C = ${c} `);
}

calcTemp(82);
calcTemp(42);
calcTemp(106);
calcTemp(57);
*/

// let areaOfRectangle = (a, b) => `The sum of given numbers is ${a + b}`;



// console.log(areaOfRectangle(5, 6));

// const jonas = {
//     birthYear=1991
//     job='teacher';
//     hasDriverLicence=true;
// }

// console.log(`Jonas is a ${2037 - jonas.birthYear} years old ${jonas.job}`)

// const mark = {
//     fullName: 'Mark Miller',
//     mass: 78,
//     height: 1.69,
//     calcBMI: function () {
//         this.bmi = this.mass / this.height ** 2;
//         return this.bmi;
//     }
// }
// mark.calcBMI();
// console.log(mark.bmi);

// const john = {
//     fullName: 'John Smith',
//     mass: 92,
//     height: 1.95,
//     calcBMIOfJohn: function () {
//         this.bmi = this.mass / this.height ** 2;
//         return this.bmi;
//     }
// }
// john.calcBMIOfJohn();
// console.log(john.bmi);


// if (john.bmi > mark.bmi) {
//     console.log(`${john.fullName} BMI ${(john.bmi)} is higher than ${mark.fullName}'s BMI ${mark.bmi} `);
// }
// else {
//     console.log(`${mark.fullName} BMI ${(mark.bmi)} is higher than ${john.fullName}'s BMI ${john.bmi} `);

// }



// const bill = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

// console.log(bill);
// const tips = [];
// const total = [];

// function calcTip() {

//     for (let i = 0; i < bill.length; i++) {
//         console.log(bill[i]);

//         const finalTip = bill[i] * 0.10;
//         const totalBill = finalTip + bill[i];

//         console.log(totalBill);
//     }


// }

// calcTip();


