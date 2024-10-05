import React, { useRef, useState } from 'react';
import { CiLock } from 'react-icons/ci';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';
import { IoMdArrowBack } from 'react-icons/io';

const ChangePassword = ({ setOpen4 }) => {
    const [showCurrentPassword, setShowCurrentPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);

    const currentPasswordRef = useRef(null);
    const newPasswordRef = useRef(null);

    const handleLockClick = (ref) => {
        if (ref.current) {
            ref.current.focus();
        }
    };

    const toggleCurrentPasswordVisibility = () => {
        setShowCurrentPassword((prev) => !prev);
    };

    const toggleNewPasswordVisibility = () => {
        setShowNewPassword((prev) => !prev);
    };

    return (
        <div className='h-screen fixed top-0 bg-gray-200 w-full  z-10'>
            {/* Heading */}
            <div className='flex justify-between items-center h-14 bg-white px-6'>
                <div onClick={() => setOpen4(false)} className='flex items-center gap-4'>
                    <IoMdArrowBack className="text-lg text-blue-600" />
                    <p className='font-medium'>Change Password</p>
                </div>
            </div>

            {/* Form */}
            <div className='pt-40'>
                <form>
                    {/* Current Password Input */}
                    <div className='flex flex-col justify-center items-center gap-2 rounded-2xl m-5'>
                        <div className='flex items-center gap-2 px-2 w-[90%] border-[1px] border-[#FF0000] bg-white rounded-lg'>
                            <CiLock className='text-xl cursor-pointer text-[#FF0000]' onClick={() => handleLockClick(currentPasswordRef)} />
                            <input
                                type={showCurrentPassword ? 'text' : 'password'}
                                ref={currentPasswordRef}
                                placeholder='Current Password'
                                className='bg-white px-2 py-3 w-full rounded-md outline-none'
                            />
                            <div className='cursor-pointer' onClick={toggleCurrentPasswordVisibility}>
                                {showCurrentPassword ? <FaRegEye /> : <FaRegEyeSlash />}
                            </div>
                        </div>
                    </div>

                    {/* New Password Input */}
                    <div className='flex flex-col justify-center items-center gap-2 rounded-2xl m-5'>
                        <div className='flex items-center gap-2 px-2 w-[90%] border-[1px] border-[#FF0000] bg-white rounded-lg'>
                            <CiLock className='text-xl cursor-pointer text-[#FF0000]' onClick={() => handleLockClick(newPasswordRef)} />
                            <input
                                type={showNewPassword ? 'text' : 'password'}
                                ref={newPasswordRef}
                                placeholder='New Password'
                                className='bg-white px-2 py-3 w-full rounded-md outline-none'
                            />
                            <div className='cursor-pointer' onClick={toggleNewPasswordVisibility}>
                                {showNewPassword ? <FaRegEye /> : <FaRegEyeSlash />}
                            </div>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div className='flex justify-center items-center'>
                        <button
                            type='submit'
                            className='bg-gradient-to-r from-gray-800 to-gray-300 text-white font-bold px-10 py-2 rounded-xl'
                        >
                            Change Password
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ChangePassword;
