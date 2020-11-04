const jwt = require('jsonwebtoken');

const secret = 'wigoletta has five new hats';
const expiration = '1h';

module.exports = {
    signToken: function({ username, email, _id }) {
        const payload = { username, email, _id };

        return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
    }
};