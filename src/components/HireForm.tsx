import { Poppins } from "next/font/google"

export const poppins = Poppins({
    subsets: ['latin'], 
    weight: ["100", "200", "300", "400", "500", "600", "700", "800"]
})


export default function HireForm() {
    return (
        <div className="relative h-screen w-screen overflow-hidden bg-black">
            <div className={`${poppins.className} flex flex-col text-white justify-center`}>
                <div className="flex flex-col justify-center pt-10 items-center">
                    <h1 className="font-semibold md:text-7xl text-3xl mb-6 tracking-wide">HIRE ME</h1>
                    <div className='w-52 h-px bg-white items-center'></div>
                </div>
                <div className="flex justify-center">
                    <div className="w-1/3 h-full ">
                        <form action="">
                            {/* basic details */}
                            <div className="flex flex-col justify-center items-center pt-10 w-full h-full">
                                <h1 className="font-light text-2xl mb-6 pb-5">Basic Details</h1>
                                <div className="w-full">
                                    <label className="block text-sm font-medium text-white pl-3">Full Name</label>
                                    <input type="text" className="border-b border-white mt-1 block w-full px-3 py-2 bg-black ring-0 shadow-sm focus:outline-none text-white" placeholder="John Doe" />
                                </div>
                            </div>    
                        </form>    
                    </div>
                </div>
            </div>
        </div>
    )
}