import React from 'react';
import { IoMdArrowBack } from 'react-icons/io';


const PersonalDetails = ({setOpen1}) => {
    return (
        <div className='h-screen fixed top-0 bg-gray-200 w-full z-10'>
            
            
            {/* heading */}
            <div className='flex justify-between items-center h-14 w-full bg-white px-6 '>

                <div onClick={() => setOpen1(false)} className='flex items-center gap-4'>
                
                        <IoMdArrowBack className="text-lg text-blue-600" />
                   
                    <p className=' font-medium'>Personal Details</p>
                </div>
                <div>
                    {/* <IoIosSearch className="text-xl text-blue-600" /> */}
                </div>
            </div>

            {/* details */}
            <div className=' flex flex-col gap-1 bg-white rounded-2xl m-5 '>
                <div className='py-[10px] px-3 ' >
                    <p className='text-zinc-500 pb- font-medium'>Date of Birth</p>
                    <p className='font-bold'>1995-05-10</p>
                </div>

                <hr />

                <div className='py-[10px] px-3 ' >
                    <p className='text-zinc-500 pb- font-medium'>Personal email address</p>
                    <p className='font-bold'>jhon@gmail.com</p>
                </div>

                <hr />

                <div className='py-[10px] px-3 ' >
                    <p className='text-zinc-500 pb- font-medium'>Gender</p>
                    <p className='font-bold'>Male</p>
                </div>
                <hr />

                <div className='py-[10px] px-3 ' >
                    <p className='text-zinc-500 pb- font-medium'>Contact number</p>
                    <p className='font-bold'>98493284903</p>
                </div>

                <hr />
                <div className='py-[10px] px-3 ' >
                    <p className='text-zinc-500 pb- font-medium'>Emergency contact number</p>
                    <p className='font-bold'>98493284903</p>
                </div>

                <hr />
                <div className='py-[10px] px-3 ' >
                    <p className='text-zinc-500 pb- font-medium'>Address</p>
                    <p className='font-bold'>Chittagong</p>
                </div>

                <hr />
                <div className='py-[10px] px-3 ' >
                    <p className='text-zinc-500 pb- font-medium'>Parent Name</p>
                    <p className='font-bold'>johnparent</p>
                </div>
                <hr />
                <div className='py-[10px] px-3 ' >
                    <p className='text-zinc-500 pb- font-medium'>Parent Contact</p>
                    <p className='font-bold'>johnparent@gmail.com</p>
                </div>

                
            </div>
        </div>
    );
};

export default PersonalDetails;