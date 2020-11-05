import React, { useState } from 'react';

import { Button, Form } from 'semantic-ui-react';

const Login = props => {
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
        <div>
            <h1>Login</h1>
        </div>
    )

}

