// object1

// const me = {
//   firstName: "Abdulaziz",
//   lastName: "Toshpulatov",
//   age: 23,
//   languages: ["js", "python", "c++", "nodejs"],
//   friends: ["Jamshid", "Abbos", "Jalol", "Mar'uf"],
// };

// Object.prototype.toString = function () {
//   let str = "";
//   for (let key in this) {
//     if (Array.isArray(this[key])) {
//       str += `${key}: ${this[key].join(",")}\n`;
//     } else {
//       str += `${key}: ${this[key]}\n`;
//     }
//   }
//   return str;
// };

// console.log(me.toString());

// object2

// let n = 5;
// let res = {};

// for (let i = 1; i <= n; i++) {
//   res[i] = i * i;
// }

// console.log(res);

// object3

// const obj = {
//   a: 3,
//   b: 4,
//   c: 5,
// };

// const keys = Object.keys(obj);
// const values = Object.values(obj);

// let keysSum = 0;
// let valuesSum = 0;

// for (let i = 0; i < keys.length; i++) {
//   keysSum += keys[i].charCodeAt(0);
// }

// for (let j = 0; j < values.length; j++) {
//   valuesSum += values[j];
// }

// console.log("Kalitlarning yig'indisi:", keysSum);
// console.log("Qiymatlar yig'indisi:", valuesSum);

// object4

// let arr = ["Abdulaziz", "Safarmurod", "O’rol", "Jahongir"];
// let res = {};

// for (let i = 0; i < arr.length; i++) {
//   res[arr[i]] = arr[i].length;
// };

// console.log(res);

// object5

// const prod = { Apelsin: 10000, Olma: 12000, Mandarin: 8000, Banan: 20000 };

// const prodPrices = Object.values(prod);
// let sum = 0;

// for (let i = 0; i < prodPrices.length; i++) {
//   sum += prodPrices[i];
// }

// console.log("Barcha mahsulotlar miqdori:", sum);

// object6

// function obj(obj) {
//   const keys = Object.keys(obj);

//   for (let i = 0; i < keys.length; i++) {
//     if (typeof keys[i] !== "string") {
//       return true;
//     }
//   }
//   return false;
// }

// const testObj = { abc: 1, 123: 2, d: 5 };
// const res = obj(testObj);
// console.log(res);

// object7

// function falObj(obj) {
//   const newObj = {};
//   const keys = Object.keys(obj);

//   for (let i = 0; i < keys.length; i++) {
//     if (obj[keys[i]]) {
//       newObj[keys[i]] = obj[keys[i]];
//     }
//   }
//   return newObj;
// }

// const testObj = { a: false, b: 12, c: true, d: 0 };
// const resObj = falObj(testObj);
// console.log(resObj);

// object8

// function repNum(arr) {
//   let res = {};
//   for (let i = 0; i < arr.length; i++) {
//     if (res[arr[i]]) {
//       res[arr[i]] += 1;
//     } else {
//       res[arr[i]] = 1;
//     }
//   }
//   return res;
// }
// const numArray = [7, 8, 4, 5, 7, 5, 4, 8, 5, 4, 7, 9];
// const resObject = repNum(numArray);
// console.log(resObject);

// object9

// function objNum(num) {
//   const numString = String(num);
//   const classes = [
//     "birlar",
//     "minglar",
//     "millionlar",
//     "milliardlar",
//     "trilionlar",
//   ];
//   const res = {};
//   for (let i = 0; i < classes.length && i * 3 < numString.length; i++) {
//     const startIndex = numString.length - (i + 1) * 3;
//     const endIndex = numString.length - i * 3;
//     const classValue = numString.slice(startIndex, endIndex);
//     res[classes[i]] = Number(classValue);
//   }
//   return res;
// }

// const num = 8945472985629;
// const resObject = objNum(num);
// console.log(resObject);

// object10

// const books = [
//   {
//     title: "Halqa",
//     author: "Akrom Malik",
//     alrRead: false,
//   },
//   {
//     title: "Dunyo ishlari",
//     author: "O'tkir Hoshimov",
//     alrRead: true,
//   },
//   {
//     title: "Vaqtning qadri",
//     author: "Abdulfattoh Abu G'udda",
//     alrRead: false,
//   },
// ];

// for (let i = 0; i < books.length; i++) {
//   const book = books[i];
//   const readObj = book.alrRead ? "o'qilgan" : "o'qilmagan";
//   console.log(
//     `${i + 1}. ${book.author}ning "${book.title}" kitobi ${readObj};`
//   );
// }

// object11

// const obj = [
//   { name: "Product 1", price: 20000, discount: 10, quantity: 5 },
//   { name: "Product 2", price: 10000, discount: 20, quantity: 4 },
//   { name: "Product 3", price: 15000, discount: 8, quantity: 10 },
//   { name: "Product 4", price: 18000, discount: 5, quantity: 6 },
//   { name: "Product 5", price: 5000, discount: 10, quantity: 16 },
// ];

// let objSum = 0;

// for (let i = 0; i < obj.length; i++) {
//   const objPrice = obj[i].price * (1 - obj[i].discount / 100);
//   const objTotal = objPrice * obj[i].quantity;
//   objSum += objTotal;
// }

// console.log("Umumiy summa:", objSum);

// object12

// const obj = {
//   it: 20,
//   mushuk: 10,
//   sigir: 200,
//   tovuq: 2,
// };

// const res = Object.entries(obj).reduce((acc, [key, value]) => {
//   acc.push(key, value);
//   return acc;
// }, []);

