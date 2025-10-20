import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

const LoginWithSocialAcc = () => {
    return (
        <div className='space-y-3 mt-5'>
            <button className='btn btn-primary btn-outline w-full font-semibold text-[16px]'>
               <FcGoogle size={24}></FcGoogle> Login with Google</button>
            <button className='btn btn-primary btn-outline w-full font-semibold text-[16px]'>
               <FaGithub size={24}></FaGithub> Login with Github</button>
        </div>
    );
};

export default LoginWithSocialAcc;