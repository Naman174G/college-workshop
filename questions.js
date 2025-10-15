//1. Check if a String is Palindrome or Not

let str = "madam";
let rev = "";

for(let i = str.length - 1; i >= 0; i--){
    rev += str[i];
}

if(str == rev){
    console.log("Yes it is palindrome");
} else {
    console.log("No it is not palindrome");
}

//2 Reverse the String "Hello Java Script"

let str2 = "Hello Java Script";
let rev2 = "";

for(let i = str2.length-1; i>=0; i--){
    rev2 = rev2 + str2[i];
}
console.log("Reversed string is: " + rev2);

//3. Check if Two Strings are Anagrams or Not

let str1 = "silent";
let str2 = "listen";

let s1 = str1.split("").sort().join("");
let s2 = str2.split("").sort().join("");

if(s1 == s2){
    console.log("Yes, both are anagrams");
}else{
    console.log("No, not anagram");
}
