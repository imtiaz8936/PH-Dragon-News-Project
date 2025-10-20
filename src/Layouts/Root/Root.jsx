import React from 'react';
import Header from '../../Components/Header/Header';
import { Outlet } from 'react-router';

const Root = () => {
    return (
        <div className='mt-10'>
            <header>
                <Header></Header>
                <section>
                    
                </section>
            </header>
            <main>
                <section className="left-nav"></section>
                <section className="main">
                    <Outlet></Outlet>
                </section>
                <section className="rignt-nav"></section>
            </main>
        </div>
    );
};

export default Root;