// import React from 'react'
import { Card, Form, Button, Alert } from 'react-bootstrap';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from "../context/AuthContext";
import { useState } from 'react';
import { doLogin } from '../axios/api';

import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import './Login.css';

const Login = () => {

    // const [error, setError] = useState();

    const style = {
        display: "flex",
        justifyContent: "space-between"
    }

    const navigate = useNavigate();
    const authContext = useAuth();

const { register, formState: { isValid, errors }, handleSubmit} = useForm();

console.log(errors);
    const onLoginHandler = async(data) =>{

        try{
            const {token, name} = await doLogin(data);
            authContext.createSession(token, name);
            navigate('/')
        }catch(error){
            toast.error(error.error)
            // setError(error.response.data.error)
        }
    }


    // const [login, setLogin] = useState({ email: "", password: "" })

    // const emailChangehandler = (e) => {
    //     setLogin((prevState) => ({ ...prevState, email: e.target.value }))
    // }

    // const passwordChangehandler = (e) => {
    //     setLogin((prevState) => ({ ...prevState, email: e.target.value }))
    // }


    // const onLoginHandler = async (e) => {
    //     e.preventDefault();
    //     const response = await doLogin(login);
    //     console.log(response)
    //     authContext.setAuthToken("kfaskfjaljoeiruwoieuroiewu rojlfkjflkdsjf fklsjflkasjf lksjfklsdjf");
    //     navigate('/')
    // }

    return (
        <div>
            <Card style={{ padding: "20px", width:"400px" }}>
                <Card.Title>Login</Card.Title>
                <Card.Body>
                    
                    {/* {error && <Alert variant="danger">
                                {error}
                    </Alert>} */}
                
                    <Form onSubmit={handleSubmit(onLoginHandler)}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" 
                            placeholder="Enter email" 
                            {...register('email', {required: "Enter your email address"})}
                            />
                            <Form.Text className="text-danger">
                                 {errors.email?.message}
                            </Form.Text>
                            <span></span>
                            
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control 
                            type="password" 
                            placeholder="Password" 
                            {...register('password',{ required: "Enter your password" })}
                            />
                            <Form.Text className="text-danger">
                                 {errors.password?.message}
                            </Form.Text>
                        </Form.Group>
                       
                            <div style={style}>
                                <Button variant="primary" type="submit" disabled ={!isValid}>
                                    Submit
                                </Button>
                                <Link to="../forgot-password" relative="path">Forgot Password</Link>
                            </div>
                        
            
                    </Form>

                </Card.Body>
            </Card>

        </div>
    )

}

export default Login;