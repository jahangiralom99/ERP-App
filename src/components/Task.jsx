import React from 'react';
import { FaShoppingBag } from 'react-icons/fa';
import { MdKeyboardArrowRight } from 'react-icons/md';
import box from '../assets/box.png'


const Task = () => {
    return (
        <div>
            <div className='flex items-center justify-between px-5 pb-3'>
                <p className='text-zinc-500 font-medium'>Your Task</p>
                <button className='flex items-center justify-between text-blue-600 font-semibold '>View all <MdKeyboardArrowRight /></button>
            </div>

          <div  className='flex gap-2 overflow-x-scroll px-5 scrollbar-hidden'
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
              {/* Card */}

              <div className="card card-compact bg-base-100 w-72 mx-auto shadow-xl">
               <div className='bg-[#4D4DE7] w-72 h-36 rounded-t-2xl p-3'>
                    <div >
                    <FaShoppingBag className='text-white glass p-2 text-4xl rounded-lg  ' />
                    </div>

                    <div className='flex justify-center items-center'>

                   <img className='h-14' src={box} alt="" />
                    </div>
               </div>
                <div className="card-body">
                
                    <p className='text-center text-blue-600'>No Task Assigned Yet</p>
                    
                </div>
            </div>
              {/* Card */}

              <div className="card card-compact bg-base-100 w-72 mx-auto shadow-xl">
               <div className='bg-[#4D4DE7] w-72 h-36 rounded-t-2xl p-3'>
                    <div >
                    <FaShoppingBag className='text-white glass p-2 text-4xl rounded-lg  ' />
                    </div>

                    <div className='flex justify-center items-center'>

                   <img className='h-14' src={box} alt="" />
                    </div>
               </div>
                <div className="card-body">
                
                    <p className='text-center text-blue-600'>No Task Assigned Yet</p>
                    
                </div>
            </div>
              {/* Card */}

              <div className="card card-compact bg-base-100 w-72 mx-auto shadow-xl">
               <div className='bg-[#4D4DE7] w-72 h-36 rounded-t-2xl p-3'>
                    <div >
                    <FaShoppingBag className='text-white glass p-2 text-4xl rounded-lg  ' />
                    </div>

                    <div className='flex justify-center items-center'>

                   <img className='h-14' src={box} alt="" />
                    </div>
               </div>
                <div className="card-body">
                
                    <p className='text-center text-blue-600'>No Task Assigned Yet</p>
                    
                </div>
            </div>
          
          </div>

        </div>
    );
};

export default Task;