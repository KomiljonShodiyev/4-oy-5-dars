// const usersList = [
//     {
//         Id:1,
//         name:"Botir",
//         age:20,
//         hobby:"Football"
//     },
//     {
//         Id:2,
//         name:"Anvar",
//         age:22,
//         hobby:"Bassketball"
//     },
//     {
//         Id:3,
//         name:"Shohrux",
//         age:20,
//         hobby:"Bassketball"
//     },
//     {
//         Id:4,
//         name:"Akram",
//         age:20,
//         hobby:"Football"
//     },
// ]

// function collectNames(arr){
//     let res = []
//     for(let user of arr){
//         if(user.age > 20){
//             res.push(user.name)
//         }
//     }
//     return res

//     }

// let res = collectNames(usersList)
// console.log(res);

// 3-masala
// let numbers = [22,112,34,222,123,43];

// function changeArr(arr){
//     let max = arr[0]
//     for(let num of arr){
//         if (num >= max){
//             max = num
//         }
//     }
//     arr.unshift(max)
//     return arr;
// }
// const res = changeArr(numbers)
// console.log(res);

// 3-masala










// let size = prompt("Size kiriting!")
// let userList = []

// function fillNamesInArr(arr){
//     for(let i = 0 ; i < size ; i++){
//         let enterName = prompt(`${i + 1} - ism kiriting!`)
//         arr.push(enterName)
//     }
//     return arr
// }

// const filledNameList = fillNamesInArr(userList)

// let findName = prompt("Siz topmoqchi bolgan ismni kiriting")

// function findNameFunc(arr, searchName){
//     let isMavjud = 0
//     for(let userName of arr){
//         if(userName != searchName){
//             isMavjud++
//         }
//     }
//     if(isMavjud > 0){
//         arr.push(searchName)
//     }
//     return arr
// }
// const lastRes = findNameFunc(filledNameList, findName)
// console.log(lastRes);




// 5-masala

// function reverseArray(n) {
//     let array = [];
//     for (let i = 0; i < n; i++) {
//         array.push(i);
//     }

//     let reversedArray = array.reverse();

//     return reversedArray;
// }

// // Misol uchun, agar 10 kiritsak
// let n = 10;
// console.log(reverseArray(n));





// -----------------------6-rasm-----------------------


// 1-masala

// function ikkiSoniQosh() {
//     // Foydalanuvchidan birinchi sonni so'raymiz
//     var a = parseFloat(prompt("Birinchi sonni kiriting:"));
    
//     // Foydalanuvchidan ikkinchi sonni so'raymiz
//     var b = parseFloat(prompt("Ikkinchi sonni kiriting:"));
    
//     // Ikkala sonni qo'shamiz
//     var natija = a + b;
    
//     // Natijani ko'rsatamiz
//     alert("Ikkala sonning yig'indisi: " + natija);
// }

// // Funksiyani chaqiramiz
// ikkiSoniQosh();


// 1-masala



// 2-masala



// function arraydagiSonlarniQosh(arr) {
//     let yigindi = 0;
    
//     for (let i = 0; i < arr.length; i++) {
//         if (typeof arr[i] === 'number') {
//             yigindi += arr[i];
//         }
//     }
    
//     return yigindi;
// }

// // Funksiyani sinab ko'rish
// let array = [1, 2, 3, 4, 5];
// let natija = arraydagiSonlarniQosh(array);
// console.log(natija);  // 15


// 2-masala







// 3-masala


// function faqatMusbatSonlar(arr) {
//     return arr.filter(function (element) {
//         return typeof element === 'number' && element > 0;
//     });
// }

// let array = [1, -2, 3, -4, 5, 0, -1, 8];
// let musbatSonlar = faqatMusbatSonlar(array);
// console.log(musbatSonlar);  // [1, 3, 5, 8]


// 3-masala



// 4-masala


// function string(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         if (typeof arr[i] === 'string') {
//             if (!isNaN(arr[i])) {
//                 arr[i] = Number(arr[i]);
//             } else {
//                 arr[i] = 0;
//             }
//         }
//     }
//     return arr;
// }

// let array = ["5", 2, "true", "salom", "42", "hello"];
// let changeArr = string(array);
// console.log(changeArr);  // [5, 2, 0, 0, 42, 0]

// 4-masala



// 6-masala



// function ortaArifmetika() {
//     let array = [];
    
//     for (let i = 0; i < 3; i++) {
//         let son = parseFloat(prompt((i + 1) + "-sonni kiriting:"));
//         array.push(son);
//     }
    
//     let yigindi = 0;
//     for (let i = 0; i < array.length; i++) {
//         yigindi += array[i];
//     }
    
//     let ortaArifmetik = yigindi / array.length;
    
//     alert("Kiritilgan sonlarning o'rta arifmetikasi: " + ortaArifmetik);
// }

// ortaArifmetika();



// 6-masala



// // 7-masala


//  function firstnum(arr) {
//      if (arr.length > 0) {
//          if (arr[0] % 2 === 0) {
//              arr[0] += 1;
//          } else {
//              arr[0] += 1;
//          }
//      }
//      return arr;
//  }

//  let array1 = [4, 2, 3, 5];
//  let changeArr = firstnum(array1);
//  console.log(changeArr);  

//  let array2 = [5, 2, 3, 5];
//  let changeArr2 = firstnum(array2);
//  console.log(changeArr2);  // [6, 2, 3, 5]






// 8-masala



// function umumiyQiymatlar(arr1, arr2) {
//     let umumiy = [];

//     for (let i = 0; i < arr1.length; i++) {
//         if (arr2.includes(arr1[i])) {
//             if (!umumiy.includes(arr1[i])) {
//                 umumiy.push(arr1[i]);
//             }
//         }
//     }

//     console.log("Umumiy qiymatlar:", umumiy);
// }

// let array1 = ["olma", "banan", "anor", "shaftoli", "uzum"];
// let array2 = ["banan", "shaftoli", "o'rik", "anjir", "olma"];

// umumiyQiymatlar(array1, array2);


// 8-masala