import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import NewsCard from '../../Components/ShowNews/NewsCard';

const NewsByCategory = () => {
    const { id } = useParams();
    const data = useLoaderData();
    const [newsByCategory, setNewsByCategory] = useState([]);
    console.log(data);

    useEffect(() => {
        if (id == '0') {
            setNewsByCategory(data);
        }
        else if (id == '1') {
            const filteredNews = data.filter(news => news.others.is_today_pick == true);
            setNewsByCategory(filteredNews)
        }
        else {
            const filteredNews = data.filter(news => news.category_id == id)
            setNewsByCategory(filteredNews)
        }

    }, [data, id]);

    return (
        <div className='grid grid-cols-1 space-y-5 mt-5'>
            {
                newsByCategory.map(news => 
                    <NewsCard key={news.id} news={news}></NewsCard>
                )
            }
        </div>
    );
};

export default NewsByCategory;
