import React from 'react';
import google from '../../../images/social/google.png'
import facebook from '../../../images/social/facbook.png'
import github from '../../../images/social/github.png'
import { useSignInWithFacebook, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    const [signInWithFacebook, user2, loading2, error2] = useSignInWithFacebook(auth);
    const navigate =useNavigate()

    if(user||user1||user2){
        navigate('/home')
    }

    let errorElement ;
    if(error || error1||user2){

       errorElement=
            <div>
              <p>Error: {error?.message}  {error1?.message} {error2?.message}</p>
            </div>
         
    }

    return (
        <div className='container'>
            <p>{errorElement}</p>
            <div className='d-flex align-items-center'>
                <div style={{ 'height': '2px' }} className=' w-50 bg-info'></div>
                <p className='text-center text-info mt-2 px-2'>OR</p>
                <div style={{ 'height': '2px' }} className=' w-50 bg-info'></div>
            </div>
            <div className=''>
                <div>

                    <button onClick={()=>signInWithGoogle()} className='d-block mx-auto btn btn-dark w-50 mb-3'>
                        <img style={{ 'height': '30px' }} src={google} alt="" />
                        <span className='ps-1'> Google Sign In</span>
                    </button>
                </div>
                <button onClick={()=>signInWithFacebook()} className='d-block mx-auto btn btn-dark w-50 mb-3' ><img style={{ 'height': '30px' }} src={facebook} alt="" />
                    <span className='ps-1'> Facebook Sign In</span></button>
                <button onClick={()=>signInWithGithub()} className='d-block mx-auto btn btn-dark w-50 mb-3'><img style={{ 'height': '30px' }} src={github} alt="" />
                    <span className='ps-1'> Github Sign In</span></button>

            </div>
        </div>
    );
};

export default SocialLogin;