// STEP-1
// Filter out companies which have more than one 'o' without the filter method

const firms = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon, Oppo"

function calcFirm(arr) {
  let firmArr = arr.split(",");
  let newArr = [];
for( let i = 0; i < firmArr.length; i++){
  let itComArr = firmArr[i].toLowerCase().split("");
  let num = 0;
    for (j = 0; j < itComArr.length; j++) {
      if (itComArr[j] === "o") {
        num++;
        if (num === 2) {
          newArr.push(firmArr[i]);
        }
      }
    }
  }
  return  newArr;
}
console.log(calcFirm(firms));
// function calculate2(arr) {
//   let givenArr = arr.split(",");

//   let firmsWithDoubleO = [];

//   givenArr.forEach((element) => {
//     let num = 0;

//     for (i = 0; i < element.length; i++) {
//       if (element[i].toLowerCase() === "o") {
//         num++;
//         if (num === 2) {
//           firmsWithDoubleO.push(element);
//         }
//       }
//     }
//   });
//   return firmsWithDoubleO;
// }

// console.log(calculate2(firms));





//STEP-2

 loremIpsum = "Contrary to popular belief, Lorem Ipsum is not simply random text. it has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.a.32 and 1.a.33 of 'de Finibus Bonorum et Malorum' (The Extremes of Good and Evil) by Cicero, written in 45 BC. this book is a treatise on the theory of ethics, very popular during the Renaissance. the first line of Lorem Ipsum, 'Lorem ipsum dolor sit amet..', comes from a line in section 1.a.32"
let str = loremIpsum.split('. ')
for (let i = 0; i < str.length; i++) {
 str[i] = str[i][0].toUpperCase()+str[i].replace(/ -/g, ":").substring(1);
}
console.log(str.join('.'));
