import React, { useState } from 'react';
import { Button, Form } from 'semantic-ui-react';
import { useMutation } from '@apollo/react-hooks';

import Auth from '../utils/auth';
import { ADD_USER } from '../utils/mutations';

const Signup = () => {
    const [formState, setFormState] = useState({ username: '', email: '', password: '' });
    const [addUser, { error }] = useMutation(ADD_USER);
  
    // update state based on form input changes
    const handleChange = event => {
      const { name, value } = event.target;
  
      setFormState({
        ...formState,
        [name]: value
      });
    };
    const handleFormSubmit = async event => {
        event.preventDefault();
    
        try {
          const { data } = await addUser({
            variables: { ...formState }
          });
    
          Auth.login(data.addUser.token);
        } catch (e) {
          console.error(e);
        }
      };