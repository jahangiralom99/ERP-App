import React from 'react';
import { IoMdArrowBack } from 'react-icons/io';
import { Link } from 'react-router-dom';
import TimeAttendence from '../components/TimeAttendence';
import { PiHandTapLight } from 'react-icons/pi';
import { BsFileImage, BsFillFileImageFill } from 'react-icons/bs';
import BottomCheckIn from '../components/BottomCheckIn';
import Location from '../components/Location';
// import  { useState, useRef } from "react";
// import {Camera} from "react-camera-pro";




const MarkAttendence = () => {
    // const camera = useRef(null);
    // const [image, setImage] = useState(null);
    return (
        <div className='bg-gray-200 h-screen '>
            {/* header */}
            <div className=''>
                <div className='flex justify-between items-center h-14 w-full bg-white px-6 '>

                    <div className='flex items-center gap-4'>
                        <Link to='/orders'>
                            <IoMdArrowBack className="text-lg text-blue-600" />
                        </Link>
                        <p className=' font-medium'>Mark Attendence</p>
                    </div>
                    <div>
                        {/* <TfiPencil className="text-lg text-blue-600" /> */}
                    </div>
                </div>

            </div>


            {/* time */}
            <TimeAttendence />


            {/* check in finger */}

            <div className='flex flex-col justify-evenly items-center py-3 mx-5    rounded-xl bg-white px-6 '>

                <div className='w-24 h-24 border-[#FF0000] bg-gray-100 border-2 rounded-full flex justify-center items-center'>

                    <PiHandTapLight className="text-6xl" />
                </div>
                <p className='text-2xl font-bold'>check In</p>

            </div>


            {/* photo part */}

            <div className='flex  justify-evenly items-center my-3 mx-5 py-1   rounded-xl bg-white px-6 '>
                <div className='flex flex-col justify-evenly items-center py-5   w-full  rounded-xl bg-white px-6 '>

                    <div className='w-14 h-14 border-[#FF0000] bg-gray-100 border-2 rounded-full flex justify-center items-center'>

                        <BsFileImage className='text-3xl' />


                      
                    </div>
                    <p className='text-center text-sm font-semibold'>Take <br /> Front Image</p>
                </div>
                {/* <div>
                            <Camera ref={camera} />
                            <button onClick={() => setImage(camera.current.takePhoto())}>Take photo</button>
                            <img src={image} alt='Taken photo' />
                        </div> */}


                <div className='flex flex-col justify-evenly items-center py-5   w-full  rounded-xl bg-white px-6 '>

                    <div className='w-14 h-14 border-[#FF0000] bg-gray-100 border-2 rounded-full flex justify-center items-center'>

                        <BsFillFileImageFill className='text-3xl' />
                    </div>
                    <p className='text-center text-sm font-semibold'>Take <br /> Back Image</p>
                </div>

            </div>



            <BottomCheckIn />
            <Location />

        </div>
    );
};

export default MarkAttendence;