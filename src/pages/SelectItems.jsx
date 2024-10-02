import { useState } from "react";
import { FaBangladeshiTakaSign, FaPlus } from "react-icons/fa6";
import { FiMinus } from "react-icons/fi";
import { IoIosSearch, IoMdArrowBack } from "react-icons/io";
import { RiQrScan2Line } from "react-icons/ri";
import { Link } from "react-router-dom";


const SelectItems = () => {
    const [open, setOpen] = useState(false)
    const [open1, setOpen1] = useState(false)
    const [open2, setOpen2] = useState(false)
    const [open3, setOpen3] = useState(false)
    const [open4, setOpen4] = useState(false)
    return (
        <div className="bg-gray-200 h-screen text-black ">
            {/* heading */}
            <div className='flex justify-between items-center h-14 w-full bg-white px-6 '>

                <div className='flex items-center gap-4'>
                    <Link to='/createorders'>
                        <IoMdArrowBack className="text-lg text-blue-600" />
                    </Link>
                    <p className=' font-medium'>Select Items</p>
                </div>
                <div>
                <IoIosSearch  className="text-xl text-blue-600" />
                </div>
            </div>


            {/* Scroll buttons */}

            <div className='p-3 flex gap-1 overflow-x-scroll scrollbar-hidden'
           style={{
                    scrollbarWidth: 'none', // For Firefox
                }}>
                  <style>
        {`
            .scrollbar-hidden::-webkit-scrollbar {
                display: none; /* For Chrome, Safari, and Edge */
            }
        `}
    </style>
                <button onClick={() => setOpen(!open)} className="border-[1px] w-24 bg-white border-zinc-400 px-3 py-2 text-sm rounded-3xl focus:bg-blue-500 focus:text-white font-semibold">Laptops</button>
                <button onClick={() => setOpen1(!open1)} className="border-[1px] w-24 bg-white border-zinc-400 px-3 py-2 text-sm rounded-3xl focus:bg-blue-500 focus:text-white font-semibold">desktops</button>
                <button onClick={() => setOpen2(!open2)} className="border-[1px] w-24 bg-white border-zinc-400 px-3 py-2 text-sm rounded-3xl focus:bg-blue-500 focus:text-white font-semibold">Monitors</button>
                <button onClick={() => setOpen3(!open3)} className="border-[1px] w-24 bg-white border-zinc-400 px-3 py-2 text-sm rounded-3xl focus:bg-blue-500 focus:text-white font-semibold">Printers</button>
                <button onClick={() => setOpen4(!open4)} className="border-[1px] w-24 bg-white border-zinc-400 px-3 py-2 text-sm rounded-3xl focus:bg-blue-500 focus:text-white font-semibold">components</button>
                <button className="border-[1px] w-24 bg-white border-zinc-400 px-3 py-2 text-sm rounded-3xl focus:bg-blue-500 focus:text-white font-semibold">Accessories</button>
                <button className="border-[1px] w-24 bg-white border-zinc-400 px-3 py-2 text-sm rounded-3xl focus:bg-blue-500 focus:text-white font-semibold">Products</button>


              
                
            </div>
              {/* pages of clicked button */}

              <div className="flex flex-col gap-[2px]">

              {
                    open && <div className="bg-white p-3">
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
                }
              {
                    open1 && <div className="bg-white p-3">
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
                }
              {
                    open2 && <div className="bg-white p-3">
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
                }
              {
                    open3 && <div className="bg-white p-3">
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
                }
              {
                    open4 && <div className="bg-white p-3">
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
                }
              </div>




              <button className="fixed bottom-0  border-[1px] p-3 bg-gradient-to-r from-blue-600 to-blue-950 text-white rounded-xl text-medium w-full">Create Order</button>


        </div>
    );
};

export default SelectItems;