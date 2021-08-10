/* ___________________________
   Bob is preparing to pass IQ test. The most frequent task in this test is to find out which one of the given numbers differs from the others. Bob observed that one number usually differs from the others in evenness. Help Bob — to check his answers, he needs a program that among the given numbers finds one that is different in evenness, and return a position of this number.
   ! Keep in mind that your task is to help Bob solve a real IQ test, which means indexes of the elements start from 1 (not 0)
   
   EXAMPLE: iqTest("2 4 7 8 10") => 3 // Third number is odd, while the rest of the numbers are even
   iqTest("1 2 1 1") => 2 // Second number is even, while the rest of the numbers are odd
___________________________ */

// SOLUTION.
function iqTest(numbers) {

    // array from numbers given.
    const numbersArray = numbers.split(' ');
    // iterate over number and check evenness.
    
    let evenPosition = []
    let oddPosition = []

    for( let count = 0; count < numbersArray.length; count++ ) {
        
        // if even number push its position.
         if( numbersArray[count] % 2 === 0 ) {
            evenPosition.push( count + 1 );
         } 
        // if odd number push its position.
         else {
           oddPosition.push( count + 1 )
         }

    }

    // number is EVEN
    if( evenPosition.length === 1 ) {
        return evenPosition[0];      
    }  
    
    // number is ODD
    return oddPosition[0];    

}

// retrive function.
iqTest("2 4 7 8 10 20 100")
