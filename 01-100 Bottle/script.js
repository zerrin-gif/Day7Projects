
let numberOfBottles = 99; 
// function numberBottles(num){
// while(num >= 100){
//   num--;
// }
// }
// console.log(numberBottles(numberOfBottles));
function bottleFall(bottle) {
  while (bottle >= 0) {
    console.log(bottle + " " + "bottle" + " of milk on the wall");
    console.log("Take one down, pass it around,");

    bottle-= 5;
  }
}

console.log(bottleFall(numberOfBottles));
