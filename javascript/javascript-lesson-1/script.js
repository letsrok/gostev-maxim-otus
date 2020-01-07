'use strict'

function sum(num) {

  let totalSumm = 0;

  function reSumm(num) {

    if(num === undefined) {
      return totalSumm;
    }
    else {
      totalSumm += num;
      return reSumm;
    }
  }

  return reSumm(num);

}

console.log(sum(1)(12)(25)(5)(6)(0)(-1)());