function isPalindrome(str) {
    // Convert the string to lowercase and remove non-alphanumeric characters
    const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    console.log(cleanStr);

    // Reverse the string
    const reversedStr = cleanStr.split('').reverse().join('');

    // Check if the original and reversed strings are the same
    return cleanStr === reversedStr;
}

// Example usage:
const inputString1 = "A man, a plan, a canal, Panama!";
console.log(isPalindrome(inputString1)); // Output will be true

// const inputString2 = "Hello, World!";
// console.log(isPalindrome(inputString2)); // Output will be false

let email="jilani@gmail.com"
if(email.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
    console.log("valid mail");
}else{
    console.log("Invalid");
}
function validateEmailId(email) {
    // Regular expression to match a valid phone number format
    const phoneRegex = /^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/;

    // Check if the phone number matches the regular expression
    return phoneRegex.test(email);
}

function validatePhoneNumber(phoneNumber) {
    // Regular expression to match a valid phone number format
    const phoneRegex = /^\d{10}$/;

    // Check if the phone number matches the regular expression
    return phoneRegex.test(phoneNumber);
}

// Example usage:
const phoneNumber1 = "1234567890";
console.log(validatePhoneNumber(phoneNumber1));
console.log(validateEmailId("abc@gmail.com"))
