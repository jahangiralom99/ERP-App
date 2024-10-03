import { BiCurrentLocation } from "react-icons/bi";
import { PiArrowsCounterClockwiseFill, PiClockClockwiseFill, PiClockCounterClockwiseFill } from "react-icons/pi";


const BottomCheckIn = () => {
    return (


        <div className="   rounded-2xl mx-5 pb-">


            {/* location */}


            <div className="flex justify-between items-center px-7  pb-3  rounded-2xl">
                <div className="flex items-center gap-2">
                    <BiCurrentLocation className="text-3xl text-[#FF0000]" />
                    <div className="text-xs">
                        <p>49/2 Shonir Akhra</p>
                        <p>Dhaka, Bangladesh</p>
                    </div>
                </div>
                <div className="border-[1px] border-[#FF0000] rounded-full">
                 
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3653.2614811050375!2d90.45120552592653!3d23.702354640618037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b74993c45fad%3A0x4036eaf54121ad53!2sIONIC%20Corporation!5e0!3m2!1sbn!2sbd!4v1720508977665!5m2!1sbn!2sbd"
                        className="w-[80px] h-[80px] rounded-full"

                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>


            {/* checkin */}

            <div className=" flex justify-between  items-center py-1 px-5">
                <div className="flex flex-col justify-end items-center">
                    <PiClockClockwiseFill className="text-[#FF0000] text-2xl" />
                    <p className="text- font-medium">--:--</p>
                    <p className="text-[#FF0000] text-xs font-medium"> Check In</p>
                </div>
                <div className="flex flex-col justify-end items-center">
                    <PiClockCounterClockwiseFill className="text-[#FF0000] text-2xl" />
                    <p className="text- font-medium">--:--</p>
                    <p className="text-[#FF0000] text-xs font-medium"> Check Out</p>
                </div>
                <div className="flex flex-col justify-end items-center">
                    <PiArrowsCounterClockwiseFill className="text-[#FF0000] text-2xl" />
                    <p className="text- font-medium">--:--</p>
                    <p className="text-[#FF0000] text-xs font-medium"> Duration</p>
                </div>



            </div>
        </div>
    );
};

export default BottomCheckIn;