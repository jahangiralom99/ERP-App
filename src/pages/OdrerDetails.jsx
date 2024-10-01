import React from 'react';
import { IoMdArrowBack } from 'react-icons/io';
import { TfiPencil } from 'react-icons/tfi';
import { Link } from 'react-router-dom';

const OdrerDetails = () => {
    return (
        <div className=" bg-[#e6f3e7] pb-12  text-black h-screen">
            {/* header */}
            <div>
                <div className='flex justify-between items-center h-14 w-full bg-white px-6 '>

                    <div className='flex items-center gap-4'>
                        <Link to='/orders'>
                            <IoMdArrowBack className="text-lg text-blue-600" />
                        </Link>
                        <p className=' font-medium'>Order Details</p>
                    </div>
                    <div>
                        <TfiPencil className="text-lg text-blue-600" />
                    </div>
                </div>

            </div>

            {/* order details */}

            <div className="px-5 pt-5 flex flex-col gap-3 ">

                <div className='bg-white rounded-xl p-3 '>

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
                            <p className="text-xs text-zinc-500 text-center">Expected Delivery</p>
                            <p className="text-xs text-center">23-09-2024</p>
                        </p>
                        <p>
                            <p className="text-xs text-zinc-500 text-center">Created By</p>
                            <p className="text-xs text-center">John</p>
                        </p>
                        <p>
                            <p className="text-xs text-zinc-500 text-center">Customer Name</p>
                            <p className="text-xs text-center">Tech Solution Inc.</p>
                        </p>
                    </div>


                </div>
            </div>



            {/* Accounting */}

            <div className="mx-5 mt-5 flex flex-col gap-3  bg-white rounded-xl p-3">
                <div className="flex justify-between">
                    <div>
                        <p className="text-sm font-medium pb-1 text-black">HP Pavillion x360</p>
                        <p className="text-xs text-zinc-500">&#2547; 75000.00*3.0</p>
                    </div>
                    <p className="text-sm font-medium">
                        &#2547; 225000.00
                    </p>
                </div>

                <hr />

                <div className="flex justify-between text-sm font-medium">
                    Tax & Discount
                </div>

                <hr />

                <div>
                    <div className="flex justify-between">
                        <p className="text-sm font-medium pb-1  text-zinc-500">Total Tax:</p>
                        <p className="text-sm font-medium">&#2547; 0.00</p>
                    </div>
                    <div className="flex justify-between">
                        <p className="text-sm font-medium pb-1  text-zinc-500">Sub total:</p>
                        <p className="text-sm font-medium">&#2547; 2,25,000.00</p>
                    </div>
                    <div className="flex justify-between">
                        <p className="text-sm font-medium pb-1  text-zinc-500">Discount:</p>
                        <p className="text-sm font-medium">&#2547; 0.00</p>
                    </div>
                </div>

                <hr />

                <div>
                    <div className="flex justify-between">
                        <p className="text-sm font-medium pb-1  text-zinc-500">Total:</p>
                        <p className="text-sm text-blue-600 font-medium">&#2547; 2,25,000.00</p>
                    </div>
                </div>

            </div>





            {/* comments */}

            <div className="mx-5 mt-5 flex flex-col gap-3  bg-white rounded-xl p-3">
                <div>
                    <p className='text-sm font-medium pb-3'>Comments</p>
                    <div className="flex items-center border-[1px] border-blue-600  rounded-lg overflow-hidden">
                        <input type="text" className="w-full p-2 border-none focus:outline-none" placeholder="Comment here..." />
                        <button className=" text-blue-600 font-medium p-2">
                            Send
                        </button>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default OdrerDetails;