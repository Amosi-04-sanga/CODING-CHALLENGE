 // check if NUMBER is POSITIVE.

 // function that check if number is POSITIVE or NEGATIVE.l
function isPositive(number) {
    const sign = Math.sign(number)
    let isPostiv
    switch( sign ) {
       
        case 1: 
          isPostiv = true
          break

        case -1: 
          isPostiv = false
          break

        case 0 || -0: 
          isPostiv = "the number is ZERO"
          break

        default: 
          isPostiv = "the number is NAN"

   }

   return isPostiv

}

// retrive function.
isPositive(-10) // expected output is FALSE.
