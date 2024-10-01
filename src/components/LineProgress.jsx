import { Circle, Line } from 'rc-progress';
import React from 'react';

const LineProgress = () => {
    return (
        <div className="m-5  ">
            <p className='text-zinc-500 font-medium pb-3'>Attendance Details</p>
            <div className='bg-white rounded-xl p-3'>
                <button className='bg-[#e1ebf8] border-[1px] border-[#7579ff] p-[5px] rounded-lg font-medium text-sm text-[#7579ff] '>
                    October
                </button>


                {/* progress line with data */}

                <div className='py-3'>
                    <div>
                        <p className='flex gap-2 pb-3'>
                            <span>0 Days |</span>
                            <span>0 Days |</span>
                            <span>0 Days |</span>
                        </p>
                    </div>

                <Line percent={10} strokeWidth={4} strokeColor="#D3D3D3" />
                </div>

                {/* <Circle percent={10} strokeWidth={4} strokeColor="#D3D3D3" />  */}
            </div>
        </div>
    );
};

export default LineProgress;