import { useState } from "react";
import DatePicker from "react-datepicker";
import { BsFilterLeft } from "react-icons/bs";
import { FaPlus, FaRegUser } from "react-icons/fa";
import { IoMdArrowBack } from "react-icons/io";
import { RiArrowDropDownLine, RiArrowDropRightLine } from "react-icons/ri";
import { SlCalender } from "react-icons/sl";
import { Link } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";


const Orders = () => {

    const [open, setOpen] = useState(false)
    const [open2, setOpen2] = useState(false)
    const [open3, setOpen3] = useState(false)
    const [open4, setOpen4] = useState(false)
    const [startDate, setStartDate] = useState(new Date());

    const handleCalendarClick = () => {
        setOpen4((prev) => !prev);
    };

    return (
        <div className=" bg-gray-200 pb-12 ">
            {/* header */}
            <div className='flex justify-between items-center h-14 w-full bg-white px-6 '>
                <div className='flex items-center gap-4'>
                    <Link to='/'>
                        <IoMdArrowBack className="text-lg text-blue-600" />
                    </Link>
                    <p className=' font-medium'>Orders</p>
                </div>

                <BsFilterLeft onClick={() => setOpen(!open)} className="text-2xl text-blue-600" />
                {
                    open && <div className="fixed bottom-0 left-0 right-0 bg-gray-50  rounded-t-xl z-10 flex justify-center items-center">

                        <div>

                            <div className="flex justify-between w-full pt-3 ">
                                <p className="w-10"></p>
                                <p className="text-black font-medium">Filter Orders</p>
                                <p onClick={() => setOpen(!open)} className="text-blue-600 font-medium"> close</p>
                            </div>

                          <div className="h-[1px] w-full bg-[#aca7a7] my-3"></div>


                          {/* input field */}

               <div className="flex flex-col gap-3">
                
                           {/* Select customer */}

                <fieldset className="relative border-[1px] border-gray-600 rounded-xl ">
                    <legend className="ml-3 px-[5px] text-xs text-gray-500">
                        Select Customer
                    </legend>
                    <div className=" flex justify-between gap-2 items-center w-full pl-4 pb-2">
                    <FaRegUser  className="text-[#E70006] text-xl font-bold" />
                 
                        <input type="text" className=" bg-transparent w-[80px] text-black" placeholder="customer" disabled />

                        <div onClick={() => setOpen3(!open3)}>
                            {open3 ? <RiArrowDropDownLine className="text-3xl ml-5 text-blue-600" /> : <RiArrowDropRightLine className="text-3xl ml-5 text-blue-600" />}


                        </div>


                        {open3 && <div className=" fixed bottom-2 px-3  bg-white rounded-box z-[1] w-[300px] p-2 shadow">
                            <div>
                                <div className="flex justify-between">
                                    <p className=" text-[12px] text-[#ff3232] font-bold">clear</p>
                                    <p className=" text-[12px] text- font-bold">Select Company </p>
                                    <p onClick={()=>setOpen3(!open3)} className=" text-[12px] text-blue-600 font-bold">close</p>
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

                            <hr  className="my-3"/>
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
                <SlCalender  onClick={handleCalendarClick} className="text-[#E70006] text-xl font-bold" />
                <DatePicker
                className="bg-transparent text-black font-medium"
                selected={startDate}
                onChange={(date) => {
                    setStartDate(date);
                    setOpen4(false); // Close the date picker after selection
                }}
                onClickOutside={() => setOpen4(false)} // Close when clicking outside
                open={open4} // Control the open state
                onFocus={handleCalendarClick} // Open on focus
            
            />
                </div>
            </fieldset>
                </div>           









                            <div className="flex gap-3 px-5 justify-between py-3">
                                
                                    <button onClick={()=> setOpen(!open)} className="border-[1px] border-zinc-400 text-zinc-600 p-3 rounded-xl  w-[130px]">Clear Filters</button>
                               
                                <button className="border-[1px]  p-3 bg-gradient-to-r from-blue-600 to-blue-950 text-white rounded-xl whitespace-nowrap text-medium  w-[130px]">Apply Filters</button>
                            </div>
                        </div>




                    </div>
                }
            </div>



            {/* plus button */}

            <Link to='/createorders'>
                <div className="border-[1px]  border-[#7579ff] p-3 w-12 bg-white rounded-lg font-medium text-sm text-[#7579ff] flex justify-center items-center fixed bottom-5 right-5">
                    <FaPlus className="text-lg " />
                </div>
            </Link>




            {/* orders */}

            <div className="px-5 pt-5 flex flex-col gap-3 ">

                {/* order1 */}
                <Link to='/orderdetails'>
                    <div className="bg-white p-3 rounded-xl  ">

                        <div className=" flex justify-between">
                            <div>

                                <p className="text-xs text-blue-600">SAL-ORD-2024-00014</p>
                                <p className="text-xs text-zinc-500">23-09-2024</p>
                            </div>
                            <div>
                                <button className="bg-[#e1ebf8] border-[1px] border-[#7579ff] p-[5px] rounded-lg font-medium text-sm text-[#7579ff] ">
                                    Draft
                                </button>
                            </div>
                        </div>
                        <div className="pt-3 flex gap-2 justify-between flex-wrap " >
                            <p>
                                <p className="text-xs text-zinc-500 text-center">Customer Name</p>
                                <p className="text-xs text-center">Tech Solution Inc.</p>
                            </p>
                            <p>
                                <p className="text-xs text-zinc-500 text-center">Items</p>
                                <p className="text-xs text-center">3.0</p>
                            </p>
                            <p>
                                <p className="text-xs text-zinc-500 text-center">Amount</p>
                                <p className="text-xs text-center">&#2547; 2,25,000.00</p>
                            </p>
                        </div>
                    </div>
                </Link>








                {/* order1 */}
                <div className="bg-white p-3 rounded-xl  ">

                    <div className=" flex justify-between">
                        <div>

                            <p className="text-xs text-blue-600">SAL-ORD-2024-00014</p>
                            <p className="text-xs text-zinc-500">23-09-2024</p>
                        </div>
                        <div>
                            <button className="bg-[#e1ebf8] border-[1px] border-[#7579ff] p-[5px] rounded-lg font-medium text-sm text-[#7579ff] ">
                                Draft
                            </button>
                        </div>
                    </div>
                    <div className="pt-3 flex gap-2 justify-between " >
                        <p>
                            <p className="text-xs text-zinc-500 text-center">Customer Name</p>
                            <p className="text-xs text-center">Tech Solution Inc.</p>
                        </p>
                        <p>
                            <p className="text-xs text-zinc-500 text-center">Items</p>
                            <p className="text-xs text-center">3.0</p>
                        </p>
                        <p>
                            <p className="text-xs text-zinc-500 text-center">Amount</p>
                            <p className="text-xs text-center">&#2547; 2,25,000.00</p>
                        </p>
                    </div>
                </div>

                {/* order1 */}
                <div className="bg-white p-3 rounded-xl  ">

                    <div className=" flex justify-between">
                        <div>

                            <p className="text-xs text-blue-600">SAL-ORD-2024-00014</p>
                            <p className="text-xs text-zinc-500">23-09-2024</p>
                        </div>
                        <div>
                            <button className="bg-[#e1ebf8] border-[1px] border-[#7579ff] p-[5px] rounded-lg font-medium text-sm text-[#7579ff] ">
                                Draft
                            </button>
                        </div>
                    </div>
                    <div className="pt-3 flex gap-2 justify-between " >
                        <p>
                            <p className="text-xs text-zinc-500 text-center">Customer Name</p>
                            <p className="text-xs text-center">Tech Solution Inc.</p>
                        </p>
                        <p>
                            <p className="text-xs text-zinc-500 text-center">Items</p>
                            <p className="text-xs text-center">3.0</p>
                        </p>
                        <p>
                            <p className="text-xs text-zinc-500 text-center">Amount</p>
                            <p className="text-xs text-center">&#8377; 2,25,000.00</p>
                        </p>
                    </div>
                </div>

                {/* order1 */}
                <div className="bg-white p-3 rounded-xl  ">

                    <div className=" flex justify-between">
                        <div>

                            <p className="text-xs text-blue-600">SAL-ORD-2024-00014</p>
                            <p className="text-xs text-zinc-500">23-09-2024</p>
                        </div>
                        <div>
                            <button className="bg-[#e1ebf8] border-[1px] border-[#7579ff] p-[5px] rounded-lg font-medium text-sm text-[#7579ff] ">
                                Draft
                            </button>
                        </div>
                    </div>
                    <div className="pt-3 flex gap-2 justify-between " >
                        <p>
                            <p className="text-xs text-zinc-500 text-center">Customer Name</p>
                            <p className="text-xs text-center">Tech Solution Inc.</p>
                        </p>
                        <p>
                            <p className="text-xs text-zinc-500 text-center">Items</p>
                            <p className="text-xs text-center">3.0</p>
                        </p>
                        <p>
                            <p className="text-xs text-zinc-500 text-center">Amount</p>
                            <p className="text-xs text-center">&#8377; 2,25,000.00</p>
                        </p>
                    </div>
                </div>

                {/* order1 */}
                <div className="bg-white p-3 rounded-xl  ">

                    <div className=" flex justify-between">
                        <div>

                            <p className="text-xs text-blue-600">SAL-ORD-2024-00014</p>
                            <p className="text-xs text-zinc-500">23-09-2024</p>
                        </div>
                        <div>
                            <button className="bg-[#e1ebf8] border-[1px] border-[#7579ff] p-[5px] rounded-lg font-medium text-sm text-[#7579ff] ">
                                Draft
                            </button>
                        </div>
                    </div>
                    <div className="pt-3 flex gap-2 justify-between " >
                        <p>
                            <p className="text-xs text-zinc-500 text-center">Customer Name</p>
                            <p className="text-xs text-center">Tech Solution Inc.</p>
                        </p>
                        <p>
                            <p className="text-xs text-zinc-500 text-center">Items</p>
                            <p className="text-xs text-center">3.0</p>
                        </p>
                        <p>
                            <p className="text-xs text-zinc-500 text-center">Amount</p>
                            <p className="text-xs text-center">&#8377; 2,25,000.00</p>
                        </p>
                    </div>
                </div>

                {/* order1 */}
                <div className="bg-white p-3 rounded-xl  ">

                    <div className=" flex justify-between">
                        <div>

                            <p className="text-xs text-blue-600">SAL-ORD-2024-00014</p>
                            <p className="text-xs text-zinc-500">23-09-2024</p>
                        </div>
                        <div>
                            <button className="bg-[#e1ebf8] border-[1px] border-[#7579ff] p-[5px] rounded-lg font-medium text-sm text-[#7579ff] ">
                                Draft
                            </button>
                        </div>
                    </div>
                    <div className="pt-3 flex gap-2 justify-between " >
                        <p>
                            <p className="text-xs text-zinc-500 text-center">Customer Name</p>
                            <p className="text-xs text-center">Tech Solution Inc.</p>
                        </p>
                        <p>
                            <p className="text-xs text-zinc-500 text-center">Items</p>
                            <p className="text-xs text-center">3.0</p>
                        </p>
                        <p>
                            <p className="text-xs text-zinc-500 text-center">Amount</p>
                            <p className="text-xs text-center">&#8377; 2,25,000.00</p>
                        </p>
                    </div>
                </div>

                {/* order1 */}
                <div className="bg-white p-3 rounded-xl  ">

                    <div className=" flex justify-between">
                        <div>

                            <p className="text-xs text-blue-600">SAL-ORD-2024-00014</p>
                            <p className="text-xs text-zinc-500">23-09-2024</p>
                        </div>
                        <div>
                            <button className="bg-[#e1ebf8] border-[1px] border-[#7579ff] p-[5px] rounded-lg font-medium text-sm text-[#7579ff] ">
                                Draft
                            </button>
                        </div>
                    </div>
                    <div className="pt-3 flex gap-2 justify-between " >
                        <p>
                            <p className="text-xs text-zinc-500 text-center">Customer Name</p>
                            <p className="text-xs text-center">Tech Solution Inc.</p>
                        </p>
                        <p>
                            <p className="text-xs text-zinc-500 text-center">Items</p>
                            <p className="text-xs text-center">3.0</p>
                        </p>
                        <p>
                            <p className="text-xs text-zinc-500 text-center">Amount</p>
                            <p className="text-xs text-center">&#8377; 2,25,000.00</p>
                        </p>
                    </div>
                </div>

                {/* order1 */}
                <div className="bg-white p-3 rounded-xl  ">

                    <div className=" flex justify-between">
                        <div>

                            <p className="text-xs text-blue-600">SAL-ORD-2024-00014</p>
                            <p className="text-xs text-zinc-500">23-09-2024</p>
                        </div>
                        <div>
                            <button className="bg-[#e1ebf8] border-[1px] border-[#7579ff] p-[5px] rounded-lg font-medium text-sm text-[#7579ff] ">
                                Draft
                            </button>
                        </div>
                    </div>
                    <div className="pt-3 flex gap-2 justify-between " >
                        <p>
                            <p className="text-xs text-zinc-500 text-center">Customer Name</p>
                            <p className="text-xs text-center">Tech Solution Inc.</p>
                        </p>
                        <p>
                            <p className="text-xs text-zinc-500 text-center">Items</p>
                            <p className="text-xs text-center">3.0</p>
                        </p>
                        <p>
                            <p className="text-xs text-zinc-500 text-center">Amount</p>
                            <p className="text-xs text-center">&#8377; 2,25,000.00</p>
                        </p>
                    </div>
                </div>

            </div>


        </div>
    );
};

export default Orders;