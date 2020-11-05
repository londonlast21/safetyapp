import React from 'react';

import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';

// CSS here


// Navbar


// Component Pages
import Home from './pages/Home';


const client = new ApolloClient({
    uri: 'http://localhost:3005/graphql'
});

function App() {
    return(
        <ApolloProvider client={client}>
           <div>
            <Home />   
            </div>  
        </ApolloProvider>

    );
}

export default App;