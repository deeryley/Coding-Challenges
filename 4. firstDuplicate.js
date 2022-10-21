// Given an array a that contains only numbers in the range from 1 to a.length, find the first duplicate number for which the second occurrence has the minimal index. In other words, if there are more than 1 duplicated numbers, return the number for which the second occurrence has a smaller index than the second occurrence of the other number does. If there are no such elements, return -1.

// Example

// For a = [2, 1, 3, 5, 3, 2], the output should be solution(a) = 3.
// There are 2 duplicates: numbers 2 and 3. The second occurrence of 3 has a smaller index than the second occurrence of 2 does, so the answer is 3.
// For a = [2, 2], the output should be solution(a) = 2;
// For a = [2, 4, 3, 5, 1], the output should be solution(a) = -1.

// Time complexity is O(N^2) // source youtube
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
