import React from 'react';
import Header from '../../Components/Header/Header';
import { Outlet } from 'react-router';
import LatestNews from '../../Components/Header/LatestNews';

const Root = () => {
    return (
        <div className='mt-10'>
            <header className='max-w-[1280px] mx-auto'>
                <section>
                    <Header></Header>
                </section>
                <section>
                    <LatestNews></LatestNews>
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