/*
Logic Challenge - Ubah Huruf
Problem

Diberikan function ubahHuruf(kata) yang akan menerima satu parameter berupa string. Functiona akan me-return sebuah kata baru dimana setiap huruf akan digantikan dengan huruf alfabet setelahnya. Contoh, huruf a akan menjadi b, c akan menjadi d, k menjadi l, dan z menjadi a.
Code

function ubahHuruf(kata) {
  // you can only write your code here!
}

// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu
*/

function ubahHuruf(kata) {
// you can only write your code here!
    var abjad = 'abcdefghijklmnopqrstuvwxyz';
    var output = '';
    for(var i = 0; i < kata.length; i++) {
        for(var j = 0; j < abjad.length; j++) {
            if(kata[i] == abjad[j]) {
                output += abjad[(j+1) % abjad.length]
            }
        }
    }
    return output;
}

// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu