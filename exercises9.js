function checkAB(num) {
  // you can only write your code here!
  for(var i = 0; i < num.length; i++) {
    if(num[i] == 'a') {
      if(num[i+4] == 'b') {
        return true;
      }
    }

    if(num[i] == 'b') {
      if(num[i+4] == 'a') {
        return true;
      }
    }
  }
  return false;

  // var object = {
  //   a: [],
  //   b: []
  // }

  // for(var i = 0; i < num.length; i++) {
  //   if(num[i] == 'a') {
  //     object['a'].push(i);
  //   } else if(num[i] == 'b') {
  //     object['b'].push(i);
  //   }
  // }
  // console.log(object)
  // for(var j = 0; j < object['a'].length; j++) {
  //   for(var k = 0; k < object['b'].length; k++) {
  //     console.log(object.a[j], object.b[k])
  //     if(Math.abs(object.a[j] - object.b[k]) == 4) {
  //       return true;
  //     }
  //   }
  // }
  // return false;

  // var indexA = -1;
  // var indexB = -1;
  // var jarak = 0
  
  // for(var i = 0; i < num.length; i++) {
  //   if(num[i] == 'a') {
  //     indexA = i;
  //   } else if(num[i] == 'b') {
  //     indexB = i;
  //   }
        
  //   if(indexA > -1 && indexB > -1) {
  //     jarak = indexA - indexB;
  //   }
    
  //   jarak = Math.abs(jarak);
  //   if(jarak == 4) {
  //     return true;
  //   }
  // }
  // return false;
}

// TEST CASES
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false