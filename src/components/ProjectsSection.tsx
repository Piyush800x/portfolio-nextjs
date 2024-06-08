import { Bai_Jamjuree } from "next/font/google"
import ProjectCard from "./ProjectCard"
import ProjectCardNew from "./ProjectCardNew"

export const bai_Jamjuree = Bai_Jamjuree({
    subsets: ['latin'],
    weight: ["200", "300", "400", "500", "600", "700"]
})

export default function ProjectSection() {
    return (
        <>
            <div className={`${bai_Jamjuree.className} text-white bg-black md:text-5xl text-3xl md:text-left text-center`}>
                <div className="md:pl-16 md:ml-2 leading-normal">
                    <span className="font-medium">Look at My</span>
                    <br />
                    <span className="font-semibold bg-gradient-to-r from-15 from-purple-400 via-red-400 via-55 to-yellow-400 to-100 inline-block text-transparent bg-clip-text">Projects.</span>
                </div>
            </div>
            <div className="flex flex-row bg-black gap-x-10 justify-between pb-20">
                <ProjectCard/>
                <ProjectCard/>
            </div>
            <div className="flex flex-row bg-black gap-x-10 justify-between pb-20">
                <ProjectCard/>
                <ProjectCard/>
            </div>
            {/* <div className="flex flex-row bg-black text-white">
                <ProjectCardNew/>
                <ProjectCardNew/>
                <ProjectCardNew/>
            </div> */}
        </>
    )
}