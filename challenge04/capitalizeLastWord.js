function capitalizeLastWord(sentence) {

    // an array from sentence.
    const words = sentence.split(' ')
    // last word from an array.
    let lastWord = words[words.length - 1]
    // capitalize the last word.
    const upperCasedLastWord = lastWord.toUpperCase();
    // replace it on a sentence.
    sentence = sentence.replace( lastWord, upperCasedLastWord )
    // RETURN new sentence.
    return sentence
 
 }
 
 // retrive the function.
 capitalizeLastWord('this is mosdev i am a coder')

// END.
