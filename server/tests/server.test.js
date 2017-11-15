const expect = require('expect');
const request = require('supertest');

var {app} = require('./../server');
var {Todo} = require('./../db/models/todo');

describe('Post todos', () => {

    beforeEach((done) => {
        Todo.remove().then( () => done() );
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

                Todo.find().then((todos) => {
                    expect(todos.length).toBe(1);
                    expect(todos[0].text).toBe(text);
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
                    expect(todos.length).toBe(0);
                    done();
                }).catch(e => done(e));
            });

    });

});