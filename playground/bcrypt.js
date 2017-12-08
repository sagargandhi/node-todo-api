const bcrypt  = require('bcryptjs');

var password = 'password124';

bcrypt.hash(password, 10, (error, hash) =>{

    if (error == null){
        console.log(hash);

        bcrypt.compare(password, hash).then(result => {
            console.log(result);
            if(result == true){
                console.log('Welcome here!');
            } else {
                console.log('Incorrect username or password');
            }
        });
        
    }
});


