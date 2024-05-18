import { Bai_Jamjuree } from "next/font/google";
import CTA from "./CallToAction";

export const bai_Jamjuree = Bai_Jamjuree({
    subsets: ['latin'],
    weight: ["200", "300", "400", "500", "600", "700"]
})

export default function Statistics() {
    return (
        <div>
            <div className={`${bai_Jamjuree.className} flex md:flex-row flex-col justify-between items-center bg-cyan-950 text-white`}>
                <div className="flex-wrap text-6xl md:px-20 md:py-28 px-10 py-10 font-medium">
                    <h1>Piyush</h1>
                    <h1>Paul</h1>
                </div>
                <div className="flex flex-row gap-x-16 px-10 py-10">
                    <div className="flex flex-col">
                        <span className="text-4xl font-bold pb-1 bg-gradient-to-r from-15 from-purple-400 via-red-400 via-55 to-yellow-400 to-100 inline-block text-transparent bg-clip-text">10+</span>
                        <span>Projects done</span>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-4xl font-bold pb-1 bg-gradient-to-r from-15 from-purple-400 via-red-400 via-55 to-yellow-400 to-100 inline-block text-transparent bg-clip-text">2+</span>
                        <span>Years of experience</span>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-4xl font-bold pb-1 bg-gradient-to-r from-15 from-purple-400 via-red-400 via-55 to-yellow-400 to-100 inline-block text-transparent bg-clip-text">100%</span>
                        <span>Client satisfaction</span>
                    </div>
                </div>
                
            </div>
        </div>
    )
}