import React, { useState } from 'react';
import { Button, Form } from 'semantic-ui-react';
import { useMutation } from '@apollo/react-hooks';
import { LOGIN_USER } from '../utils/mutations';


import Auth from '../utils/auth';

const Login = () => {
  const [formState, setFormState] = useState({ username: '', password: '' });
  const [login, { error }] = useMutation(LOGIN_USER);


  const handleChange = event => {
    const { name, value } = event.target;


    setFormState({
      ...formState,
      [name]: value
    });
  };
  

  const handleFormSubmit = async event => {
    event.preventDefault();
    console.log('hit form submit');
    try {
      const { data } = await login({
        variables: { ...formState }
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }
    
    setFormState({
      username: '',
      password: ''
    });
  };



  return (
    <div className="form-container">
    <Form onSubmit={handleFormSubmit}>
        <h1 className="signup-title">Login</h1>
                  <Form.Input
                  label="Username"
                  placeholder="Username.."
                  name="username"
                  type="text"
                  value={formState.username}
                // error={errors.username ? true : false}
                  onChange={handleChange}
                  />
                  <Form.Input
                  label="Password"
                  placeholder="Enter your password.."
                  name="password"
                  type="password"
                  value={formState.password}
                  //error={errors.password ? true : false}
                  onChange={handleChange}
                  />

                  <Button type="submit" primary>
                      Login
                  </Button>
          </Form>
            {error && <div>Login failed</div>}
      </div>
        
  );
};
export default Login;