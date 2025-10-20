import React from 'react';
import { NavLink } from 'react-router';
import userImg from '../../assets/user.png';

const Navbar = () => {
    return (
        <div className='grid grid-cols-12 place-items-center'>
            <div className='col-span-3'></div>
            <div className='col-span-6 flex gap-4 text-accent'>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/career'>Career</NavLink>
            </div>
            <div className='col-span-3 flex gap-3 justify-self-end items-center'>
                <img className='cursor-pointer' src={userImg} alt="" />
                <p className='px-10 py-2 bg-primary text-white cursor-pointer'>Login</p>
            </div>
        </div>
    );
};

export default Navbar;