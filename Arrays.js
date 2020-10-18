//Array - collection of data items stored in continuous memory location


//creating an array 

let arr = [];

let arr2 = new Array();
//index --   0 1 2 3 4 5
let newArr =[2,3,4,5,1,9];//one dimensional array


// console.log(newArr.length);//6

// console.log(newArr[0]);
// console.log(newArr[1]);
// console.log(newArr[2]);
// console.log(newArr[3]);
// console.log(newArr[4]);
                          //6

// for(let i=0 ;i< newArr.length;i++){
//   console.log(newArr[i]);
// }


//----------------print in reverse order------------- 
// for(let i = newArr.length-1 ; i >=0; i--){
 
//   console.log(newArr[i]);//2 ,

// }


let twoDimeArr = [ [1,2] , [3 ,4] , [5,6,7]]

// for(let i=0; i<twoDimeArr.length ;i++){
//   // console.log(twoDimeArr[i]);
//   for(let j=0 ;j<twoDimeArr[i].length;j++){
//     console.log(twoDimeArr[i][j]); //i=1;j=1 4
//   }
// }

//nested for-loops

//------------------- Array methods --------------------

// let arr3 =[2,3,4,6,7,8];

//Push()
//- adds a value to end of the array 

// arr3.push(5);
// console.log(arr3);

//Unshift()
//- adds value to begining of the array
// arr3.unshift(1);
// console.log(arr3)

//pop()
//removes element from end of the array
// arr3.pop();
// console.log(arr3);
//shift()
//removes element from begining of the array
// arr3.shift();
// console.log(arr3);

//splice
//synatx -> ArrayName.splice(startIndex,no.of elements to be removed , add elemnts)
//  let removedValue = arr3.splice(1,3 , 9,10);
// console.log(arr3);
// console.log(removedValue);

//slice 
//syntax - ArrayName.slice(startIndex,lastIndex+1)
//copy elements from one array to other 
//copy values 3,4,6, from arr3
// let arr3 =[2,3,4,6,7,8];

// let copyArr = arr3.slice(1,4);
// console.log(copyArr);

//reverse()
//reverses the array
// let revArr =[2,3,4,5];
// revArr.reverse();
// console.log(revArr);

//sort()
//arranging value of array to ascending order 

let arrSort= ["syed","andrew","bindhu","abu"];
console.log(arrSort.sort());

let numSort = [2,3,1,6,4,22];
//[1,3,2,6,4,22]
//[1,2,3,6,4,22]
//[1,2,3,4,6,22]
// numSort.sort(function(a,b){ return a-b;});// Tim sort //ascending order
// console.log(numSort);

//descending order
// numSort.sort(function(a,b){ return b-a;});
// console.log(numSort);


//convert array to string

let arr4 = ['a','b','c','d'];
//abcd

let str = arr4.join('');
console.log(str);
console.log(str.length);
//es6 map filter forEach some every reduce 










