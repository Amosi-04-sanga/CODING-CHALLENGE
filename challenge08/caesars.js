function rot13(str) {
    let solved = ''
    // get charCode of letter(s): str.charCodeAt()
    for( let i = 0; i < str.length; i++ ) {
        let charCode = str[i].charCodeAt()
        if( charCode >= 65 && charCode <= 77 ) {
           solved += String.fromCharCode(charCode + 13)
        }  
 
        else if( charCode >= 78 && charCode <= 90 ) {
           solved += String.fromCharCode(charCode - 13)
        }  
 
        else {
          solved += str[i]
        }
    }
    
    // return string 
   return solved
 
 }
 
 rot13("SERR PBQR PNZC")


 