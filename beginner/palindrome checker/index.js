const input = document.getElementById('text');

function checkPalindrome(str) {
    return str.split("").reverse().join("")
}

function handleInput() {
    const value = input.value;
    const reversed = checkPalindrome(value);

    if (value === reversed){
        alert("It's a palindrome!");
    }else{
        alert("It's not a palindrome.");
    }

    input.value = "";
}