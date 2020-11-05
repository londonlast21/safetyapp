import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';

import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';

// CSS here
import 'semantic-ui-css/semantic.min.css';
import './App.css';

// Navbar
import Navbar from './components/Navbar';


// Component Pages
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import SinglePost from './pages/SinglePost';



const client = new ApolloClient({
    request: operation => {
        const token = localStorage.getItem('id_token');

        operation.setContext({
            headers: {
                authorization: token ? `Bearer ${token}` : ''
            }
        });

    },
    uri: '/graphql'
});

function App() {
    return(
        <ApolloProvider client={client}>
           <Router>
                <Container>
                <Navbar />

                <Route exact path='/' component={Home}/>
                <Route exact path='/login' component={Login}/>
                <Route exact path='/signup' component={Signup}/>
                <Route exact path="/post/:id" component={SinglePost}/>
                
            
                </Container>
            </Router>
        </ApolloProvider>

    );
}

export default App;