function findMinMax(asghar) {
  let min_arr = asghar[0];
  let max_arr = asghar[0];
  for (let i = 0; i < asghar.length; i++) {
      if (asghar[i] < min_arr) min_arr = asghar[i];
      if (asghar[i] > max_arr) max_arr = asghar[i];
  }
  return `کمترین مقدار ${min_arr} \nبیشترین مقدار ${max_arr}`;  //answer
}
const arr = [10, 20, 5, 15]; // constant
alert(findMinMax(arr));
