import React from 'react';
import { Link } from 'react-router';
import { FaEye, FaStar } from "react-icons/fa";
import { FiBookmark, FiShare2 } from "react-icons/fi";

const NewsCard = ({ news }) => {

    const {
        id,
        title,
        rating,
        total_view,
        author,
        thumbnail_url,
        details,
    } = news;

    return (
        <div className="border rounded-xl shadow-sm space-y-3">
            {/* Author & Share */}
            <div className="flex justify-between items-center p-4 bg-base-200 rounded-t-xl">
                <div className="flex items-center gap-3">
                    <img
                        src={author?.img}
                        alt={author?.name}
                        className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                        <h2 className="font-semibold text-gray-800">{author?.name}</h2>
                        <p className="text-gray-500 text-sm">
                            {new Date(author?.published_date).toLocaleDateString()}
                        </p>
                    </div>
                </div>
                <div className='flex gap-2 items-center'>
                    <FiBookmark className="text-gray-500 text-xl cursor-pointer hover:text-accent" />
                    <FiShare2 className="text-gray-500 text-xl cursor-pointer hover:text-accent" />
                </div>
            </div>

            <div className='p-4 space-y-3'>
                {/* Title */}
                <h2 className="font-bold text-lg text-gray-900">{title}</h2>

                {/* Thumbnail */}
                <img
                    src={thumbnail_url}
                    alt={title}
                    className="rounded-xl w-full object-cover"
                />

                {/* Details */}
                <p className="text-gray-600 text-sm">
                    {details.slice(0, 220)}...
                    <Link
                        to={`/news/${id}`}
                        className="text-accent font-semibold hover:underline"
                    >
                        Read More
                    </Link>
                </p>

                {/* Footer */}
                <div className="flex justify-between items-center text-sm text-gray-600 pt-2 border-t">
                    <div className="flex items-center gap-2 text-orange-400">
                        {Array.from({ length: 5 }).map((_, i) => (
                            <FaStar
                                key={i}
                                className={i < rating.number ? "text-orange-400" : "text-gray-300"}
                            />
                        ))}
                        <span className="text-gray-700 font-semibold ml-1">
                            {rating.number}
                        </span>
                    </div>

                    <div className="flex gap-2 items-center">
                        <FaEye size={24} />
                        <span>{total_view}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;