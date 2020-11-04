const { gql } = require('apollo-server-express');

const typeDefs = gql`

    type User {
        _id: ID
        username: String!
        email: String!
        posts: [Post]
        comments: [Comment]
        createdAt: String

    }

    type Post {
        _id: ID
        name: String!
        type: String!
        location: String!
        createdAt: String
        username: String!
        comments: [Comment]

        
    }

    type Comment {
        _id: ID
        commentBody: String!
        username: String!
        createdAt: String

    }

    type Query {
        helloWorld: String
        getPosts: [Post]
        getPost(postId: ID!): Post
    }

`;

module.exports = typeDefs;