
import { IoMdArrowBack } from 'react-icons/io';
import { Link } from 'react-router-dom';
import TimeAttendence from '../components/TimeAttendence';
import { PiHandTapLight } from 'react-icons/pi';
import { BsFileImage, BsFillFileImageFill } from 'react-icons/bs';
import BottomCheckIn from '../components/BottomCheckIn';
// import Location from '../components/Location';
import { useState, useRef } from "react";
import { Camera } from "react-camera-pro";




const MarkAttendence = () => {
    const camera = useRef(null);
    const [image, setImage] = useState(null);
    const [image1, setImage1] = useState(null);
    const [open2, setOpen2] = useState(false);
    const [open1, setOpen1] = useState(false);
    return (
        <div className='bg-white h-screen  text-black'>
            {/* header */}
            <div className=''>
                <div className='flex justify-between items-center h-14 w-full bg-gray-200 text-black px-6 '>

                    <div className='flex items-center gap-4'>
                        <Link to='/orders'>
                            <IoMdArrowBack className="text-lg text-[#FF0000]" />
                        </Link>
                        <p className=' font-medium'>Mark Attendence</p>
                    </div>
                    <div>
                        {/* <TfiPencil className="text-lg text-blue-600" /> */}
                    </div>
                </div>

            </div>


            <div className=''>

                <TimeAttendence />


                {/* check in finger */}

                <div className='flex flex-col justify-evenly items-center  mx-5 pb-3 pt-2    rounded-xl  px-6 '>

                    <div className='w-24 h-24 border-[#FF0000] bg-gray-100 border-2 rounded-full flex justify-center items-center'>

                        <PiHandTapLight className="text-6xl" />
                    </div>
                    <p className='text-2xl '>check <span className='font-bold'>In</span> </p>

                </div>


                {/* photo part */}

                <div className='flex  justify-evenly items-center mx-5 pb-12   rounded-xl  px-6 '>
                    <div onClick={() => setOpen1(!open1)} className='flex flex-col justify-evenly items-center py-1   w-full  rounded-xl  px-6 '>
                        {
                            open1 && <div className='flex flex-col fixed left-8 right-8  bottom-32 h-96 border-[#FF0000] bg-gray-100 border-[1px] rounded-xl'>


                                <div className=' flex justify-center pt-5 '>
                                    {/* camera area */}

                                    <div className='bg-white h-72 w-[80%] rounded-xl '>
                                        <div>
                                            <Camera ref={camera} />
                                            <button onClick={() => setImage(camera.current.takePhoto())}>Take photo</button>
                                            <img src={image} alt='Taken photo' />
                                        </div>



                                    </div>








                                </div>

                                {/* button */}
                                <div className='flex justify-evenly items-center py-3 px-5 gap-2'>
                                    <button className='border-[1px] p-2 w-full rounded-xl border-[#FF0000]  text-[#FF0000] font-medium'>Cancel</button>
                                    <button className='border-[1px] p-2 w-full rounded-xl  bg-gradient-to-r from-black to-gray-400 text-white font-medium'>Capture</button>
                                </div>
                            </div>
                        }

                        <div className='w-14 h-14 border-[#FF0000] bg-gray-100 border-2 rounded-full flex justify-center items-center'>

                            <BsFileImage className='text-3xl' />



                        </div>
                        <p className='text-center text-xs '>Take <br /> Front Image</p>

                    </div>



                    <div onClick={() => setOpen2(!open2)} className='flex flex-col justify-evenly items-center py-1   w-full  rounded-xl  px-6 '>

                        {
                            open2 && <div className='flex flex-col fixed left-8 right-8  bottom-32 h-96 border-[#FF0000] bg-gray-100 border-[1px] rounded-xl'>


                                <div className=' flex justify-center pt-5 '>
                                    {/* camera area */}

                                    <div className='bg-white h-72 w-[80%] rounded-xl '>
                                        <div>
                                            <Camera ref={camera} />
                                            <button onClick={() => setImage1(camera.current.takePhoto())}>Take photo</button>
                                            <img src={image1} alt='Taken photo' />
                                        </div>



                                    </div>








                                </div>

                                {/* button */}
                                <div className='flex justify-evenly items-center py-3 px-5 gap-2'>
                                    <button className='border-[1px] p-2 w-full rounded-xl border-[#FF0000]  text-[#FF0000] font-medium'>Cancel</button>
                                    <button className='border-[1px] p-2 w-full rounded-xl  bg-gradient-to-r from-black to-gray-400 text-white font-medium'>Capture</button>
                                </div>
                            </div>
                        }

                        <div className='w-14 h-14 border-[#FF0000] bg-gray-100 border-2 rounded-full flex justify-center items-center'>

                            <BsFillFileImageFill className='text-3xl' />
                        </div>
                        <p className='text-center text-xs'>Take <br /> Back Image</p>
                    </div>

                </div>



                <BottomCheckIn />

            </div>



        </div>
    );
};

export default MarkAttendence;