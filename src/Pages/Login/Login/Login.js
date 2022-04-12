import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Login = () => {
    const emailRef=useRef('')
    const passwordRef=useRef('')

    const handleLogin=event=>{
        event.preventDefault()
        const email = emailRef.current.value
        const password = passwordRef.current.value
        console.log(email,password);
    }
    return (
        <div className='container '>
            <h1 className='text-center mt-5 mb-2'>Please login</h1>
            <Form onSubmit={handleLogin} className='w-50 mx-auto'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email"  ref={emailRef} placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    LogIn
                </Button>
                <p className='mt-3'>Are you new to genius car ? <Link to='/register'>Register Now</Link></p>
            </Form>
           
        </div>
    );
};

export default Login;