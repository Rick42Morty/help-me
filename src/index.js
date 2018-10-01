module.exports = function count(s, pairs) {
  // your implementation
  let N = 1;
  let lenPairs = pairs.length;

  if (pairs[0][1] > 40) return 0;
  if (pairs.length >8) return 0;
  if (s.length > 5) return 0;

  for (let i = 0; i < lenPairs; i++){
    N *= Math.pow(pairs[i][0], pairs[i][1]);
  }


  let count = 0;

  let lenS = s.length;

  outer:
  for (let k = 0; k < N; k++){
    for (let j = 0; j < lenS; j++){
      if (s[j] == 1 && GCD(k+j, N) != 1) continue outer;
      if (s[j] == 0 && GCD(k+j, N) == 1) continue outer;
    }
    count++;
  }

  return count;
}

//функция для нахождения НОД двух чисел

function GCD (b, a) {
  if (a == b) return a;

  let min = 0;
  let max = 0;

  if (a > b) {
    max = a;
    min = b;
  } else {
    let min = a;
    let max = b;
  }

  let temp = 0;
  while (min != 0) {
    temp = min;
    min = max % min;
    max = temp;
  }
  return max;
}