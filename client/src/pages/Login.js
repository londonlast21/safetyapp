import React, { useState } from 'react';
import { Button, Form } from 'semantic-ui-react';

import { useForm } from '../utils/hooks';

const Login = props => {

    const { values, onChange, onSubmit } = useForm(createPostCallback, {
        name: '',
        location: '',
        type: ''
    });
    
    const [formState, setFormState] = useState({ email: '', password: ''});

    const handleChange = event => {
        const { name, value } = event.target;

        setFormState({
            ...formState,
            [name]: value
        });
    };

    const handleFormSubmit = async event => {
        event.preventDefault();

        setFormState({
            email: '',
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
                    onChange={onChange}
                    />
                    <Form.Input
                    label="Password"
                    placeholder="Enter password.."
                    name="password"
                    type="password"
                    value={formState.password}
                    onChange={onChange}
                    />

                    <Button type="submit" primary>
                        Login
                    </Button>
            </Form>
        </div>

    )
}


export default Login;