import Navbar from "@/components/Navbar";
import HireForm from "@/components/HireForm";

export default function HireMePage() {
    return (
        <div className="">
            <Navbar/>
            <div className="bg-black text-white flex justify-center h-screen">
                <HireForm/>
            </div>
        </div>
    )
}