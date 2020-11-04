const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const path = require('path');

const { typeDefs, resolvers } = require('./schemas');
//const { authMiddleware } = require('./utils/auth');
const db = require('./config/connection');

const PORT = process.env.PORT || 3005;
const app = express();

// create the apollo server here
const server = new ApolloServer({
    typeDefs,
    resolvers
});

// add express as middleware to apollo server i made
server.applyMiddleware({ app });

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

db.once('open', () => {
    app.listen(PORT, () => {
        console.log(`Server running at port ${PORT}!`);

        console.log(`GraphQL running at http://localhost:{$PORT}${server.graphqlPath}`);
    });
});