import Navbar from "@/components/Navbar";
import HireForm from "@/components/HireForm";
import CustomCursor from "@/components/CustomCursor";
import Footer from "@/components/Footer";

export default function HireMePage() {
    return (
        <div className="cursor-none">
            <CustomCursor/>
            <Navbar/>
            <div className="bg-black text-white flex justify-center h-full">
                <HireForm/>
            </div>
            <Footer/>
        </div>
    )
}