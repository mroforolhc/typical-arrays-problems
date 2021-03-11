
exports.min = function min (array) {
  let min;

  if (array && array.length) {
    array.forEach((el, index) => {
      if (index === 0) min = el;
      else if (el < min) min = el;
    });

    return min;
  }

  return 0;
}

exports.max = function max (array) {
  let max;

  if (array && array.length) {
    array.forEach((el, index) => {
      if (index === 0) max = el;
      else if (el > max) max = el;
    });

    return max;
  }
  
  return 0;
}

exports.avg = function avg (array) {
  if (array && array.length) {
    let sum = array.reduce(((prev, curr) => prev + curr), 0)
    return sum / array.length;
  }

  return 0;
}
