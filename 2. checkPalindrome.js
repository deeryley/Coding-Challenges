function checkPalindrome(inputString) {
  var reversed = inputString.split("").reverse().join("");

  var check = reversed === inputString;

  return check;
}
