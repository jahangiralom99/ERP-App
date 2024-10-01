import React from 'react';

const Request = () => {
    return (
        <div className='px-5'>
                  <p className='text-zinc-500 font-medium pb-3'>Pending Request</p>
                 <div className='bg-white rounded-xl p-3'>


                  <div className=' flex justify-between'>
                    <button className='bg-[#f7f0fa] border-[1px] border-[#d084f4] p-[5px] rounded-lg font-medium text-sm text-[#d084f4] ' 
                    >Food</button>
                    <button className='text-red-600 border-[2px] rounded-lg p-[3px]'>Draft</button>
                  </div>
                    <div className='flex gap-1 pt-1 text-blue-600 font-semibold'>
                    &#8377;<p>250.00</p>
                    </div>
                    <p className='font-semibold text-black'>23/09/2024</p>
                 </div>

                  <div>

                  </div>
        </div>
    );
};

export default Request;
