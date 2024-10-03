import React from 'react';
import { IoMdArrowBack } from 'react-icons/io';
import { Link } from 'react-router-dom';
import avatar from '../assets/avater.jpg'

const Profile = () => {
    return (
        <div className="bg-gray-200  text-black pb-3 ">
            {/* heading */}
            <div className='flex justify-between items-center h-14 w-full bg-white px-6 '>

                <div className='flex items-center gap-4'>
                    <Link to='/'>
                        <IoMdArrowBack className="text-lg text-blue-600" />
                    </Link>
                    <p className=' font-medium'>My Profile</p>
                </div>
                <div>
                    {/* <IoIosSearch className="text-xl text-blue-600" /> */}
                </div>
            </div>

            {/* user */}

            <div className='flex justify- items-center  bg-white rounded-2xl m-5 p-3 '>
                <div className='flex justify-evenly items-center gap-4 '>
                    <img className='w-20 h-20 rounded-full' src={avatar} alt="" />
                    <div>
                        <p className='font-bold text-2xl'>John</p>
                        <p>N/A</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;