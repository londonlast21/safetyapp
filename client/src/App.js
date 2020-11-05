import React from 'react';
import { Container } from 'semantic-ui-react';

import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';

// CSS here
import 'semantic-ui-css/smeantic.min.css'

// Navbar



// Component Pages
import Home from './pages/Home';


const client = new ApolloClient({
    uri: 'http://localhost:3005/graphql'
});

function App() {
    return(
        <ApolloProvider client={client}>
            <Container>
                <Home />
            </Container>    
        </ApolloProvider>

    );
}

export default App;