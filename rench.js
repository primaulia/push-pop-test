function push_pop(initialArr, pushArr, num_to_pop) {
  if (Array.isArray(initialArr) && Array.isArray(pushArr)) {
    if (pushArr.length !== 0) {
      for (i = 0; i <= pushArr.length; i++) {
        initialArr.push(pushArr.shift());
      }
    }
    if (Number.isInteger(num_to_pop) && num_to_pop > 0) {
      for (i = 1; i <= num_to_pop; i++) {
        // console.log(initialArr);
        initialArr.pop();
      }
    }
  }else if(!Array.isArray(initialArr)){
    initialArr = [];
    if (pushArr.length !== 0) {
      for (i = 0; i <= pushArr.length; i++) {
        initialArr.push(pushArr.shift());
      }
    }
    if (Number.isInteger(num_to_pop) && num_to_pop > 0) {
      for (i = 1; i <= num_to_pop; i++) {
        // console.log(initialArr);
        initialArr.pop();
      }
    }
  }
  return initialArr;
}

module.exports = push_pop;

// 13 out of 21
