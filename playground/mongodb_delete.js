const {MongoClient, ObjectId} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/ToDoApp', (error, db) => {

    if (error){
        console.log(`Following error was encountered ${error}`);
    }

    console.log('database connected.');

    db.collection('Todos').deleteMany({firstName: 'Sagar'})
        .then(result => console.log(`Deleted ${JSON.stringify(result, undefined, 2)} documents.`));
    db.close();
});