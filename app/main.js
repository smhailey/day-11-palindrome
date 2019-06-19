// Write a function that will take in one argument, a string. Determine if the given string is a palindrome, and return either true or false. (A palindrome is a word that's spelled the same both forward and backward.) For this exercise let's not worry about space characters.
//Examples
//Input: 'taco cat'  |  'kayak'     |  'hello'  |  'aibohphobia' (the fear of palindromes)
//Output: true       |  true        |  false    |  true


function isPalindrome(str) {
  // return str == str.split('').reverse().join('')    Single line answer!!!!!!!!!!!!
  let reversedStr = ''
  // let trimmedStr = str.trim()

  // let end = trimmedStr.length
  // let middle = Math.floor(end / 2)
  for (let i = str.length - 1; i >= 0; i--) {
    // if (trimmedStr[i] !== trimmedStr[end - 1 - i]) {
    let letter = str[i]
    reversedStr == str


  }
  return reversedStr == str
}
return true;
}

isPalindrome("tacocat")