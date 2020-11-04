const resolvers = {
    Query: {
        helloWorld: () => {
            return 'hello';
        }
    }
};

module.exports = resolvers;