import React, { useContext, useState } from 'react';
import { Button, Form } from 'semantic-ui-react';
import { useMutation } from '@apollo/react-hooks';
import { LOGIN_USER } from '../utils/mutations';


import Auth from '../utils/auth';
import { useForm } from '../utils/hooks';

function Login(props) {
    const context = useContext(Auth)
    const [errors, setErrors] = useState({});

    const { onChange, onSubmit, values } = useForm(loginCallback, {
        username: '',
        password: ''
    })

    const [login, { loading }] = useMutation(LOGIN_USER, {
        update(_, { data: { login: userData }}) {
            context.login(userData);
            props.history.push('/');
        },
        onError(err){
            console.log(err);
        },
        variables: values
    })

    function loginCallback(){
 
        login();

    };


    return (
        <div className="form-container">
            <Form onSubmit={onSubmit} noValidate className={loading ? "loading" : '' }>
                <h1 className="signup-title">Login</h1>
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
                    label="Password"
                    placeholder="Choose password.."
                    name="password"
                    type="password"
                    value={values.password}
                    error={errors.password ? true : false}
                    onChange={onChange}
                    />

                    <Button type="submit" primary>
                        Login
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

    )
}


export default Login;