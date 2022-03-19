/*
let obj = {
  name : "Husan",
  age : 28,
  arr : []
};
function one() {
  return 1;
}

let arr = [1, 2, 3];
let arrObj = [
  {id : 1}, 
  {id : 1}, 
  {id : 1},
  () => {
    return 1;
  },
  one,
  function name() {

  }
];

console.log(arrObj[4]());

let mathOne = {
  pow : (a, b) => {
    return a**b;
  },
  sqrt : (a) => {
    return a ** 0.5;
  }
}

console.log(Math.pow(15, 2));
console.log(mathOne.pow(15, 2));
*/

/*
let obj = {
  id : 1
}

let obj2 = obj;

obj.id = 2;

console.log(obj2);

let arr = [1, 2, 34, 5, 6, 7, 8];
let k = 3;
let b = [];

for(let i = 0; i < arr.length; i++){
  if(k - 1 != i){
    b.push(arr[i]);
  }
}
arr = b;
console.log(arr);
*/

/*
const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

for(let i = 0; i < ages.length; i++){
  console.log(ages[i]);
}

ages.forEach((el, index, arr) => {
  console.log(el * 2);
  console.log(index);
  console.log(arr);
  if(el == 45){
    console.log(index);
  }
  if(index == 11){
    console.log(el);
  }
});

let one = (el, index) => {
  if(index == 11){
    console.log(el);
  }
}

ages.forEach(one);


let a = [];

for(let i = 0; i < ages.length; i++){
  if(ages[i] > 18){
    a.push(ages[i]);
  }
}

console.log(a);

// let o = ages.filter((el) => {
//   // if(el > 18) return true;
//   return el < 18;
// });

let o = ages.filter((el) => el < 18);

console.log(o);
*/

/*
const companies = [
  {
    name : "Cpmpany One",
    category : "Finance",
    start : 1981,
    end : 2004
  },
  {
    name : "Cpmpany Two",
    category : "Retail",
    start : 1992,
    end : 2008
  },
  {
    name : "Cpmpany Three",
    category : "Auto",
    start : 1992,
    end : 2007
  },
  {
    name : "Cpmpany Four",
    category : "Retail",
    start : 1989,
    end : 2010
  },
  {
    name : "Cpmpany Five",
    category : "Technology",
    start : 2009,
    end : 2014
  },
  {
    name : "Cpmpany Six",
    category : "Finance",
    start : 1987,
    end : 2010
  },
  {
    name : "Cpmpany Seven",
    category : "Auto",
    start : 1986,
    end : 1996
  },
  {
    name : "Cpmpany Eight",
    category : "Technology",
    start : 2011,
    end : 2016
  },
  {
    name : "Cpmpany Nine",
    category : "Retail",
    start : 1981,
    end : 1989
  }
]; 

// const retailCoArray = companies.filter((companiesObj) => {
//   if(companiesObj.category == "Retail") return true;
// });

const retailCoArray = companies.filter((companiesObj) => companiesObj.category == "Retail");

console.log(retailCoArray);

const yearCom = companies.filter((el) => el.start > 1985 && el.end < 2010);

console.log(yearCom);
*/

/*
const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// let ages2 = ages.map((el) => {
//   return el * 2;
// });

let ages2 = ages.map((el) => el * 2);

console.log(ages2);
*/

/*
const companies = [
  {
    name : "Cpmpany One",
    category : "Finance",
    start : 1981,
    end : 2004
  },
  {
    name : "Cpmpany Two",
    category : "Retail",
    start : 1992,
    end : 2008
  },
  {
    name : "Cpmpany Three",
    category : "Auto",
    start : 1992,
    end : 2007
  },
  {
    name : "Cpmpany Four",
    category : "Retail",
    start : 1989,
    end : 2010
  },
  {
    name : "Cpmpany Five",
    category : "Technology",
    start : 2009,
    end : 2014
  },
  {
    name : "Cpmpany Six",
    category : "Finance",
    start : 1987,
    end : 2010
  },
  {
    name : "Cpmpany Seven",
    category : "Auto",
    start : 1986,
    end : 1996
  },
  {
    name : "Cpmpany Eight",
    category : "Technology",
    start : 2011,
    end : 2016
  },
  {
    name : "Cpmpany Nine",
    category : "Retail",
    start : 1981,
    end : 1989
  }
]; 

const ul = [];
let allItem = companies.map((el) => {
    return `<li> ${el.category} </li>`;
});

console.log(allItem);

ulHTML = document.querySelector("#demo");
ulHTML.innerHTML = allItem.join("");
*/

/*
const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// let a = ages.filter((el) => el < 18);
// a = a.map((el) => el * 2);
// a = a.filter((el) => el > 25);

let a = ages
  .filter((el) => el < 18)     
  .map((el) => el * 2)
  .filter((el) => el > 25);

console.log(a);
*/

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// const sortAges = ages.sort((a, b) => {
//   if(a > b){
//     return 1;
//   } else {
//     return -1;
//   }
// });

// const sortAges = ages.sort((a, b) => {
//   if(a < b){
//     return 1;
//   } else {
//     return -1;
//   }
// });

// const sortAges = ages.sort((a, b) => {
//   return a - b;
// });

// const sortAges = ages.sort((a, b) => {
//   return b - a;
// });

// const sortAges = ages.sort((a, b) => a - b);

// console.log(sortAges);

let a = ages
  .filter((el) => el < 18)     
  .map((el) => el * 2)
  .filter((el) => el > 25) 
  .sort((a, b) => a - b);

console.log(a);
