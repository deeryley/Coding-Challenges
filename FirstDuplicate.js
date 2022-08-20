// Time complexity is O(N^2) source youtube
function solution(a) {
  var index = a.length;
  for (var i = 0; i < a.length; i++) {
    for (var j = i + 1; j < a.length; j++) {
      if (a[i] == a[j]) {
        index = Math.min(index, j);
      }
    }
  }
  if (index == a.length) return -1;
  else return a[index];
}

// solution with sets. Each time that there is a duplicate the fn returns it, in that way it always returns the last value
function firstDuplicate(a) {
  let newSet = new Set();
  for (let i = 0; i < a.length; i++) {
    if (newSet.has(a[i])) {
      return a[i];
    } else {
      newSet.add(a[i]);
    }
  }
  return -1;
}

console.log(firstDuplicate([1, 3, 4, 5, 2]));
