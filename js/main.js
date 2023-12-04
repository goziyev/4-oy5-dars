// 1-misol
// let a  =  +prompt("son kiriting ");
// let sum  = 0;
// for (let index = 0; index <= a; index++) {
//     if (index % 2 == 1) {
//         sum+=index;
//     }}
//     console.log(sum);

// 2-misol
// let a  =  +prompt("son kiriting ");
// let sum  = 0;
// for (let index = 0; index <= a; index++) {
//     if (index % 3 == 0) {
//         sum*=index;
//     }}
//     console.log(sum);

// // 3-misol
// let a  =  +prompt("son kiriting ");
// let b  =  +prompt("son kiriting ");
// let sum  = 0;
// for (let index = a; index <= b; index++) {
//     if (index % 3 == 0) {
//         sum++
//     }}1
//     console.log(sum);

// 4-misol
// let a  =  +prompt("son kiriting ");
// let b  =  +prompt("son kiriting ");
// let sum  = 0;
// for (let index = a; index <= b; index++) {
//     if (index % 3 == 0 && index % 7 == 0 ) {
//         sum+=index
//     }}1
//     console.log(sum);

// 5-misol
// let a  =  +prompt("1-son kiriting ");
// let b  =  +prompt("2-son kiriting ");
// let sum  = 0;
// let total = 0;
// for (let index = a; index <= b; index++) {
//     if (index % 2 == 1) {
//         sum = index ** 2;
//         total += sum;
//         }
//     }

//     console.log(total);

//6-misol
// let a  =  +prompt("1-son kiriting ");
// let b  =  +prompt("2-son kiriting ");
// let sum  = 0;
// let total = 1;
// for (let index = a; index <= b; index++) {
//     if (index % 2 == 0) {
//         sum = index ** 3;
//         total *= sum;
//         }
//     }

//     console.log(total);

// 7-misol
// let a = +prompt("Marhamat son kiriting: ");
// for (let i = 0; i <= a; i++) {
//     if (a % i == 0) {
//         console.log(i);
//     }
// }

// 8-misol
// let a = +prompt("Marhamat son kiriting: ");
// let count = 0
// for (let i = 0; i <= a; i++) {
//     if (a % i == 0) {
//         count++
//     }
// }
// console.log(count);

// 9-misol
// let a = +prompt("Marhamat son kiriting: ");
// let count = 0;
// let res = ""
// for (let i = 0; i <= a; i++) {
//     if (a % i == 0) {
//         count++
//     }
// }
// if (count <= 2) {
//     res = "Bu tub son"
// }
// else{
//     res = "Tub son emas"
// }

// console.log(res);

// Vaqt
// let soat = +prompt("Soatni kiriting: ");
// let minut = +prompt("Minutni kiriting: ");
// let a = +prompt("Marhamat qo'shmoqchi bo'lgan vaqtingizni kirting:");
// let b = 00;
// b = a % 60;
// minut += b;

// if (a >= 60) {
//   soat++;
// }

// if (minut >= 60) {
//     minut -=60 ;
//     soat++
//   }

// if (soat >= 24) {
//     soat = 00;
//   }

// if (soat == 0 && minut == 0 ) {
// console.log(`${soat}0 : ${minut}0`);

// }

// else if (soat == 0) {
// console.log(`${soat}0 : ${minut}`);
// }
// else if (minut == 0) {
// console.log(`${soat} : ${minut}0`);

// }
// else{
// console.log(`${soat} : ${minut}`);

// }

// Harorat
// let a = +prompt("Temperaturani kiriting");
// let k = a + 273.15;
// let f = a * 1.8 + 32.0;
// console.log(k.toFixed(5));
// console.log(f.toFixed(5));

// Karralar yig'indisi
// let a = +prompt("Marhamat son kiriting: ");
// let total = 0;
// for (let i = 0; i <= a; i++) {
//     if (i % 3 == 0 || i % 5 == 0 || i % 7 == 0) {
//         total+=i
//     }
// }
// console.log(total);

// G'aroyib yig'indi

let a = +prompt("A Sonni kiriting");
let b = +prompt("B Sonni kiriting");
let total = 0;
for (var i = a; i <= b; i++) {
  if (i % 3 == 0 && i % 7 != 0) {
    total += i;
  }
}
console.log(total);
