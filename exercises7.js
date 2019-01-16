function urutkanAbjad(str) {
  // you can only write your code here!
  var arr = [];
  for(var i = 0; i < str.length; i++) {
    arr.push(str[i])
  }

  for(var j = 0; j < arr.length; j++) {
    for(var k = j; k < arr.length; k++) {
      if(arr[j] > arr[k]) {
        var temp = arr[j];
        arr[j] = arr[k];
        arr[k] = temp;
      }
    }
  }

  return arr;

    // var abjad = 'abcdefghijklmnopqrstuvwxyz';
    // var temp = [];
    // for(var i = 0; i < str.length; i++) {
    //    for(var j = 0; j < abjad.length; j++) {
    //      if(str[i] == abjad[j]) {
    //        temp.push(j);
    //      }
    //    }
    // }
    
    // var result = '';
    // temp.sort(function(a,b) {return a > b})
    // for(var k = 0; k < temp.length; k++) {
    //   result += abjad[temp[k]];
    // }
    // return result;
  } 
  
  // TEST CASES
  console.log(urutkanAbjad('hello')); // 'ehllo'
  console.log(urutkanAbjad('truncate')); // 'acenrttu'
  console.log(urutkanAbjad('developer')); // 'deeeloprv'
  console.log(urutkanAbjad('software')); // 'aeforstw'
  console.log(urutkanAbjad('aegis')); // 'aegis'