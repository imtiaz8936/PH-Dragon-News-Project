import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const FindUsOn = () => {
    return (
        <div>
            <h1 className='font-bold text-xl mb-5'>Find Us On</h1>
            <div className="join join-vertical w-full">
                <button className="btn btn-outline btn-primary flex justify-start font-semibold text-[16px] rounded-t-md"> <FaFacebook size={24}></FaFacebook> Facebook</button>
                <button className="btn btn-outline btn-primary flex justify-start font-semibold text-[16px]"> <FaTwitter size={24}></FaTwitter> Twitter</button>
                <button className="btn btn-outline btn-primary flex justify-start font-semibold text-[16px] rounded-b-md"> <FaInstagram size={24}></FaInstagram> Instagram</button>
            </div>
        </div>
    );
};

export default FindUsOn;