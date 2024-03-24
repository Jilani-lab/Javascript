// Write a function that takes in a string and returns the count of vowels in that string.
// Consider the vowels to be a, e, i, o, u (both uppercase and lowercase). 
function countVowels(str) {
    // Using regular expression to match vowels (case insensitive)
    const vowelsRegex = /[aeiou]/gi;
    
    // Match returns an array of matches, so we can get the count by checking its length
    const vowelCount = (str.match(vowelsRegex) || []).length;
    
    return vowelCount;
}

// Example usage:
const inputString = "Hello, World!";
const vowelsCount = countVowels(inputString);
console.log("Number of vowels:", vowelsCount); // Output will be 3


//Write a function that takes in an array of numbers and returns the maximum value in that array

function findMax(arr) {
    if (arr.length === 0) {
        // Return null or throw an error if the array is empty, depending on your preference
        return null; // or throw new Error("Array is empty");
    }

    let max = arr[0]; // Assume the first element is the maximum initially

    // Loop through the array starting from the second element
    for (let i = 1; i < arr.length; i++) {
        // If the current element is greater than the current max, update max
        if (arr[i] > max) {
            max = arr[i];
        }
    }

    return max;
}

// Example usage:
const numbers = [1, 5, 3, 9, 2, 8];
const maxValue = findMax(numbers);
console.log("Maximum value:", maxValue); // Output will be 9

//Write a function that checks if a given string is a palindrome.
// A palindrome is a word, phrase, number, or other sequences of characters
//  which reads the same backward as forward (ignoring spaces, punctuation, and capitalization).
function isPalindrome(str){
    const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');

    // Reverse the string
    const reversedStr = cleanStr.split('').reverse().join('');

    // Check if the original and reversed strings are the same
    return cleanStr === reversedStr;
}

function isPalindrome(str){
    const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    let left=0;
    let right=cleanStr.length-1;
    while(left<right){
        if(cleanStr[left] !== cleanStr[right]){
            return false;
        }
    }
    return true;
}
const inputString1 = "A man, a plan, a canal, Panama!";
console.log(isPalindrome(inputString1)); // Output will be true

const inputString2 = "Hello, World!";
console.log(isPalindrome(inputString2)); 