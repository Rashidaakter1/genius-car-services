
import React, { useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';

const Register = () => {
    const emailRef=useRef('')
    const passwordRef=useRef('')
    const nameRef =useRef('')
    const [agree,setAgree]=useState(false)
    const navigate=useNavigate()

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth,{sendEmailVerification:true});

      const [updateProfile, updating, updateError] = useUpdateProfile(auth);  

    if(user){
        navigate('/home')
        console.log(user)
    }
    if(loading){
        return <p className='text-center mt-5' >Loading ...</p>
    }
   

    const handleRegister= async  (event)=>{
        event.preventDefault()
        const email = emailRef.current.value
        const password = passwordRef.current.value
        const name = nameRef.current.value

        await createUserWithEmailAndPassword(email,password)
        await updateProfile({ name });
        alert('Updated profile');
        
        
    }
    return (
        <div className='container'>
            <h1 className='text-center'>Please Register </h1>
           
            <Form onSubmit={handleRegister} className='w-50 mx-auto'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="name"   placeholder="Enter Name" />
                    
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email"  ref={emailRef} placeholder="Enter email" required/>
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check
                     onClick={()=>setAgree(!agree)} 
                    className={agree? 'text-primary':'text-danger'} type="checkbox" label="Accept terms and conditions" />
                </Form.Group>
                <Button
                    disabled={!agree} 
                 variant="primary" type="submit">
                    Register
                </Button>
                <p className='mt-3'>Already Have an account? <Link to='/login'>Log In</Link></p>
            </Form>
           
           <div className='container w-50 '>
           <SocialLogin></SocialLogin>
           </div>
        
        </div>
    );
};

export default Register;