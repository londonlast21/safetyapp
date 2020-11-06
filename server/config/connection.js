const { MONGODB_URI } = require('../../keys');
const mongoose = require('mongoose');

mongoose.connect(MONGODB_URI || 'mongodb://localhost/safetyapp', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
});

module.exports = mongoose.connection;

