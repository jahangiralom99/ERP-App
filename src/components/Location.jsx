import { BiCurrentLocation } from "react-icons/bi";


const Location = () => {
    return (
        <div className="flex justify-between items-center px-10 py-3 bg-white mx-5 my-3 rounded-2xl">
        <div className="flex items-center gap-2">
            <BiCurrentLocation className="text-3xl text-[#FF0000]" />
             <div className="text-xs">
            <p>49/2 shonir akhra</p>
            <p>Dhaka bangladesh</p>
             </div>

        </div>
        <div className="text-center border-[1px] p-1 border-[#FF0000] rounded-full text-xs "> Google <br /> Maps</div>

        
    </div>
    );
};

export default Location;