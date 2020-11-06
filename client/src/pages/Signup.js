import React, { useState } from 'react';
import { Button, Form } from 'semantic-ui-react';
import { useMutation } from '@apollo/react-hooks';

import Auth from '../utils/auth';
import { ADD_USER } from '../utils/mutations';


const Signup = () => {
    const [formState, setFormState] = useState({ username: '', email: '', password: '' });
    const [addUser, { error }] = useMutation(ADD_USER);

    console.log('hit1');
    
  

    const handleChange = event => {
        const { name, value } = event.target;

        console.log('hit2');
    
        setFormState({
          ...formState,
          [name]: value
        });
      };
    
      // submit form
      const handleFormSubmit = async event => {
        event.preventDefault();
        console.log(formState);


        console.log('hit front add user');    

      try {
          console.log(formState);


            // correct before this line
          const { data } = await addUser({
              variables: { ...formState }


              
              
          });
          
          //this is storing as an object with the right data
          console.log(data);

          Auth.login(data.addUser.token);


      } catch (e) {
          // correct here
          console.log(formState);
          
          console.error(e);
      } 

      setFormState({
          username:'',
          email:'',
          password:''
      });
    };
    

    return (
        <div className="form-container">
            <Form onSubmit={handleFormSubmit}>
                <h1 className="signup-title">Sign Up for Account</h1>
                    <Form.Input
                    label="Username"
                    placeholder="Username.."
                    name="username"
                    type="text"
                    id="username"
                    value={formState.username}
                    onChange={handleChange}
                    />
                    <Form.Input
                    label="Email"
                    placeholder="example@example.com"
                    name="email"
                    type="email"
                    id="email"
                    value={formState.email}
                    onChange={handleChange}
                    />
                    <Form.Input
                    label="Password"
                    placeholder="Choose password.."
                    name="password"
                    type="password"
                    id="password"
                    value={formState.password}
                    onChange={handleChange}
                    />
                
                    <Button type="submit" primary>
                        Sign Up
                    </Button>
            </Form>
                {/* {error && <div>Account creation failed</div>}  */}
            
        </div>

    );

};

export default Signup;