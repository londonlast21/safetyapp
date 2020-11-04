const { AuthenticationError } = require('apollo-server-express');
const { User, Post, Comment } = require('../models');


const resolvers = {
    Query: {
        helloWorld: () => {
            return 'hello';
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

            return user;

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

            return user;
        }
        
    }
};

module.exports = resolvers;