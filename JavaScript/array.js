// array
// kamal chapagai sir ku
// let temperatureList = [3,87,2,9,6];
// console.log(temperatureList);

// let mixedArray = [1, "Suresh", true, null, undefined, 0];
// console.log(mixedArray);

// let students = ['rohan', 'shyam', 'ram']
// console.log(students[2]);
// console.log(students.length);
// for( let i=0; i<=students.length -1; i++){
// console.log(students[i]);
// }

// ? push, pop, shift, unshift, reverse, sort
//let numlist = [200,5500,276];
//numlist.push(700);
// numlist.pop();

//numlist.shift();  // remove first data from array
//numlist.unshift(6000,88); //add items to start of array
//numlist.reverse()
//console.log(numlist);

// ? more methods
// ? array loop 
// ? mao, filter, find, reduce

//const priceList = [100, 200, 300, 400, 500];
// ? map
// return new array
//to change array data
// original array size === returned array size
// priceList.map((item, index, array)=>{
//     console.log(item, index);
// });

// const newPriceList = priceList.map((item, index, array) =>{
//     return item+500;
// });
// console.log(newPriceList);

// const words = ['apple', 'ball', 'cat'];
 
// const newWords = words.map((item,index,array) =>{
    //const upperCaseWord = item.toUpperCase();
    // return upperCaseWord;
    //return item.toUpperCase();

//})
// console.log(newWords);

// const washingMachineList = [
//     {
//       brand: 'LG',
//       price: 999,
//     },
  
//     {
//       brand: 'Samsung',
//       price: 899,
//     },
  
//     {
//       brand: 'Whirlpool',
//       price: 1199,
//     },
//     {
//       brand: 'Xiaomi',
//       price: 799,
//     },
//   ];

//   ? increase price

// const newList = washingMachineList.map((item, index, array) =>{
//     return {brand : item.brand, price: item.price +100};
// });
// console.log(newList);

// filter
// loop
// return new array
//  more possability that original array size and return array size different
//  function => filters out items
// ? filters only provide selected item but does not change the value of array

// const priceList = [45,88,25,98,547,287];
// const newPriceList = priceList.filter((item,index, array)=>{
// return item>60;
// });
// console.log(newPriceList);


// ? Example 2
// const numList = [53, 63, 96, 30, 101, 300];

// const newNumList = numList.filter((item, index, array)=>{
//     if(item %2 === 0)
//         return item;
// });
// console.log(newNumList);

//  alternative code 
// const numList = [53, 63, 96, 30, 101, 300];

// const newNumList = numList.filter((item, index, array)=> item%2===0);
// console.log(newNumList);

//  find
// loop
// find return value => return only one value
// ? function => to find specific value

// const numList = [53, 63, 96, 30, 101, 300];
// const value = numList.find((item, index, array) => {
//     if(item === 101){
//         return item;
//     }
// });
// console.log(value);

// const numList = [53, 63, 96, 30, 101, 300];
// const value = numList.find((item, index, array) => item === 96);
// console.log(value);

// const sthg = [5, 6, 7 , 0];
// const value = sthg.find((item)=>{
//     return item === 0;
// });
// console.log(value);


//  forEach
// loop
// does not anything

// const mileageList = [34, 56, 82, 9,];
// let total = 0;
// mileageList.forEach((item)=>{
//     total=total + item;
// });
// console.log(total);

// const mileageList = [34, 56, 82, 9,];
//  reduce
// const value = mileageList.reduce((total, item, index, array) => {
//    return total + item;
// }, 0);
// console.log(value);


// a-b => ascending 
//  b-c => descending

// const mark = [30, 34, 87, 546, 97, 356];
// mark.sort((a, b)=> {
//     return b-a;

// })
// console.log(mark)



// const washingMachineList = [
//   {
//     brand: 'LG',
//     price: 999,
//   },

//   {
//     brand: 'Samsung',
//     price: 899,
//   },

//   {
//     brand: 'Whirlpool',
//     price: 1199,
//   },
// ];

//  find machines whose part is greater than 900

// const findPart = washingMachineList.filter((item, index, array) => {
//     if(item.price > 900)
//         return item;
// })
// console.log(findPart);

// ? find machine whose brand is whirlpool

// const findPart = washingMachineList.find((item, index, array) => {
//     if(item.brand === 'Whirlpool')
//         return item;
// })
// console.log(findPart);

// ? decerease price of samsung machine by 15 % as festival discount

// const findPart = washingMachineList.map((item, index, array) => {
//     if(item.brand === 'Samsung'){
//        return {
//         brand : item.brand,
//         price : item.price + 1.5* item.price,
//        }
//     }
//     else{
//         return item;
//     }
        
// })
// console.log(findPart);


// const productList = [
//     {
//       name: 'Shoes',
//       price: 5500,
//     },
//     {
//       name: 'Jacket',
//       price: 15000,
//     },
//     {
//       name: 'cap',
//       price: 1500,
//     },
//     {
//       name: 'Goggles',
//       price: 6000,
//     },
//     {
//       name: 'Trousers',
//       price: 5000,
//     },
//   ];
  
  // ?decrease every item price with 1000
  
  // ?filter items whose price is less than or equals to 5000
  
  // ?find price of item whose name is "cap"