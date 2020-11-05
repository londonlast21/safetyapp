import React, { useState } from 'react';
import { Button, Form } from 'semantic-ui-react';
import { useMutation } from '@apollo/react-hooks';
import { LOGIN_USER } from '../utils/mutations';


import Auth from '../utils/auth';


const Login = props => {
    const [formState, setFormState] = useState({username: '', password: ''});
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
                    placeholder="Choose password.."
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
            {/* {Object.keys(errors).length > 0 && (
                <div className="ui error message">
                <ul className="list">
                    {Object.values(errors).map(value => (
                        <li key={value}>{value}</li>
                    ))}
                </ul>
            </div> */}
            {/* )} */}
        </div>

    )
}


export default Login;