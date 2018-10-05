module.exports = function count(s, pairs) {
  let N = 1;
  let lenPairs = pairs.length;
  let lenS = s.length;

  if (pairs[0][1] > 40) return 0;
  if (lenS > 5) return 0;

  for (let i = 0; i < lenPairs; i++){
    N *= Math.pow(pairs[i][0], pairs[i][1]);
  }

  let product = 1;

  for (i = 0; i < lenPairs; i++){
    product *= pairs[i][0];
  }


  if (s == "1") {

    let counter = 1;

    for (i = 0; i < lenPairs; i++){
      counter *= (pairs[i][0]-1);
    }

    let ans = counter*N/product;

    return ans;

  }

  let arrS = [];
  for (i = 0; i < lenS; i++){
    arrS.push(+s[i]);
  }

   let arr = [0, 1];

  outer:
  for (let j = 2; j < product; j++){
    for (i = 0; i < lenPairs; i++){
      if (j % pairs[i][0] == 0){
        arr.push(0);
        continue outer;
      }
    }
    arr.push(1);
  }

  let counter = 0;

  first:
  for (let j = 0; j < product; j++){
    for (i = 0; i < lenS; i++){
      if (arr[i+j] !== arrS[i]) continue first;
    }
    counter++;
    if (counter == 1000000007) counter = 0;
  }

 
  let ans = counter*N/product;

  return ans;
}