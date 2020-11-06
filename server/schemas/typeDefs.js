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
        username: String
        commentCount: Int
        comments: [Comment]

        
    }

    type Comment {
        _id: ID
        commentBody: String!
        username: String!
        createdAt: String

    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        helloWorld: String

        me: User

        getUsers: [User]
        getUser(username: ID!): User

        getPosts: [Post]
        getPost(_id: ID!): Post
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        addPost(name: String!, type: String!, location: String!): Post
        addComment(postId:ID!, commentBody: String!): Post
    }

`;

module.exports = typeDefs;