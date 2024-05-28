import { Poppins } from "next/font/google"

export const poppins = Poppins({
    subsets: ['latin'], 
    weight: ["100", "200", "300", "400", "500", "600", "700", "800"]
})


export default function HireForm() {
    return (
        <div className="relative h-full w-screen overflow-hidden bg-black">
            <div className={`${poppins.className} flex flex-col text-white justify-center`}>
                <div className="flex flex-col justify-center pt-10 items-center">
                    <h1 className="font-semibold md:text-7xl text-3xl mb-6 tracking-wide">HIRE ME</h1>
                    <div className='w-52 h-px bg-white items-center'></div>
                </div>
                <div className="flex justify-center">
                    <div className="w-1/3 h-full ">
                        <form action="">
                            <div className="flex flex-col justify-center items-center pt-10 w-full h-full">
                                {/* basic details */}
                                <h1 className="font-light text-2xl mb-6 pb-5">Basic Details</h1>
                                <div className="w-full">
                                    <label className="block text-md font-medium text-white">Full Name</label>
                                    <input type="text" className="cursor-none border-b border-white mt-1 block w-full py-2 bg-black ring-0 shadow-sm focus:outline-none text-white" placeholder="John Doe" />
                                </div>
                                <div className="w-full mt-5">
                                    <label className="block text-md font-medium text-white ">Email Address</label>
                                    <input type="text" className="cursor-none border-b border-white mt-1 block w-full  py-2 bg-black ring-0 shadow-sm focus:outline-none text-white" placeholder="example@example.com" />
                                </div>
                                <div className="w-full mt-5">
                                    <label className="block text-md font-medium text-white ">Phone Number</label>
                                    <input type="text" className="cursor-none border-b border-white mt-1 block w-full  py-2 bg-black ring-0 shadow-sm focus:outline-none text-white" placeholder="+91 1234567890" />
                                </div>
                                {/* project details */}
                                <h1 className="font-light text-2xl mb-6 pb-5 mt-10">Project Details</h1>
                                <div className="w-full mt-5">
                                    <label className="block text-md font-medium text-white pb-5">Project Details</label>
                                    <textarea className="cursor-none mt-1 block w-full py-2 px-2 bg-black border border-white shadow-sm focus:outline-none text-white" placeholder="Please Describe Your Project"></textarea>
                                </div>
                                <div className="w-full mt-5">
                                    <label className="block text-md font-medium text-white ">Budget {`(₹)`}</label>
                                    <input type="text" className="cursor-none border-b border-white mt-1 block w-full  py-2 bg-black ring-0 shadow-sm focus:outline-none text-white" placeholder="Enter Your Budget" />
                                </div>
                                <div className="w-full mt-5">
                                    <div className="">
                                        <label className="block text-md font-medium text-white mb-1">Service Type</label>
                                    </div>
                                    <select className="cursor-none mt-4 block w-full py-2 bg-black border border-white focus:outline-none text-white">
                                        <option className="cursor-none">Select Service Type</option>
                                        <option className="cursor-none">Full Stack Website</option>
                                        <option className="cursor-none">Portfolio Website</option>
                                        <option className="cursor-none">Web Design</option>
                                    </select>
                                </div>
                                <button className="mt-10 mb-10 text-xl cursor-none border-2 hover:border-white hover:bg-black hover:text-white bg-white text-black py-2 px-4 rounded-full transition duration-300">HIRE ME</button>
                            </div>    
                        </form>    
                    </div>
                </div>
            </div>
        </div>
    )
}