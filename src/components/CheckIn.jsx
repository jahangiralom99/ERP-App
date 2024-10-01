import React from 'react';
import avatar from '../assets/abstract-background-design-hd-light-beauty-green-color_851755-22320.avif'
import Time from "../components/Time";
import { BsArrowDownRightCircle } from "react-icons/bs";

const CheckIn = () => {
    return (
        <div className=" m-5 p-3 bg-white rounded-xl ">


        {/* avater */}
        <div className="flex justify-between items-center ">
            <p>
                <span className="text-xl font-semibold">Good Morning,</span> <br />
                <span className="text-xl font-bold">John Doe!</span>
            </p>
            <div className="avatar">
                <div className="w-12 rounded-full">
                    <img src={avatar} />
                </div>
            </div>

        </div>


        <p className="text-zinc-500 font-medium">You are not Check-in yet Today</p>
        <Time/>
        <button className="btn btn-outline btn-success w-full mt-2 text-xl"> <BsArrowDownRightCircle className="" /> Check In</button>




    </div>
    );
};

export default CheckIn;