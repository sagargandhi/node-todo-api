const expect = require('expect');
const request = require('supertest');

var {app} = require('./../server');
var {Todo} = require('./../db/models/todo');

describe('Post todos', () => {

    var sampleTodos = [{
            text: 'Test Todo1'
        },
        {
            text: 'Test Todo2'
        }];

    beforeEach((done) => {
        Todo.remove().then( () =>{
             return Todo.insertMany(sampleTodos);
            }).then(() => done());
    })

    it('should post a todo', (done) => {
        var text = 'Get up at 6 AM';
        
        request(app)    
            .post('/todos')
            .send({text})
            .expect(200)
            .expect( response => {
                expect(response.body.text).toBe(text);
            })
            .end( (error, response) => {
                if(error){
                    return done(error);
                }

                Todo.find({text}).then((results) => {
                    expect(results.length).toBe(1);
                    expect(results[0].text).toBe(text);
                    done();
                }).catch(e => done(e))
            });
    });

    it('should not create a todo', (done) => {

        request(app)
            .post('/todos')
            .send({})
            .expect(400) 
            .end( (error, response) => {

                if(error){
                   return done(error);
                }

                Todo.find().then( (todos) =>{
                    expect(todos.length).toBe(2);
                    done();
                }).catch(e => done(e));
            });

    });
});

describe('Get /todos', () => {
    
    it('should get all todos', (done) => {
    request(app)
        .get('/todos')
        .expect(200)
        .expect((response) => {
            expect(response.body.todos.length).toBe(2);
            done();
        })
        .end((error, response) => {
            if(error){
                done(error);
            }
        })
    });     
});