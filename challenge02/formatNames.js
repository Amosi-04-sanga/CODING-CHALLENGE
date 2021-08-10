const namesList = [
      {name: 'Bart'},
      {name: 'Lisa'},
      {name: 'annna'},
      {name: 'Maggie'},
      {name: 'mosdev'},
      {name: 'david'},
      {name: 'ally'},
      {name: 'allly'}
    ];

function formatNames(names) {

    const namesLen = names.length;
    
    switch(namesLen) {

       case 0:
           return '';
           break;

       case 1:
           return `${names[0].name}`;
           break;
           
       case 2:
           return `${names[0].name} & ${names[1].name}`;
           break;
           
       default:
           
           // default code for more than two names.
           const namesArr = [];

           for( let i = 0; i < names.length; i++ ) {
           
             namesArr.push(namesList[i].name);
           
           }
           const lastName = namesArr[namesArr.length - 1]
           const newArr = namesArr.map( name => {
              
               if( name === lastName ) return name;
           
               return name + ', ';
              
           } )
           
           let secondLastName = newArr[newArr.length - 2]
           
           secondLastName = secondLastName.replace( ',', '&' ) 
           
           newArr.splice( newArr.length - 2, 1, secondLastName );
           
           console.log(newArr)

           break;
           

    }

}

// retrive function.
formatNames(namesList);





