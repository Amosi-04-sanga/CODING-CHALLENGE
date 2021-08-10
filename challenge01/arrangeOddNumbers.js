// arrangeEvenNumbers function.
function arrangeEvenNumbers(numbers) {
   
    let oddIndexes = [];

    for( let i = 0; i < numbers.length; i++ ) {
          if(numbers[i] % 2 !== 0 ) oddIndexes.push(numbers.indexOf(numbers[i]) )
    }

    let evenNumbers = numbers.filter( num => {
         if(num % 2 === 0) return num;
    } )

    let oddNumbers = numbers.filter( num => {
         if(num % 2 !== 0) return num;
    } )

    evenNumbers = evenNumbers.sort( (a,b) => a - b );

    for( let j = 0; j < oddNumbers.length; j++ ) {
        evenNumbers = numbers.splice( oddIndexes[j], 0, oddNumbers[j] );
    }

    console.log(evenNumbers)
    console.log(oddNumbers)
    return oddIndexes;

}

// retrive arrangeEvenNumbers function.
arrangeEvenNumbers([11,4,2,7,9])


