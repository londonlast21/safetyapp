import React, { useContext, useState } from 'react';
import { Button, Form } from 'semantic-ui-react';
import { useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import { ADD_USER } from '../utils/mutations';

import  Auth  from '../utils/auth';
import { useForm } from '../util/hooks';


function Signup(props) {
    const context = useContext(Auth);
    const [errors, setErrors] = useState({});

    const { onChange, onSubmit, values } = useForm(registerUser, {
        username:'',
        email:'',
        password:'',
        confirmPassword:''
    })

    const [addUser, { loading }] = useMutation(ADD_USER, {
        update(_, { data: { register: userData} }){
            context.login(userData);
            props.history.push('/')
        },
        onError(err){
            console.log(err);
        },
        variables: values
    });

    function registerUser(){
        addUser();
    }



    return (
        <div className="form-container">
            <Form onSubmit={onSubmit} noValidate className={loading ? "loading" : '' }>
                <h1 className="signup-title">Sign Up for Account</h1>
                    <Form.Input
                    label="Username"
                    placeholder="Username.."
                    name="username"
                    type="text"
                    value={values.username}
                    error={errors.username ? true : false}
                    onChange={onChange}
                    />
                    <Form.Input
                    label="Email"
                    placeholder="example@example.com"
                    name="email"
                    type="email"
                    value={values.email}
                    error={errors.email ? true : false}
                    onChange={onChange}
                    />
                    <Form.Input
                    label="Password"
                    placeholder="Choose password.."
                    name="password"
                    type="password"
                    value={values.password}
                    error={errors.password ? true : false}
                    onChange={onChange}
                    />
                
                    <Button type="submit" primary>
                        Sign Up
                    </Button>
            </Form>
            {Object.keys(errors).length > 0 && (
                <div className="ui error message">
                <ul className="list">
                    {Object.values(errors).map(value => (
                        <li key={value}>{value}</li>
                    ))}
                </ul>
            </div>
            )}
        </div>

    );
};

export default Signup;