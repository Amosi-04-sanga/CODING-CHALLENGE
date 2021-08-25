// kata: 
//Sum of the first nth term of Series.
let denominator = 4
function seriesSum(n) {

    let series = []

    // create a series of numbers 
    for( let count = 0; count < n; count++ ) {
        
         if( count === 0 ) {
             series.push( 1 )
         }

         else {
             let numerator = 1
             series.push( (numerator / denominator) )
             denominator = denominator + 3
         }

    }
    // find sum of numbers in series
    let total = 0;
    for( let count = 0; count < series.length; count++ ) {
        total += series[count]
    }

    total = total.toFixed(2)
    console.log(series)
    // return the sum of numbers.
    return total
}

// retrive seriesSum function.
seriesSum(2)

