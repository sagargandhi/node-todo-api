const {MongoClient, ObjectId} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/ToDoApp', (error, db) => {

    if (error){
        console.log(`Error was observed ${error}`);
    } else {
        console.log('Connection was successful.');
        

        db.collection('Todos').find({firstName: 'Chapna'}).toArray().then( documents => {
            console.log(JSON.stringify(documents, undefined, 2));
        }, error => {
            console.log(`Error encountered ${error}`);
        });
        db.close();
    }
})