/*
Logic Challenge: Graduates

Implementasikan function graduates untuk mendapatkan daftar student yang lulus dengan aturan:

    Student dapat dinyatakan lulus apabila score lebih besar dari 75.
    Masukkan name dan score dari student ke class yang dia ikuti.
    Student yang tidak lulus tidak perlu ditampilkan.

Output yang diharapkan berupa Object Literal dengan format sebagai berikut:

{
  <class>: [
    { name: <name>, score: <score> },
    ...
  ],
  <class>: [
    { name: <name>, score: <score> },
    ...
  ],
  <class>: [] //NOTE: Jika tidak ada student yang lulus, class ini akan diisi oleh array kosong
}
*/

function graduates (students) {
  // Code disini
  // var output = {};
  // for(var i = 0; i < students.length; i++) {
  //   output[students[i].class] = [];
  //   for(var key in output) {
  //     for(var j = 0; j < students.length; j++) {
  //       if(students[j].score > 75 && students[j].class == key) {
  //         var temp = { name: students[j].name, score: students[j].score };
  //         output[key].push(temp);
  //       }
  //     }
  //   }
  // }
  // // cek data
  // return output;

  var output = {};
  for(var i = 0; i < students.length; i++) {
    // cek kalau tidak ada
    if(!output[students[i].class]) {
      output[students[i].class] = [];
    }
    // cek kalau ada dan nilai diatas 75
    if(students[i].score > 75) {
      var temp = { name: students[i].name, score: students[i].score }
      output[students[i].class].push(temp)
    }
  }
  return output;
}

console.log(graduates([
  {
    name: 'Dimitri',
    score: 90,
    class: 'foxes'
  },
  {
    name: 'Alexei',
    score: 85,
    class: 'wolves'
  },
  {
    name: 'Sergei',
    score: 74,
    class: 'foxes'
  },
  {
    name: 'Anastasia',
    score: 78,
    class: 'wolves'
  }
]));

// {
//   foxes: [
//     { name: 'Dimitri', score: 90 }
//   ],
//   wolves: [
//     { name: 'Alexei' , score: 85 },
//     { name: 'Anastasia', score: 78 }
//   ]
// }

// console.log(graduates([
//   {
//     name: 'Alexander',
//     score: 100,
//     class: 'foxes'
//   },
//   {
//     name: 'Alisa',
//     score: 76,
//     class: 'wolves'
//   },
//   {
//     name: 'Vladimir',
//     score: 92,
//     class: 'foxes'
//   },
//   {
//     name: 'Albert',
//     score: 71,
//     class: 'wolves'
//   },
//   {
//     name: 'Viktor',
//     score: 80,
//     class: 'tigers'
//   }
// ]));

// // {
// //   foxes: [
// //     { name: 'Alexander', score: 100 },
// //     { name: 'Vladimir', score: 92 }
// //   ],
// //   wolves: [
// //     { name: 'Alisa', score: 76 },
// //   ],
// //   tigers: [
// //     { name: 'Viktor', score: 80 }
// //   ]
// // }


// console.log(graduates([])); //{}
