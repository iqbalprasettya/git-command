// Challenge 1

function bandingkanAngka(angka1, angka2) {
  if (angka2 == angka1) {
    return -1;
  } else if (angka2 > angka1) {
    return true;
  } else {
    return false;
  }
}

// // TEST CASES
console.log(bandingkanAngka(5, 8)); // true
console.log(bandingkanAngka(5, 3)); // false
console.log(bandingkanAngka(4, 4)); // -1
console.log(bandingkanAngka(3, 3)); // -1
console.log(bandingkanAngka(17, 2)); // false

// Challenge 2

function balikKata(kata) {
  let r = "";
  for (let i = kata.length - 1; i >= 0; i--) {
    r += kata[i];
  }
  return r;
}

// // TEST CASES
console.log(balikKata("Hello World and Coders")); // sredoC dna dlroW olleH
console.log(balikKata("John Doe")); // eoD nhoJ
console.log(balikKata("I am a bookworm")); // mrowkoob a ma I
console.log(balikKata("Coding is my hobby")); // ybboh ym si gnidoC
console.log(balikKata("Super")); // repuS

// Challenge 3

function konversiMenit(menit) {
  //cari menit dari detik yang diberi (detik / 1 menit berapa detik)
  const minutes = Math.floor(menit / 60);
 // cari sisa detik
  const seconds = menit % 60;


  // formatting sesuai expected output
  // kalo sisa detik = 1 digit, maka ditambah 0 didepannya
  function padTo2Digits(num) {
    return num.toString().padStart(2, '0');
  }
  // else, biarin
  return `${(minutes)}:${padTo2Digits(seconds)}`;
 }

// // TEST CASES
console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00

// Challenge 4

function xo(str) {
  var x = 0, o = 0;

    for (var i = 0; i < str.length; i++) {
        if (str[i].toLowerCase() === "x") {
            x++;
        } else if (str[i].toLowerCase() === "o") {
            o++;
        }
    }
    return x === o;
}

// TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true

// Challenge 5

var input = [
  ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
  ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
  ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
  ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
]


const dataHandling = (params) => {
  // write your code here
  let result = "";
  // LOOPING array params untuk dapatkn value dari index
  for (let i = 0; i < params.length; i++) {
    const element = params[i];
    
    // formatting string
    result += (`Nomor ID:  ${element[0]}\nNama Lengkap: ${element[1]}\nTTL:  ${element[2]} ${element[3]}\nHobi:  ${element[4]}\n\n`);

  }
  return result

  // value dari tiap index, dimanfaat untuk menjadi data pada format yang di expected output




}

console.log(dataHandling(input))

// Expected Result
// Nomor ID:  0001
// Nama Lengkap:  Roman Alamsyah
// TTL:  Bandar Lampung 21/05/1989
// Hobi:  Membaca

// Nomor ID:  0002
// Nama Lengkap:  Dika Sembiring
// TTL:  Medan 10/10/1992
// Hobi:  Bermain Gitar

// Nomor ID:  0003
// Nama Lengkap:  Winona
// TTL:  Ambon 25/12/1965
// Hobi:  Memasak

// Nomor ID:  0004
// Nama Lengkap:  Bintang Senjaya
// TTL:  Martapura 6/4/1970
// Hobi:  Berkebun