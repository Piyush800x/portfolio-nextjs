import CustomCursor from "@/components/CustomCursor"
import Navbar from "@/components/Navbar"

export default function ProjectsPage() {
    return (
        <>
            <div className="cursor-none bg-black text-white w-full h-full">
                <CustomCursor/>
                <Navbar/>
                Projects
            </div>
        </>
    )
}