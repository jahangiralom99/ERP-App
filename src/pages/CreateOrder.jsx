import { useEffect, useState } from "react";
import { CiUser } from "react-icons/ci";
import { FaRegUser, FaUser } from "react-icons/fa";
import { FaBangladeshiTakaSign, FaBuildingColumns, FaCirclePlus, FaPlus } from "react-icons/fa6";
import { IoMdArrowBack } from "react-icons/io";
import { LuBuilding2 } from "react-icons/lu";
import { RiArrowDropDownLine, RiArrowDropRightLine, RiQrScan2Line } from "react-icons/ri";
import { SlCalender } from "react-icons/sl";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { IoArrowUpCircleOutline } from "react-icons/io5";
import { FiMinus } from "react-icons/fi";


const CreateOrder = () => {
    const [open, setOpen] = useState(false)
    const [open1, setOpen1] = useState(false)
    const [open2, setOpen2] = useState(false)
    const [open3, setOpen3] = useState(false)
    const [startDate, setStartDate] = useState(new Date());


    const handleCalendarClick = () => {
        setOpen((prev) => !prev);
    };

    return (
        <div className="bg-gray-100 pb-20  text-black">
            {/* heading */}
            <div className='flex justify-between items-center h-14 w-full bg-white px-6 '>

                <div className='flex items-center gap-4'>
                    <Link to='/orders'>
                        <IoMdArrowBack className="text-lg text-blue-600" />
                    </Link>
                    <p className=' font-medium'>Create Order</p>
                </div>
                <div>
                    <RiQrScan2Line className="text-xl text-blue-600" />
                </div>
            </div>


            {/* form */}

            <div className="p-5 flex flex-col gap-2">


                {/* company */}

                <fieldset className="relative border-[1px] border-gray-600 rounded-xl ">
                    <legend className="ml-3 px-[5px] text-xs text-gray-500">
                        Company<sup>*</sup>
                    </legend>
                    <div className=" flex justify-between gap-2 items-center w-full pl-4 pb-2">
                        <LuBuilding2 className="text-[#FF0000]" />
                        <p className=" text-start w-[100px] whitespace-nowrap font-medium">Nesscale ESS</p>
                        <input type="text" className=" bg-transparent w-[80px] text-black" placeholder="" disabled />

                        <div onClick={() => setOpen1(!open1)}>
                            {open1 ? <RiArrowDropDownLine className="text-3xl ml-5 text-blue-600" /> : <RiArrowDropRightLine className="text-3xl ml-5 text-blue-600" />}


                        </div>


                        {open1 && <div className=" fixed bottom-2 px-3  bg-white rounded-box z-[1] w-[300px] p-2 shadow">
                            <div>
                                <div className="flex justify-between">
                                    <p className=" text-[12px] text-[#ff3232] font-bold">clear</p>
                                    <p className=" text-[12px] text- font-bold">Select Company </p>
                                    <p onClick={() => setOpen1(!open1)} className=" text-[12px] text-blue-600 font-bold">close</p>
                                </div>
                            </div>

                            {/* search */}

                            <label className="input input-bordered h-10 mt-3 flex items-center gap-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 16 16"
                                    fill="currentColor"
                                    className="h-4 w-4 opacity-70">
                                    <path
                                        fillRule="evenodd"
                                        d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                                        clipRule="evenodd" />
                                </svg>
                                <input type="text" className="grow" placeholder="Search" />

                            </label>

                            <hr className="my-3" />
                            <div className="flex gap-2 text-sm">
                                <input type="radio" name="radio-1" className="radio w-5 h-5" defaultChecked />
                                <p>Nesscale ESS</p>
                            </div>


                        </div>}



                    </div>
                </fieldset>
                {/* cost center */}

                <fieldset className="relative border-[1px] border-gray-600 rounded-xl ">
                    <legend className="ml-3 px-[5px] text-xs text-gray-500">
                        Cost Center
                    </legend>
                    <div className=" flex justify-between gap-2 items-center w-full pl-4 pb-2">
                        <FaBuildingColumns className="text-[#FF0000]" />
                        <p className=" text-start w-[100px] whitespace-nowrap font-medium">Main-NE</p>
                        <input type="text" className=" bg-transparent w-[80px] text-black" placeholder="" disabled />

                        <div onClick={() => setOpen2(!open2)}>
                            {open2 ? <RiArrowDropDownLine className="text-3xl ml-5 text-blue-600" /> : <RiArrowDropRightLine className="text-3xl ml-5 text-blue-600" />}


                        </div>


                        {open2 && <div className=" fixed bottom-2 px-3  bg-white rounded-box z-[1] w-[300px] p-2 shadow">
                            <div>
                                <div className="flex justify-between">
                                    <p className=" text-[12px] text-[#ff3232] font-bold">clear</p>
                                    <p className=" text-[12px] text- font-bold">Select Company </p>
                                    <p onClick={() => setOpen2(!open2)} className=" text-[12px] text-blue-600 font-bold">close</p>
                                </div>
                            </div>

                            {/* search */}

                            <label className="input input-bordered h-10 mt-3 flex items-center gap-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 16 16"
                                    fill="currentColor"
                                    className="h-4 w-4 opacity-70">
                                    <path
                                        fillRule="evenodd"
                                        d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                                        clipRule="evenodd" />
                                </svg>
                                <input type="text" className="grow" placeholder="Search" />

                            </label>

                            <hr className="my-3" />
                            <div className="flex gap-2 text-sm">
                                <input type="radio" name="radio-1" className="radio w-5 h-5" defaultChecked />
                                <p>Main-NE</p>
                            </div>


                        </div>}



                    </div>
                </fieldset>
                {/* Select customer */}

                <fieldset className="relative border-[1px] border-gray-600 rounded-xl ">
                    <legend className="ml-3 px-[5px] text-xs text-gray-500">
                        Select Customer
                    </legend>
                    <div className=" flex justify-between gap-2 items-center w-full pl-4 pb-2">
                        <FaRegUser className="text-[#FF0000] text-xl font-bold" />
                        <p className=" text-start w-[100px] whitespace-nowrap font-medium">Tech Solution inc.</p>
                        <input type="text" className=" bg-transparent w-[80px] text-black" placeholder="" disabled />

                        <div onClick={() => setOpen3(!open3)}>
                            {open3 ? <RiArrowDropDownLine className="text-3xl ml-5 text-blue-600" /> : <RiArrowDropRightLine className="text-3xl ml-5 text-blue-600" />}


                        </div>


                        {open3 && <div className=" fixed bottom-2 px-3  bg-white rounded-box z-[1] w-[300px] p-2 shadow">
                            <div>
                                <div className="flex justify-between">
                                    <p className=" text-[12px] text-[#ff3232] font-bold">clear</p>
                                    <p className=" text-[12px] text- font-bold">Select Company </p>
                                    <p onClick={() => setOpen3(!open3)} className=" text-[12px] text-blue-600 font-bold">close</p>
                                </div>
                            </div>

                            {/* search */}

                            <label className="input input-bordered h-10 mt-3 flex items-center gap-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 16 16"
                                    fill="currentColor"
                                    className="h-4 w-4 opacity-70">
                                    <path
                                        fillRule="evenodd"
                                        d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                                        clipRule="evenodd" />
                                </svg>
                                <input type="text" className="grow" placeholder="Search" />

                            </label>

                            <hr className="my-3" />
                            <div className="flex gap-2 text-sm">
                                <input type="radio" name="radio-1" className="radio w-5 h-5" defaultChecked />
                                <p>Tech Solution inc.</p>
                            </div>


                        </div>}



                    </div>
                </fieldset>
                {/* date */}

                <fieldset className="relative border-[1px] border-gray-600 rounded-xl">
                    <legend className="ml-3 px-[5px] text-xs text-gray-500">
                        Company<sup>*</sup>
                    </legend>
                    <div className="flex  gap-4 items-center w-full pl-4 pb-2">
                        <SlCalender onClick={handleCalendarClick} className="text-[#FF0000] text-xl font-bold" />
                        <DatePicker
                            className="bg-transparent text-black font-medium "
                            selected={startDate}
                            onChange={(date) => {
                                setStartDate(date);
                                setOpen(false); // Close the date picker after selection
                            }}
                            onClickOutside={() => setOpen(false)} // Close when clicking outside
                            open={open} // Control the open state
                            onFocus={handleCalendarClick} // Open on focus

                        />
                    </div>
                </fieldset>




            </div>



            {/* buttons */}

            <div className="px-5 flex flex-col">
                <div className="flex flex-col gap-3">
                    <Link to='/selectitems'>
                        <button className="w-full bg-blue-100 p-2 rounded-xl flex justify-center items-center gap-2 "> <FaCirclePlus className="text-[#FF0000] bg-white rounded-full text-xl" /> Add item Details</button>
                    </Link>
                    <button className="w-full bg-stone-200 p-2 rounded-xl flex justify-center items-center gap-2 text-zinc-500 "><IoArrowUpCircleOutline className="text-2xl" /> Attachment</button>
                </div>


                {/* data from select item page */}


                <div className="pt-5 text-sm text-black font-medium">

                    <div className="flex justify-between">
                        <p className="text-zinc-500">Items*</p>
                        <p className="text-[#FF0000]">Delete Items</p>
                    </div>

                    <div className="border-[1px] bg-white border-zinc-300 rounded-xl">
                        {/* part-1 */}
                        <div className=" p-3 rounded-xl">
                            <div className="flex justify-between">
                                <div className="flex flex-col gap-2">
                                    <p className="font-medium text-sm">Dell Inspiron 15</p>
                                    <p className="flex items-center gap-1 text-xs text-zinc-600"><FaBangladeshiTakaSign /> 90,000.00*0.0</p>
                                </div>
                                <div className="flex flex-col justify-end items-center text-sm">
                                    <p>0.0</p>
                                    <div className="flex items-center gap-2 border-[2px] rounded-lg p-1 "><FiMinus /> <p>0.0</p>   <FaPlus /></div>
                                </div>
                            </div>
                        </div>


                        <hr />
                         
                        {/* button */}
                        <Link to='/selectitems'>
                            <div className="p-3 flex items-center gap-2">
                            <FaCirclePlus className="text-[#FF0000] bg-white rounded-full text-lg" /> 
                            <p className="">Add Another Item</p>
                            </div>
                        </Link>

                        <hr />

                        {/* Taxes and Discount`` */}
                         
                         <p className="p-3">
                            Taxes & Discount

                         </p>

                         <hr />

                         
                    </div>
                </div>







                <div className="flex gap-3 px-5 bg-gray-100 fixed bottom-2 left-0 right-0 justify-center">
                    <Link className="w-full" to='/orders'>
                        <button className="border-[1px] border-zinc-400 text-zinc-600 p-3 rounded-xl w-full">Close</button>
                    </Link>
                    <button className="border-[1px] p-3 bg-gradient-to-r from-blue-600 to-blue-950 text-white rounded-xl text-medium w-full">Create Order</button>
                </div>
            </div>

        </div>
    );
};

export default CreateOrder;