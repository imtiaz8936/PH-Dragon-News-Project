import React from 'react';
import logo from '../../assets/logo.png';
import { format } from 'date-fns';

const Header = () => {
    return (
        <div className='flex flex-col justify-center items-center space-y-4'>
            <img src={logo} alt="" />
            <p className='text-accent'>Journalism Without Fear or Favour</p>
            <p className='font-medium text-lg'>{format(new Date(),"EEEE,")} <span className='text-accent'>{format(new Date()," MMMM dd, yyyy")}</span></p>
        </div>
        
        
    );
};

export default Header;