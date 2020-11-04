const { AuthenticationError } = require('apollo-server-express');
const { User, Post } = require('../models');

// validation
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        helloWorld: () => {
            return 'hello';
        },

        me: async (parent, args, context) => {
            if (context.user) {
              const userData = await User.findOne({ _id: context.user._id })
                .select('-__v -password')
                .populate('thoughts')
                .populate('friends');
      
              return userData;
            }

            throw new AuthenticationError('Not logged in');
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
            const user = await User.findById(username);
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
        },
        // mutations for create
        addPost: async (parent, args, context) => {
            if (context.user) {
              const post = await Post.create({ ...args, username: context.user.username });
      
              await User.findByIdAndUpdate(
                { _id: context.user._id },
                { $push: { posts: post._id } },
                { new: true }
              );
      
              return post;
            }
            throw new AuthenticationError('Only users may interact');
        },

        addComment: async (parent, { postId, commentBody }, context) => {
            if (context.user) {
                const updatedPost = await Post.findOneAndUpdate(
                    { _id: postId },
                    { $push: { comments: { commentBody, username: context.user.username } } },
                    { new: true, runValidators: true }
                );
                return updatedPost;
            }

            throw new AuthenticationError('Only users may interact');
        }
       
    }
    
};

module.exports = resolvers;