import React from 'react';
import avatar from '../assets/avater.jpg'
import Time from "../components/Time";
import { BsArrowDownRightCircle } from "react-icons/bs";
import { Link } from 'react-router-dom';

const CheckIn = () => {
    return (
        <div className=" m-5 p-3 bg-white rounded-xl ">


        {/* avater */}
        <div className="flex justify-between items-center ">
            <p>
                <span className=" font-semibold">Good Morning,</span> <br />
                <span className=" font-bold">John Doe!</span>
            </p>
            <div className="avatar">
                <div className="w-12 rounded-full">
                    <img src={avatar} />
                </div>
            </div>

        </div>


        <p className="text-zinc-500 text-sm font-medium">You are not Check-in yet Today</p>

        <Time/>

        <Link to="/markattendence">
        <button className="border-[1px] w-full font-bold border-black bg-gradient-to-r from-gray-800 to-gray-300 text-white p-2 rounded-xl flex items-center justify-center gap-2"> <BsArrowDownRightCircle className=" " /> Check In</button>
        </Link>





    </div>
    );
};

export default CheckIn;