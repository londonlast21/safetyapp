const mongoose = require('mongoose');
const { Schema } = mongoose.Schema;
const moment = require('moment');

const bcrypt = require('bcrypt');



// Create User schema
const UserSchema = new Schema ({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        // need working regex
        match: [/.+@.+\..+/, 'Must enter valid email address']
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

UserSchema.pre('save', async function(next) {
    if (this.isNew || this.isModified('password')) {
        const saltRouned= 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }

    next();
});


const User = mongoose.model('users', UserSchema);

module.exports = User;