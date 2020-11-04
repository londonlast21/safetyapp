const { Schema } = require('mongoose');
const moment = require('moment');

const CommentSchema = new Schema({
    commentBody: {
        type: String,
        required: true,
        maxlength: 300
    },
    username: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: timestamp => moment(timestamp).format('MMM Do, YYYY [at] hh:mm a')
    }
}, {
    toJSON: {
        getters: true
    }
}

);
module.exports = CommentSchema;