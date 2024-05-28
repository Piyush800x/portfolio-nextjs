import Navbar from "@/components/Navbar";
import HireForm from "@/components/HireForm";
import CustomCursor from "@/components/CustomCursor";

export default function HireMePage() {
    return (
        <div className="cursor-none">
            <CustomCursor/>
            <Navbar/>
            <div className="bg-black text-white flex justify-center h-full">
                <HireForm/>
            </div>
        </div>
    )
}