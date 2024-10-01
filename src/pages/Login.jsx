import { IoIosGlobe } from 'react-icons/io';
import bgImg from '../assets/abstract-line-hexagon-geometric-texture_1035-17372.avif';
import erp from '../assets/unnamed.webp';
import { useForm } from "react-hook-form";
import React, { useState } from "react";
import Switch from "react-switch";
import { FaRegCopyright, FaRegUser } from 'react-icons/fa';
import { CiLock } from 'react-icons/ci';
import { MdArrowDropDown } from 'react-icons/md';

const Login = () => {
    const [checked, setChecked] = useState(false);
    const [protocol, setProtocol] = useState("http");



    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        console.log("Remember Me:", checked);
    };

    return (
        <div style={{ background: `url(${bgImg})` }} className='h-screen'>
            {/* ---------heading-------------- */}
            <div className='flex justify-between items-center gap-5 px-5 h-1/4'>
                <div className='flex justify-center items-center gap-2 bg-[#b4e2ba] rounded-2xl p-2 bg-opacity-60'>
                    <img className='w-[50px] rounded-2xl' src={erp} alt="" />
                    <div>
                        <p className='text-2xl'>
                            <span className='font-bold'>ERP</span><span className='font-'>NEXT</span>
                        </p>
                        <p>
                            <span>Employee</span><span className='font-bold'>HUB</span>
                        </p>
                    </div>
                </div>
                <div className='bg-[#b4e2ba] rounded-lg p-2 text-2xl bg-opacity-60'>
                    <IoIosGlobe />
                </div>
            </div>

            {/* ----------------login interface------------- */}
            <div className='bg-[#139141] rounded-t-3xl h-3/4 pt-[3px] px-[2px] pb-[2px] flex flex-col relative '>
                <div className='bg-white rounded-3xl h-full'>
                    <p className='text-3xl font-semibold text-[#285c3b] px-5 pt-3'>Login!</p>
                    <p className='text-xl font-semibold text-[#285c3b] pl-5'>Enter Your ERPNext Credentials</p>

                    {/* --------------------login form--------------- */}
                    <div>
                        <form className='flex flex-col gap-4 p-5' onSubmit={handleSubmit(onSubmit)}>



                            <div className='flex  items-center gap-2 border-[1px] border-gray-400 p-2 rounded-xl' >

                                {/* -------------modal--------------- */}
                                {/* Open the modal using document.getElementById('ID').showModal() method */}

                                {/* <div className="" onClick={() => document.getElementById('my_modal_2').showModal()} > */}
                                <div className="" onClick={() => document.getElementById('my_modal_2').showModal()} >


                                    <button className='flex justify-center items-center'> <IoIosGlobe className='text-[#116630] text-xl mr-[2px]' /><span >{protocol}</span> <MdArrowDropDown /></button>

                                </div>
                                <dialog id="my_modal_2" className="modal">
                                    <div className="h-40 w-80 mx-10 bg-white rounded-xl  absolute bottom-5 px-5 pt-3">
                                        <h3 className="font-semibold text-black text-lg py-2">Select Protocol</h3>
                                        <hr />
                                        <div className="flex flex-col gap-3 py-2">

                                            <p onClick={() => setProtocol("http")} className='flex justify-start gap-3 text-black items-center'> <IoIosGlobe className='text-[#116630] text-xl' /> http</p>
                                            <p onClick={() => setProtocol("https")} className='flex justify-start gap-3 text-black items-center'> <IoIosGlobe className='text-[#116630] text-xl' /> https</p>
                                        </div>
                                    </div>
                                    <form method="dialog" className="modal-backdrop">
                                        <button>close</button>
                                    </form>
                                </dialog>






                                <input
                                    className='outline-none focus:ring-0 focus:border-[#116630]'
                                    placeholder='URL'
                                    {...register("url", { required: true })}
                                />
                                {/* {errors.username && <span className='text-red-500'>This field is required</span>} */}
                            </div>
                            <div className='flex  items-center gap-2 border-[1px] border-gray-400 p-2 rounded-xl' >
                                <button className=''> <FaRegUser className='text-[#116630] text-lg' /></button>

                                <input
                                    className='outline-none focus:ring-0 focus:border-[#116630]'
                                    placeholder='Username'
                                    {...register("username", { required: true })}
                                />
                                {/* {errors.username && <span className='text-red-500'>This field is required</span>} */}
                            </div>
                            <div className='flex  items-center gap-2 border-[1px] border-gray-400 p-2 rounded-xl' >
                                <button className=''> <CiLock className='text-[#116630] text-xl' /></button>

                                <input
                                    className='outline-none focus:ring-0 focus:border-[#116630]'
                                    type='password'
                                    placeholder='Password'
                                    {...register("password", { required: true })}
                                />
                            </div>
                            {/* {errors.password && <span className='text-red-500'>This field is required</span>} */}

                            <div className='flex justify-between items-center gap-2'>
                                <p>Remember Me</p>
                                <Switch onChange={setChecked} uncheckedIcon={false} checked={checked} />
                            </div>

                            <input type="submit" value="Login" className='bg-gradient-to-r from-[#116630] to-[#1bd861] text-white p-2 rounded-xl' />

                            <button className=' border-[#116630] border-2 rounded-xl p-2 text-[#116630] shadow-xl '>Demo Account</button>

                        </form>
                        <div className="fixed bottom-1 left-0 right-0 flex flex-col justify-center items-center">
                            <hr className="w-[70%]" />
                            <p className="flex justify-center items-center gap-2 text-xs pt-1">
                                <FaRegCopyright /> 2024 <span className="font-semibold">ERPNext</span>
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
