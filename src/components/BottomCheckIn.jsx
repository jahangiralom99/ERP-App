import { BiCurrentLocation } from "react-icons/bi";
import { PiArrowsCounterClockwiseFill, PiClockClockwiseFill, PiClockCounterClockwiseFill } from "react-icons/pi";


const BottomCheckIn = () => {
    return (


        <div className="  bg-white rounded-2xl mx-5 ">

           
           

            <div className=" flex justify-evenly  items-center p-1">
                <div className="flex flex-col justify-evenly items-center">
                    <PiClockClockwiseFill className="text-[#FF0000] text-3xl" />
                    <p className="text- font-medium">--:--</p>
                    <p className="text-[#FF0000] text-xs font-medium"> Check In</p>
                </div>
                <div className="flex flex-col justify-evenly items-center">
                    <PiClockCounterClockwiseFill className="text-[#FF0000] text-3xl" />
                    <p className="text- font-medium">--:--</p>
                    <p className="text-[#FF0000] text-xs font-medium"> Check Out</p>
                </div>
                <div className="flex flex-col justify-evenly items-center">
                    <PiArrowsCounterClockwiseFill className="text-[#FF0000] text-3xl" />
                    <p className="text- font-medium">--:--</p>
                    <p className="text-[#FF0000] text-xs font-medium"> Duration</p>
                </div>



            </div>
        </div>
    );
};

export default BottomCheckIn;