// console.log(res);

// object13

// const grades = [
//   { name: "Fizika", grade: 4, kredit: 6 },
//   { name: "Matematika", grade: 5, kredit: 6 },
//   { name: "Tarix", grade: 4, kredit: 4 },
//   { name: "Dasturlash", grade: 5, kredit: 8 },
//   { name: "Kibrxavfsizlik", grade: 4, kredit: 8 },
// ];

// function calcGPA(grades) {
//   let objCredits = 0;
//   let objCredit = 0;

//   for (let i = 0; i < grades.length; i++) {
//     objCredit += grades[i].grade * grades[i].kredit;
//     objCredits += grades[i].kredit;
//   }

//   const gpa = objCredit / objCredits;
//   return gpa;
// }

// const resGPA = calcGPA(grades);
// console.log("GPA:", resGPA);

// object14

// const rightAns = {
//   1: "B",
//   2: "A",
//   3: "C",
//   4: "D",
//   5: "B",
//   6: "C",
//   7: "A",
//   8: "D",
//   9: "A",
//   10: "B",
// };
// const myAns = {
//   1: "C",
//   2: "A",
//   3: "D",
//   4: "D",
//   5: "B",
//   6: "C",
//   7: "B",
//   8: "C",
//   9: "A",
//   10: "C",
// };

// function obj(rightAns, myAns) {
//   let corCount = 0;
//   let incorCount = 0;
//   for (const quesNum in rightAns) {
//     if (rightAns[quesNum] === myAns[quesNum]) {
//       corCount++;
//     } else {
//       incorCount++;
//     }
//   }
//   return { correct: corCount, incorrect: incorCount };
// }

// const result = obj(rightAns, myAns);
// console.log("To'g'ri javoblar soni:", result.correct);
// console.log("Noto'g'ri javoblar soni:", result.incorrect);

// object15

// let n = 3;
// const obj = { a: 2, b: 3, c: 4, d: 6 };

// function getObj(obj, n) {
//   const res = {};
//   for (const key in obj) {
//     res[key] = obj[key] * n;
//   }
//   return res;
// }

// const res = getObj(obj, n);
// console.log(res);

// object16

// const product = {
//   name: "Iphone 14",
//   company: {
//     name: "Apple",
//     price: "200 mlrd",
//     founder: {
//       firstName: "Steve",
//       lastName: "Jobs",
//       birthDate: 1950,
//     },
//   },
// };

// const {
//   name: productName,
//   company: {
//     name: companyName,
//     price: companyPrice,
//     founder: {
//       firstName: founderFirstName,
//       lastName: founderLastName,
//       birthDate: founderBirthDate,
//     },
//   },
// } = product;

// console.log(
//   productName,
//   companyName,
//   companyPrice,
//   founderFirstName,
//   founderLastName,
//   founderBirthDate
// );

// object17

// const students = [
//   { name: "Saidaziz", percent: 80 },
//   { name: "Said", percent: 90 },
//   { name: "Aziz", percent: 85 },
//   { name: "Saidxoja", percent: 95 },
// ];

// const totalPercent = students.reduce(
//   (acc, student) => acc + student.percent,
//   0
// );
// const averagePercent = totalPercent / students.length;
// const updatedStudents = students.map((student) => {
//   return {
//     ...student,
//     averagePercent: averagePercent,
//     passed: student.percent >= 60 ? true : false,
//   };
// });

// console.log("O'rtacha protsent:", averagePercent);
// console.log("Yangi massiv:", updatedStudents);

// object18

// const students = [
//   { name: "Saidaziz", grade: 85 },
//   { name: "Said", grade: 92 },
//   { name: "Aziz", grade: 78 },
//   { name: "Saidxoja", grade: 68 },
// ];

// const updatedStudents = students.map((student) => {
//   let newGrade;
//   if (student.grade >= 90 && student.grade <= 100) {
//     newGrade = 5;
//   } else if (student.grade >= 80 && student.grade < 90) {
//     newGrade = 4;
//   } else if (student.grade >= 70 && student.grade < 80) {
//     newGrade = 3;
//   } else {
//     newGrade = 2;
//   }
//   return {
//     ...student,
//     newGrade: newGrade,
//   };
// });

// console.log("Yangi baholar:", updatedStudents);

// object19

// const students = [
//   { name: "Saidaziz", percent: 80 },
//   { name: "Said", percent: 90 },
//   { name: "Aziz", percent: 65 },
//   { name: "Saidxoja", percent: 75 },
// ];

// const updatedStudents = students.map((student) => {
//   const isPassed = student.percent >= 70 ? true : false;
//   return {
//     ...student,
//     isPassed: isPassed,
//   };
// });

// console.log("Yangi obyektlar:", updatedStudents);

// object20

// const pupils = [
//   {
//     name: "Elbek",
//     percent: 95,
//   },
//   {
//     name: "Zafar",
//     percent: 78,
//   },
//   {
//     name: "Aziz",
//     percent: 83,
//   },
//   {
//     name: "Jasur",
//     percent: 88,
//   },
//   {
//     name: "Bobur",
//     percent: 66,
//   },
//   {
//     name: "Kamron",
//     percent: 75,
//   },
// ];

// const pasStudents = pupils.filter((student) => student.percent >= 70);
// const failStudents = pupils.filter((student) => student.percent < 70);

// console.log("Imtihondan o'tgan o'quvchilar:", pasStudents.length);
// console.log("Imtihonda o'ta olmagan o'quvchilar:", failStudents.length);