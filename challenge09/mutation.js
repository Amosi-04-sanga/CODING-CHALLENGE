// MUTATION CHALLENGE:

function mutation(arr) { 
   
    const firstWord = arr[0]
    let secondWord = arr[1]
    
    for( let i = 0; i < secondWord.length; i++ ) {
       if( !firstWord.includes(secondWord[i]) ) return false
     }
 
    return true
 
 }
 
 mutation(["amosi", "amosy"]) // expected: false

