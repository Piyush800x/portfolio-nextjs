import CustomCursor from "@/components/CustomCursor"
import Navbar from "@/components/Navbar"
import ContactForm from "@/components/ContactForm"
import Footer from "@/components/Footer"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: {
        absolute: "Piyush Paul - Contact"
    },
    description: "Contact us for more information"
}

export default function Contact() {
    return (
        <div className="cursor-none bg-black text-white">
            <CustomCursor/>
            <Navbar/>
            <div className="flex justify-center h-full">
                <ContactForm/>
            </div>
            {/* <div className="border border-white h-px"></div> */}
            <Footer/>
        </div>
    )
}