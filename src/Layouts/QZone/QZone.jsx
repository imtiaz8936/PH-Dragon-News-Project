import React from 'react';
import swimmingImg from '../../assets/swimming.png';
import classImg from '../../assets/class.png';
import playImg from '../../assets/playground.png';

const QZone = () => {
    return (
        <div className='p-4 bg-base-200'>
            <h1 className='font-bold text-xl mb-5'>Q-Zone</h1>
            <div className='space-y-5'>
                <img src={swimmingImg} alt="" />
                <img src={classImg} alt="" />
                <img src={playImg} alt="" />
            </div>
        </div>
    );
};

export default QZone;