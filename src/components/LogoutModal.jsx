

const LogoutModal = ({setOpen8}) => {
    return (
        <div className="h-screen fixed top-0 flex justify-center items-center  w-full z-10">
            <div onClick={() => setOpen8(false)}  className="bg-black opacity-30 fixed h-screen w-full top-0"></div>
            <div className="bg-white p-8 w-72 h-40 rounded-2xl z-10">
           <p className="text-[#FF0000] text-[16px] font-bold">Logout</p>
           <p className="pt-3 text-black font-semibold">Do you really want to logout?</p>

           <div className="flex justify-end gap-5 pt-8">
               <button onClick={() => setOpen8(false)} className="text-[#FF0000] font-bold">Cancel</button>
               <input type="submit" value={'Yes'} className="text-blue-600 font-bold"/>
           </div>
            </div>
        </div>
    );
};

export default LogoutModal;