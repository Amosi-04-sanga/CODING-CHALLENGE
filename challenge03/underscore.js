function underscoreOnLastWord(statement) {
    // array of words: split method.
    let words = statement.split(' ');
    // get the last word from array.
    const lastWord = words[words.length - 1];
    // put underscore at start of word.
    const wordWithUnderscore = `__${lastWord}`;
    // replace the last word: splice method.
    words.splice( words.length - 1, 1, wordWithUnderscore );
 
           
 
    // join an array: with join method.
    words = words.join(' ')
    words = words.replace( ' __', '__' )
    // RETURN a statement.
    return words;
 }
 
 // retrive the function.
 underscoreOnLastWord('coding is one of great career path in the planet right now');

