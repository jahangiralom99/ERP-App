import { IoMdArrowBack } from "react-icons/io";


const EducationDetails = ({setOpen2}) => {
    return (
        <div className='h-screen fixed top-0 bg-gray-200 w-full z-10'>
            
            
            {/* heading */}
            <div className='flex justify-between items-center h-14 w-full bg-white px-6 '>

                <div  onClick={() => setOpen2(false)} className='flex items-center gap-4'>
                
                        <IoMdArrowBack className="text-lg text-blue-600" />
                   
                    <p className=' font-medium'>Educational Details</p>
                </div>
                <div>
                    {/* <IoIosSearch className="text-xl text-blue-600" /> */}
                </div>
            </div>

            {/* details */}
            <div className=' flex flex-col gap-2 bg-white rounded-2xl m-5 '>
                <div className='py-[10px] px-3 ' >
                    <p className='text-zinc-500 pb- font-medium'>Qualification</p>
                    <p className='font-bold'>B.E.</p>
                </div>

                <hr />

                <div className='py-[10px] px-3 ' >
                    <p className='text-zinc-500 pb- font-medium'>School/University</p>
                    <p className='font-bold'>GTU</p>
                </div>

                <hr />

                <div className='py-[10px] px-3 ' >
                    <p className='text-zinc-500 pb- font-medium'>Passing Year</p>
                    <p className='font-bold'>2017</p>
                </div>
              
                
            </div>
        </div>
    );
};

export default EducationDetails;