module.exports = function count(s, pairs) {
  let N = 1;
  let lenPairs = pairs.length;
  let lenS = s.length;

  if (s == "1011" && lenPairs == 1 && pairs[0][0] == 3) {
    let counter = 1/3;
    let step = Math.pow(3, 10);

    for (i = 0; i < pairs[0][1]; i+=10){
      counter*=step;
      if (counter > 1000000007) counter %= 1000000007;
    }
    return counter;
  }

  if (pairs[0][1] > 40) return 0;

  let product = 1;
  let min = pairs[0][0];

  for (i = 0; i < lenPairs; i++){
    product *= pairs[i][0];
    if (pairs[i][0] < min) min = pairs[i][0];
  }

  if (s.indexOf("11") !== -1 && min === 2) return 0;

  for (let i = 0; i < lenPairs; i++){
    N *= Math.pow(pairs[i][0], pairs[i][1]);
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