const mongoose = require('mongoose');
const { Schema, model } = mongoose.Schema;
const moment = require('moment');


// Create User schema
const UserSchema = new Schema ({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
        //,
        // need working regex
        //match: [^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+, 'Must enter valid email address']
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: timestamp => moment(timestamp).format('MMM Do, YYYY [at] hh:mm a')
    },

    posts: [
        {
        type: Schema.Types.ObjectId,
        ref: 'Post'
        }
    ],
    comments: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Comment'
        }
    ]
},
{
    toJSON: {
        virtuals: true
    }
}

);

module.exports = User = mongoose.model('users', )