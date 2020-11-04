const { AuthenticationError } = require('apollo-server-express');
const { User, Post, Comment } = require('../models');

// validation
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        helloWorld: () => {
            return 'hello';
        },

        async getUsers(){
            console.log('getusers');
            try{
                const users = await User.find().sort({ createdAt: -1 });
                console.log(users);
                
                return users;
            } catch(err) {
                throw new Error(err);
            }
        },

        async getUser(_, {  }){
            try{
            const user = await User.findById(userId);
            if(user){
                return user;
            } else {
                throw new Error('User not found')
            }
          } catch(err){
            throw new Error(err)
          }
        },


        async getPosts(){
            console.log('getposts');
            try{
                const posts = await Post.find().sort({ createdAt: -1 });
                console.log(posts);
                
                return posts;
            } catch(err) {
                throw new Error(err);
            }

        },
        async getPost(_, {  }){
            try{
            const post = await Post.findById(postId);
            if(post){
                return post;
            } else {
                throw new Error('Post not found')
            }
          } catch(err){
            throw new Error(err)
          }
        }

    },

    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);

            return { token, user };

        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const token = signToken(user);
            return { token, user};
        }
        
    }
};

module.exports = resolvers;