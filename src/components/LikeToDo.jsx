import React from 'react';
import { IoMdSettings } from 'react-icons/io';
import expenses from '../assets/expense.png'
import order from '../assets/order.png'
import leave from '../assets/leave.png'
import { Link } from 'react-router-dom';


const LikeToDo = () => {
    return (
        <div className='p-5'>
            <div className='pb-3  flex justify-between items-center'>
                <p className='text-zinc-500 font-medium'>What would you like to do?</p>
                <p><IoMdSettings /></p>


                {/* cards-------------------------- */}


            </div>
            <div className=' grid grid-cols-3 gap-3 font-medium text-sm mb-5'>

                <Link to='/orders'>
                <div className='bg-white flex justify-center items-center flex-col p-3 rounded-xl'>
                    <img className='w-8 pb-1' src={order} alt="" />
                    <p>Orders</p>

                </div>
                </Link>
                <div className='bg-white flex justify-center items-center flex-col p-3 rounded-xl'>
                    <img className='w-8 pb-1' src={expenses} alt="" />
                    <p>Expense</p>

                </div>
                <div className='bg-white flex justify-center items-center flex-col p-3 rounded-xl'>
                    <img className='w-8 pb-1' src={leave} alt="" />
                    <p>Leave</p>

                </div>
                <div className='bg-white flex justify-center items-center flex-col p-3 rounded-xl'>
                    <img className='w-8 pb-1' src={expenses} alt="" />
                    <p>Payroll</p>

                </div>
                <div className='bg-white flex justify-center items-center flex-col p-3 rounded-xl'>
                    <img className='w-8 pb-1' src={expenses} alt="" />
                    <p>Holiday</p>

                </div>
                <div className='bg-white flex justify-center items-center flex-col p-3 rounded-xl'>
                    <img className='w-8 pb-1' src={expenses} alt="" />
                    <p>Attendence</p>

                </div>

                <div className='bg-white flex justify-center items-center flex-col p-3 rounded-xl'>
                    <img className='w-8 pb-1' src={expenses} alt="" />
                    <p>Transactions</p>

                </div>

                <div className='bg-white flex justify-center items-center flex-col p-3 rounded-xl'>
                    <img className='w-8 pb-1' src={expenses} alt="" />
                    <p>Visit</p>

                </div>


                <div className='bg-white flex justify-center items-center flex-col p-3 rounded-xl'>
                    <img className='w-8 pb-1' src={expenses} alt="" />
                    <p>Payment</p>

                </div>

                <div className='bg-white flex justify-center items-center flex-col p-3 rounded-xl'>
                    <img className='w-8 pb-1' src={expenses} alt="" />
                    <p>Petty Expenses</p>

                </div>   

                <div className='bg-white flex justify-center items-center flex-col p-3 rounded-xl'>
                    <img className='w-8 pb-1' src={expenses} alt="" />
                    <p>Timesheet</p>

                </div>

                <div className='bg-white flex justify-center items-center flex-col p-3 rounded-xl'>
                    <img className='w-8 pb-1' src={expenses} alt="" />
                    <p>Issue</p>

                </div>

                <div className='bg-white flex justify-center items-center flex-col p-3 rounded-xl'>
                    <img className='w-8 pb-1' src={expenses} alt="" />
                    <p>Quatation</p>

                </div>

            </div>

            <button className="btn btn-outline w-full btn-info">View more</button>
        </div>
    );
};

export default LikeToDo;