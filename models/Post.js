const mongoose = require('mongoose');
const { Schema, model } = mongoose.Schema;
const moment = require('moment');

// Create Post schema
const PostSchema = new Schema ({
    name: {
        type: String,
        required: true,
        unique: true
    },
    type: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: timestamp => moment(timestamp).format('MMM Do, YYYY [at] hh:mm a')
    },
    username: {
        type: String,
        required: true
    },
    comments: [CommentSchema]

},
{
    toJSON: {
        getters: true
    }
}


);

const Post = model('Post', PostSchema);

module.exports = Post;