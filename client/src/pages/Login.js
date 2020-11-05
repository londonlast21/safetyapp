import React, { useState } from 'react';
import { Button, Form } from 'semantic-ui-react';

const Login = props => {

    const [errors, setErrors] = useState({});
    const [formState, setFormState] = useState({ email: '', password: '' });

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
            email:'',
            password:''
        });
    };

    return (
        <div className="form-container">
            <Form>
                <h1 className="signup-title">Login</h1>
                    <Form.Input
                    label="Username"
                    placeholder="Username.."
                    name="username"
                    type="text"
                    value={formState.email}
                    error={errors.email ? true : false}
                    onChange={handleChange}
                    />
                    <Form.Input
                    label="Password"
                    placeholder="Enter password.."
                    name="password"
                    type="password"
                    value={formState.password}
                    error={errors.password ? true : false}
                    onChange={handleChange}
                    />

                    <Button type="submit" primary>
                        Login
                    </Button>
            </Form>
        </div>
        );

};

export default Login;


