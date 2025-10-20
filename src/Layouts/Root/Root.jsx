import React from 'react';
import Header from '../../Components/Header/Header';
import { Outlet } from 'react-router';
import LatestNews from '../../Components/Header/LatestNews';
import Navbar from '../../Components/Header/Navbar';
import Categories from '../Categories/Categories';

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
                <nav>
                    <Navbar></Navbar>
                </nav>
            </header>
            <main className='max-w-[1280px] mx-auto my-20'>
                <div className='grid grid-cols-12 gap-5'>
                    <aside className="left-nav col-span-3">
                        <h1 className='font-bold text-xl'>All Category</h1>
                        <Categories></Categories>
                    </aside>
                    <section className="main col-span-6">
                        <h1 className='font-bold text-xl'>Dragon News Home</h1>
                        <Outlet></Outlet>
                    </section>
                    <aside className="rignt-nav col-span-3">
                        <h1 className='font-bold text-xl'>Login With</h1>
                    </aside>
                </div>
            </main>
        </div>
    );
};

export default Root;