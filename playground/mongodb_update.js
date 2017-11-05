const {MongoClient, ObjectId} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/ToDoApp', (error, db) => {

    if (error){
        console.log(`Following error was encountered ${error}`);
    }

    console.log('database connected.');

    db.collection('Todos')
        .findOneAndUpdate({firstName : 'Chapna'}, {
            $set: {
                firstName: 'Swapna',
                surName: 'Gandhi'
            }
        }, {
            returnOrignal: false
        } ).then(result => console.log(JSON.stringify(result, undefined, 2)));

    db.close();
});