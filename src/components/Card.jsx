import React, { Children } from 'react';

const Card = ({ children }) => {
    return (
        <div className='bg-gray-200  px-5 text-sm font-bold text-black'>
            <div className='bg-white p-3 rounded-2xl mt-3'>
                {children}
            </div>

        </div>
    );
};

export default Card;