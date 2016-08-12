function push_pop(initial, pushArr, popElem) {
  if (popElem >= 0 && Array.isArray(initial) && Array.isArray(pushArr) && parseInt(popElem) == popElem) {
    for (var i = 0; i < pushArr.length; i++) {
      initial.push(pushArr[i]);
    }
    for (var j = 0; j < popElem; j++) {
      initial.pop();
    }
    return initial;
  } else {
    return [];
  }
}

module.exports = push_pop;

// 10 out of 21
