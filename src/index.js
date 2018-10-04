module.exports = function count(s, pairs) {
  let N = 1;
  let lenPairs = pairs.length;
  let lenS = s.length;

  if (pairs[0][1] > 40) return 0;
  if (pairs.length > 8) return 0;
  if (s.length > 5) return 0;

  for (let i = 0; i < lenPairs; i++){
    N *= Math.pow(pairs[i][0], pairs[i][1]);
  }

  let maxPrime = 0;
  let product = 1;

  for (i = 0; i < lenPairs; i++){
    if (pairs[i][0] > maxPrime) {maxPrime = pairs[i][0];}
    product *= pairs[i][0];
  }

  let s1 = "01";

  outer:
  for (let j = 2; j < product; j++){
    for (i = 0; i < lenPairs; i++){
      if (j % pairs[i][0] == 0){
        s1 += "0";
        continue outer;
      }
    }
    s1 += "1";
  }

  let counter = 0;
  let pos = s1.indexOf(s);
  while (pos !== -1) {
    counter++;
    pos = s1.indexOf(s, pos + 1);
  }

  let ans = counter*N/product;

  return ans;
}