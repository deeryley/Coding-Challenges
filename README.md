# Coding Challanges

In this repo I will upload my solutions on coding problems

<h2>1. centuryFromYear </h2>
Given a year, return the century it is in. The first century spans from the year 1 up to and including the year 100, the second - from the year 101 up to and including the year 200, etc.

Example
For year = 1905, the output should be
solution(year) = 20;
For year = 1700, the output should be
solution(year) = 17.

[Solution]()

<h2>2. checkPalindrome</h2>
Given the string, check if it is a palindrome. A palindrome is a word, sentence, verse, or even number that reads the same backward or forward.

Example

For inputString = "aabaa", the output should be
solution(inputString) = true;
For inputString = "abac", the output should be
solution(inputString) = false;
For inputString = "a", the output should be
solution(inputString) = true.

[Solution]()

<h2>3. adjacentElementsProduct</h2>
Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.

Example
For inputArray = [3, 6, -2, -5, 7, 3], the output should be
solution(inputArray) = 21.
7 and 3 produce the largest product.

[Solution]()

<h2>4. firstDuplicate</h2>
Given an array a that contains only numbers in the range from 1 to a.length, find the first duplicate number for which the second occurrence has the minimal index. In other words, if there are more than 1 duplicated numbers, return the number for which the second occurrence has a smaller index than the second occurrence of the other number does. If there are no such elements, return -1.

Example

For a = [2, 1, 3, 5, 3, 2], the output should be solution(a) = 3.
There are 2 duplicates: numbers 2 and 3. The second occurrence of 3 has a smaller index than the second occurrence of 2 does, so the answer is 3.
For a = [2, 2], the output should be solution(a) = 2;
For a = [2, 4, 3, 5, 1], the output should be solution(a) = -1.

[Soultion]()

<h2>5. shapeArea</h2>
Below we will define an n-interesting polygon. Your task is to find the area of a polygon for a given n.

<img src=''/>

A 1-interesting polygon is just a square with a side of length 1. An n-interesting polygon is obtained by taking the n - 1-interesting polygon and appending 1-interesting polygons to its rim, side by side. You can see the 1-, 2-, 3- and 4-interesting polygons in the picture below.

For n = 2, the output should be
solution(n) = 5;
For n = 3, the output should be
solution(n) = 13.
