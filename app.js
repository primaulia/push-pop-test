function push_pop(initial, pushArr, noOfPop) {
  if (!Number.isInteger(noOfPop)) {
    noOfPop = 0;
  }
  if (!Array.isArray(initial) || !Array.isArray(pushArr)) {
  return [];
  }
  pushArr.forEach(function(element){
    initial.push(element);
  });
  for (var i=0; i < noOfPop; i++) {
    initial.pop();
  }

  return initial;
};

module.exports = push_pop;

// 15 out of 21
