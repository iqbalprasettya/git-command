// Chalenge 1

// function palindrome(kata) {
//   let rev = "";
//   for (let i = kata.length - 1; i >= 0; i--) {
//     rev += kata[i];
//   }
//   if (rev == kata) {
//     return true;
//   } else {
//     return false;
//   }
// }

// // TEST CASES
// console.log(palindrome("katak")); // true
// console.log(palindrome("blanket")); // false
// console.log(palindrome("civic")); // true
// console.log(palindrome("kasur rusak")); // true
// console.log(palindrome("mister")); // false

// Challenge 2

// function hitungJumlahKata(kalimat) {
//   const kata = kalimat.match(/\S+/g);
//   if (kata.length!==0) {
//     return kata.length;
//   } else {
//     return 0;
//   }
// }

// // TEST CASES
// console.log(hitungJumlahKata("I have a dream")); // 4
// console.log(hitungJumlahKata("Never eat shredded wheat or cake")); // 6
// console.log(hitungJumlahKata("A song to sing")); // 4
// console.log(hitungJumlahKata("I")); // 1
// console.log(hitungJumlahKata("I believe I can code")); // 5

// Challenge 3

// function changeVocals(str) {
//   let container = "";
//   const vocalsLetter = {
//     A: "B",
//     I: "J",
//     U: "V",
//     E: "F",
//     O: "P",
//     a: "b",
//     i: "j",
//     u: "v",
//     e: "f",
//     o: "p",
//   };
//   for (let i = 0; i < str.length; i++) {
//     if (vocalsLetter[str[i]]) {
//       container += vocalsLetter[str[i]];
//     } else {
//       container += str[i];
//     }
//   }
//   return container;
// }

// function reverseWord(str) {
//   let container = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     container += changeVocals(str[i]);
//   }
//   return container;
// }

// function setLowerUpperCase(str) {
//   let container = "";
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] >= "a" && str[i] <= "z") {
//         container += str[i].toUpperCase();
//     } else if (str[i] >= "A" && str[i]<= "Z") {
//         container += str[i].toLowerCase();
//     }
//   }
//   return container;
// }

// function removeSpaces(str) {
//   let container = "";
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] !== " ") {
//         container += str[i];
//     }

//   }
//   return container;
// }

// function passwordGenerator(name) {
//   if (name.length < 5) {
//     return "Minimal karakter yang diinputkan adalah 5 karakter";
//   } else {
//     const changedVocals = changeVocals(name);
//     const reversedWord = reverseWord(changedVocals);
//     const removedSpaces = removeSpaces(reversedWord);
//     const result = setLowerUpperCase(removedSpaces);

//     return result;
//   }
// }

// console.log(passwordGenerator("Sergei Dragunov")); // 'VPNVGBRdJFGRFs'
// console.log(passwordGenerator("Dimitri Wahyudiputra")); // 'BRTVPJDVYHBwJRTJMJd'
// console.log(passwordGenerator("Alexei")); // 'JFXFLb'
// console.log(passwordGenerator("Alex")); // 'Minimal karakter yang diinputkan adalah 5 karakter'

// Challenge 4

// function meleeRangedGrouping(str) {
//   if (str.length === 0) {
//     return [];
//   }

//   let heroes = [[], []];
//   let temp = [];
//   let tempStr = "";

//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === "," || i === str.length - 1) {
//       temp.push(tempStr);
//       tempStr = "";
//     } else {
//       tempStr += str[i];
//     }
//   }

//   for (let i = 0; i < temp.length; i++) {
//     for (let j = 0; j < temp[i].length; j++) {
//       if (temp[i][j] === "-") {
//         if (temp[i][j + 1] === "R") {
//           heroes[0].push(tempStr); // Masuk ke array Ranged
//         } else if (temp[i][j + 1] === "M") {
//           heroes[1].push(tempStr); // Masuk ke array Malee
//         }
//         tempStr = "";
//         break;
//       } else {
//         tempStr += temp[i][j];
//       }
//     }
//   }

//   return heroes;
// }

// // TEST CASE

// console.log(
//   meleeRangedGrouping(
//     "Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged"
//   )
// );
// // [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

// console.log(
//   meleeRangedGrouping("Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged")
// );
// // [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

// console.log(meleeRangedGrouping("")); // []


// Challenge 5

function stringToArray(string) {
  let temp = [];
  const result = [];

  for (let i = 0; i < string.length; i++) {
    if (string[i] === ",") {
        temp.push(tempStr);
        tempStr = "";
    } else {
        tempStr += string[i];
    }
    
  }
  return temp;
}

console.log(stringToArray("aqrst,ukaei,ffooo"));

// result
// [
//   [ 'a', 'q', 'r', 's', 't' ],
//   [ 'u', 'k', 'a', 'e', 'i' ],
//   [ 'f', 'f', 'o', 'o', 'o' ]
// ]

console.log(stringToArray("qwer,tyui,asdf,ghjk"));

// result
// [
//   [ 'q', 'w', 'e', 'r' ],
//   [ 't', 'y', 'u', 'i' ],
//   [ 'a', 's', 'd', 'f' ],
//   [ 'g', 'h', 'j', 'k' ]
// ]
