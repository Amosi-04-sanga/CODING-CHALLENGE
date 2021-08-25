// palindrome CHALLENGE:

function palindrome(str) {
   
    // search for non alphanumeric: REGEX
    const reg = /[\W_]/g

    // replace with empty string : str.replace
    str = str.replace( reg, "" )
    
    // reverse str
    const reversed = str.toLowerCase().split('').reverse().join('')

    // check if it's palindrome
    if( str === reversed ) return true

    // return false if NOT
    return false

}

// retrive function on load.
palindrome('racecar#$%^');


