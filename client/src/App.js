import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';

import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';

// CSS here
import 'semantic-ui-css/semantic.min.css';

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