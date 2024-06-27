import CustomCursor from "@/components/CustomCursor"
import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import ProjectCard from "@/components/Projects/ProjectCard"
import ProjectCardInv from "@/components/Projects/ProjectCardInverted"
import { Metadata } from "next"
import { Plus_Jakarta_Sans } from "next/font/google"

export const metadata: Metadata = {
    title: {
        absolute: "Piyush Paul - Projects"
    },
    description: "Some of my highlighted Projects."
}

const plus_Jakarta_Sans = Plus_Jakarta_Sans({
    subsets: ["latin"],
    weight: ["200", "300", "400", "500", "600", "700", "800"]
})

export default function ProjectsPage() {
    return (
        <>
            <div className={`${plus_Jakarta_Sans.className} cursor-none bg-black text-white w-full h-full`}>
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