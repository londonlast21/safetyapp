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

// New footer
import Footer from './components/Footer';

// Component Pages
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import SinglePost from './pages/SinglePost';



const client = new ApolloClient({
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
                
                <Footer />
                
                </Container>
            </Router>
        </ApolloProvider>

    );
}

export default App;