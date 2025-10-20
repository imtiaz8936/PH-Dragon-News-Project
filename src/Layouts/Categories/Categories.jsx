import React, { use } from 'react';
import { NavLink } from 'react-router';

const categoryPromise = fetch('/categories.json').then(res => res.json());

const Categories = () => {
    const categories = use(categoryPromise);
    console.log(categories);
    return (
        <div>
            <div className='grid grid-cols-1 mt-5 space-y-5'>
                {
                    categories.map(category =>
                        <NavLink key={category.id} 
                        to={`/category/${category.id}`}
                        className='pl-12 py-2 w-full rounded-md font-semibold text-xl text-accent'>
                            {category.name}</NavLink>
                    )
                }
            </div>
        </div>
    );
};

export default Categories;