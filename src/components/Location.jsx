import { useState } from "react";
import { BiCurrentLocation } from "react-icons/bi";

const Location = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className="flex justify-between items-center px-10 py-3 bg-white mx-5 my-3 rounded-2xl">
            <div className="flex items-center gap-2">
                <BiCurrentLocation className="text-3xl text-[#FF0000]" />
                <div className="text-xs">
                    <p>49/2 Shonir Akhra</p>
                    <p>Dhaka, Bangladesh</p>
                </div>
            </div>
            <div>
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3653.2614811050375!2d90.45120552592653!3d23.702354640618037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b74993c45fad%3A0x4036eaf54121ad53!2sIONIC%20Corporation!5e0!3m2!1sbn!2sbd!4v1720508977665!5m2!1sbn!2sbd&output=embed"
                    className="w-[100px] h-[40px]"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </div>
    );
};

export default Location;
