/*
Logic Challenge - Naik Angkot
Problem

Diberikan function naikAngkot(listPenumpang) yang akan menerima satu parameter berupa array dua dimensi. Function akan me-return array of object.

Diberikan sebuah rute, dari A - F. Penumpang diwajibkan membayar Rp2000 setiap melewati satu rute.

Contoh: input: [['Dimitri', 'B', 'F']] output: [{ penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 }]
Code
*/
function naikAngkot(arrPenumpang) {
  var rute = ['A', 'B', 'C', 'D', 'E', 'F'];
  //your code here
  var result = []; // menampung output
  for(var i = 0; i < arrPenumpang.length; i++) {
    var ongkos = {
      penumpang: arrPenumpang[i][0],
      naikDari: arrPenumpang[i][1],
      tujuan: arrPenumpang[i][2],
      bayar: 0
    }

    for(var j = 0; j < rute.length; j++) {
      // cek lokasi naik dari
      if(ongkos.naikDari == rute[j]) {
        var from = j;
      }
      //cek lokasi tujuan
      if(ongkos.tujuan == rute[j]) {
        var destination = j;
      }

      if(ongkos.penumpang == arrPenumpang[i][0]) {
        // hitung jarak dari - tujuan & ongkos
        var jarak = Math.abs(from - destination) * 2000; 
        ongkos.bayar = jarak
      }
    }

    result.push(ongkos);
  }
  return result;
}

//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]