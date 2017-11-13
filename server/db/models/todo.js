var {mongoose} = require('../mongoose');

var Todo = mongoose.model('ToDo', {
    text: {
        type: String,
        minLength:1,
        trim:true,
        required: true
    },
    completed : {
        type: Boolean,
        required: false,
        default: false

    },
    completedAt : {
        type: Number,
        required: false,
        default: null
    }
});

module.exports = {
    Todo
};