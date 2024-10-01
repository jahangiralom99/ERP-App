import { BsFilterLeft } from "react-icons/bs";
import { FaPlus } from "react-icons/fa";
import { IoMdArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";


const Orders = () => {
    return (
        <div className=" bg-[#e6f3e7] pb-12 ">
            {/* header */}
            <div className='flex justify-between items-center h-14 w-full bg-white px-6 '>
                <div className='flex items-center gap-4'>
                    <Link to='/'>
                        <IoMdArrowBack className="text-lg text-blue-600" />
                    </Link>
                    <p className=' font-medium'>Orders</p>
                </div>
                <BsFilterLeft className="text-lg text-blue-600" />
            </div>



            {/* plus button */}

            <Link to='/createorders'>
            <div className="border-[1px]  border-[#7579ff] p-3 w-12 bg-white rounded-lg font-medium text-sm text-[#7579ff] flex justify-center items-center fixed bottom-5 right-5">
            <FaPlus className="text-lg " />
            </div>
            </Link>




            {/* orders */}

            <div className="px-5 pt-5 flex flex-col gap-3 ">

                {/* order1 */}
                <Link to='/orderdetails'>
                <div className="bg-white p-3 rounded-xl  ">

                <div className=" flex justify-between">
                    <div>

                        <p className="text-xs text-blue-600">SAL-ORD-2024-00014</p>
                        <p className="text-xs text-zinc-500">23-09-2024</p>
                    </div>
                    <div>
                        <button className="bg-[#e1ebf8] border-[1px] border-[#7579ff] p-[5px] rounded-lg font-medium text-sm text-[#7579ff] ">
                            Draft
                        </button>
                    </div>
                </div>
                <div className="pt-3 flex gap-2 justify-between flex-wrap " >
                    <p>
                        <p className="text-xs text-zinc-500 text-center">Customer Name</p>
                        <p className="text-xs text-center">Tech Solution Inc.</p>
                    </p>
                    <p>
                        <p className="text-xs text-zinc-500 text-center">Items</p>
                        <p className="text-xs text-center">3.0</p>
                    </p>
                    <p>
                        <p className="text-xs text-zinc-500 text-center">Amount</p>
                        <p className="text-xs text-center">&#2547; 2,25,000.00</p>
                    </p>
                </div>
                </div>
                </Link>








                {/* order1 */}
                <div className="bg-white p-3 rounded-xl  ">

                <div className=" flex justify-between">
                    <div>

                        <p className="text-xs text-blue-600">SAL-ORD-2024-00014</p>
                        <p className="text-xs text-zinc-500">23-09-2024</p>
                    </div>
                    <div>
                        <button className="bg-[#e1ebf8] border-[1px] border-[#7579ff] p-[5px] rounded-lg font-medium text-sm text-[#7579ff] ">
                            Draft
                        </button>
                    </div>
                </div>
                <div className="pt-3 flex gap-2 justify-between " >
                    <p>
                        <p className="text-xs text-zinc-500 text-center">Customer Name</p>
                        <p className="text-xs text-center">Tech Solution Inc.</p>
                    </p>
                    <p>
                        <p className="text-xs text-zinc-500 text-center">Items</p>
                        <p className="text-xs text-center">3.0</p>
                    </p>
                    <p>
                        <p className="text-xs text-zinc-500 text-center">Amount</p>
                        <p className="text-xs text-center">&#2547; 2,25,000.00</p>
                    </p>
                </div>
                </div>

                {/* order1 */}
                <div className="bg-white p-3 rounded-xl  ">

                <div className=" flex justify-between">
                    <div>

                        <p className="text-xs text-blue-600">SAL-ORD-2024-00014</p>
                        <p className="text-xs text-zinc-500">23-09-2024</p>
                    </div>
                    <div>
                        <button className="bg-[#e1ebf8] border-[1px] border-[#7579ff] p-[5px] rounded-lg font-medium text-sm text-[#7579ff] ">
                            Draft
                        </button>
                    </div>
                </div>
                <div className="pt-3 flex gap-2 justify-between " >
                    <p>
                        <p className="text-xs text-zinc-500 text-center">Customer Name</p>
                        <p className="text-xs text-center">Tech Solution Inc.</p>
                    </p>
                    <p>
                        <p className="text-xs text-zinc-500 text-center">Items</p>
                        <p className="text-xs text-center">3.0</p>
                    </p>
                    <p>
                        <p className="text-xs text-zinc-500 text-center">Amount</p>
                        <p className="text-xs text-center">&#8377; 2,25,000.00</p>
                    </p>
                </div>
                </div>

                {/* order1 */}
                <div className="bg-white p-3 rounded-xl  ">

                <div className=" flex justify-between">
                    <div>

                        <p className="text-xs text-blue-600">SAL-ORD-2024-00014</p>
                        <p className="text-xs text-zinc-500">23-09-2024</p>
                    </div>
                    <div>
                        <button className="bg-[#e1ebf8] border-[1px] border-[#7579ff] p-[5px] rounded-lg font-medium text-sm text-[#7579ff] ">
                            Draft
                        </button>
                    </div>
                </div>
                <div className="pt-3 flex gap-2 justify-between " >
                    <p>
                        <p className="text-xs text-zinc-500 text-center">Customer Name</p>
                        <p className="text-xs text-center">Tech Solution Inc.</p>
                    </p>
                    <p>
                        <p className="text-xs text-zinc-500 text-center">Items</p>
                        <p className="text-xs text-center">3.0</p>
                    </p>
                    <p>
                        <p className="text-xs text-zinc-500 text-center">Amount</p>
                        <p className="text-xs text-center">&#8377; 2,25,000.00</p>
                    </p>
                </div>
                </div>

                {/* order1 */}
                <div className="bg-white p-3 rounded-xl  ">

                <div className=" flex justify-between">
                    <div>

                        <p className="text-xs text-blue-600">SAL-ORD-2024-00014</p>
                        <p className="text-xs text-zinc-500">23-09-2024</p>
                    </div>
                    <div>
                        <button className="bg-[#e1ebf8] border-[1px] border-[#7579ff] p-[5px] rounded-lg font-medium text-sm text-[#7579ff] ">
                            Draft
                        </button>
                    </div>
                </div>
                <div className="pt-3 flex gap-2 justify-between " >
                    <p>
                        <p className="text-xs text-zinc-500 text-center">Customer Name</p>
                        <p className="text-xs text-center">Tech Solution Inc.</p>
                    </p>
                    <p>
                        <p className="text-xs text-zinc-500 text-center">Items</p>
                        <p className="text-xs text-center">3.0</p>
                    </p>
                    <p>
                        <p className="text-xs text-zinc-500 text-center">Amount</p>
                        <p className="text-xs text-center">&#8377; 2,25,000.00</p>
                    </p>
                </div>
                </div>

                {/* order1 */}
                <div className="bg-white p-3 rounded-xl  ">

                <div className=" flex justify-between">
                    <div>

                        <p className="text-xs text-blue-600">SAL-ORD-2024-00014</p>
                        <p className="text-xs text-zinc-500">23-09-2024</p>
                    </div>
                    <div>
                        <button className="bg-[#e1ebf8] border-[1px] border-[#7579ff] p-[5px] rounded-lg font-medium text-sm text-[#7579ff] ">
                            Draft
                        </button>
                    </div>
                </div>
                <div className="pt-3 flex gap-2 justify-between " >
                    <p>
                        <p className="text-xs text-zinc-500 text-center">Customer Name</p>
                        <p className="text-xs text-center">Tech Solution Inc.</p>
                    </p>
                    <p>
                        <p className="text-xs text-zinc-500 text-center">Items</p>
                        <p className="text-xs text-center">3.0</p>
                    </p>
                    <p>
                        <p className="text-xs text-zinc-500 text-center">Amount</p>
                        <p className="text-xs text-center">&#8377; 2,25,000.00</p>
                    </p>
                </div>
                </div>

                {/* order1 */}
                <div className="bg-white p-3 rounded-xl  ">

                <div className=" flex justify-between">
                    <div>

                        <p className="text-xs text-blue-600">SAL-ORD-2024-00014</p>
                        <p className="text-xs text-zinc-500">23-09-2024</p>
                    </div>
                    <div>
                        <button className="bg-[#e1ebf8] border-[1px] border-[#7579ff] p-[5px] rounded-lg font-medium text-sm text-[#7579ff] ">
                            Draft
                        </button>
                    </div>
                </div>
                <div className="pt-3 flex gap-2 justify-between " >
                    <p>
                        <p className="text-xs text-zinc-500 text-center">Customer Name</p>
                        <p className="text-xs text-center">Tech Solution Inc.</p>
                    </p>
                    <p>
                        <p className="text-xs text-zinc-500 text-center">Items</p>
                        <p className="text-xs text-center">3.0</p>
                    </p>
                    <p>
                        <p className="text-xs text-zinc-500 text-center">Amount</p>
                        <p className="text-xs text-center">&#8377; 2,25,000.00</p>
                    </p>
                </div>
                </div>

                {/* order1 */}
                <div className="bg-white p-3 rounded-xl  ">

                <div className=" flex justify-between">
                    <div>

                        <p className="text-xs text-blue-600">SAL-ORD-2024-00014</p>
                        <p className="text-xs text-zinc-500">23-09-2024</p>
                    </div>
                    <div>
                        <button className="bg-[#e1ebf8] border-[1px] border-[#7579ff] p-[5px] rounded-lg font-medium text-sm text-[#7579ff] ">
                            Draft
                        </button>
                    </div>
                </div>
                <div className="pt-3 flex gap-2 justify-between " >
                    <p>
                        <p className="text-xs text-zinc-500 text-center">Customer Name</p>
                        <p className="text-xs text-center">Tech Solution Inc.</p>
                    </p>
                    <p>
                        <p className="text-xs text-zinc-500 text-center">Items</p>
                        <p className="text-xs text-center">3.0</p>
                    </p>
                    <p>
                        <p className="text-xs text-zinc-500 text-center">Amount</p>
                        <p className="text-xs text-center">&#8377; 2,25,000.00</p>
                    </p>
                </div>
                </div>

            </div>


        </div>
    );
};

export default Orders;