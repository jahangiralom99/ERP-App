import React, { useRef, useState } from 'react';
import { CiLock } from 'react-icons/ci';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';
import { IoMdArrowBack } from 'react-icons/io';

const ChangePassword = ({ setOpen4 }) => {
    const [showPassword, setShowPassword] = useState(false);

    const inputRef = useRef(null);

    const handleLockClick = () => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    };

    const togglePasswordVisibility = () => {
        setShowPassword((prev) => !prev);
    };


    return (
        <div className='h-screen fixed top-0 bg-gray-200 w-full z-10'>
            {/* heading */}
            <div className='flex justify-between items-center h-14  bg-white px-6 '>

                <div onClick={() => setOpen4(false)} className='flex items-center gap-4'>

                    <IoMdArrowBack className="text-lg text-blue-600" />

                    <p className=' font-medium'>Change Password</p>
                </div>
                <div>
                    {/* <IoIosSearch className="text-xl text-blue-600" /> */}
                </div>
            </div>



            {/* form */}

            <div>
                <form>
                    <div className='flex flex-col justify-center items-center gap-2  rounded-2xl m-5  '>
                        <div className=' flex items-center gap-2 px-2 w-[90%] border-[1px] border-[#FF0000] bg-white rounded-lg  '>
                             <CiLock className='text-xl cursor-pointer text-[#FF0000]' onClick={handleLockClick} />
                           
                            <input
                             type={showPassword ? 'text' : 'password'}   
                                   ref={inputRef} placeholder='Current Password' className='bg-white px-2 py-3 w-full rounded-md outline-none '  />
                              <div
                        className='cursor-pointer'
                        onClick={togglePasswordVisibility}
                    >
                        {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
                    </div>

                        </div>
                     
                    </div>    
                    <div className='flex flex-col justify-center items-center gap-2  rounded-2xl m-5  '>
                        <div className=' flex items-center gap-2 px-2 w-[90%] border-[1px] border-[#FF0000] bg-white rounded-lg  '>
                             <CiLock className='text-xl cursor-pointer text-[#FF0000]' onClick={handleLockClick} />
                           
                            <input
                             type={showPassword ? 'text' : 'password'}   
                                   ref={inputRef} placeholder='New Password' className='bg-white px-2 py-3 w-full rounded-md outline-none '  />
                              <div
                        className='cursor-pointer'
                        onClick={togglePasswordVisibility}
                    >
                        {/* {showPassword ? <FaRegEye /> : <FaRegEyeSlash />} */}
                    </div>

                        </div>
                     
                    </div>    
                </form>
            </div>
        </div>
    );
};

export default ChangePassword;