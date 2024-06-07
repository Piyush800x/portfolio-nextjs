import CustomCursor from "@/components/CustomCursor"
import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import ProjectCard from "@/components/Projects/ProjectCard"
import ProjectCardInv from "@/components/Projects/ProjectCardInverted"

export default function ProjectsPage() {
    return (
        <>
            <div className="cursor-none bg-black text-white w-full h-full">
                <CustomCursor/>
                <Navbar/>
                <div>
                    <ProjectCard/>
                    <ProjectCardInv/>
                </div>
                <Footer/>
            </div>
        </>
    )
}