const {MongoClient} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/ToDoApp',(error, db) =>{
    if(error)
    {
        console.log('Unable to connect to MongoDB server');
    }
    else
    {
        console.log('Connected to mongo db server');
    
        db.collection('Todos').insertOne(
            {
              firstName:'Sagar',
              surName: 'Gandhi'
            }, (error, result) =>{
        if(error)
        {
            console.log('Encountered the error ', error);
        }
        else
        {
            console.log(JSON.stringify(result.ops, undefined, 2));
            console.log(result.ops[0]._id.getTimestamp());
        }
    });

    db.close();
    }
} );