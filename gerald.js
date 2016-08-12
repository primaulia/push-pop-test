var array;

function push_pop (arr, pusharr , popnum) {
  if(popnum < 0) {
    var array = arr;
  }
  else {
   array = arr;
  //  console.log(array, arr, pusharr);
   for(i=0; i < pusharr.length; i++) {
     array.push(pusharr[i]);
   }
  //  console.log(array)
   for(i=0; i<popnum; i++) {
     array.pop();
   }
  }

  return array;
}

// push_pop([],[5,6]);

module.exports = push_pop;

// 9 out of 21
