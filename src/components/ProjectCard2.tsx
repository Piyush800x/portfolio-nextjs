import Image from "next/image"

export default function ProjectCard2() {
    return (
        <div className="flex md:flex-col flex-row w-full h-full px-10 py-10">
            <div className="bg-black bg-opacity-50 p-8 shadow-lg backdrop-blur-xl border border-white">
                <h1 className="text-5xl  mb-4">Personal Portfolio</h1>
                <p className="text-lg mb-8">Created a dynamic and visually appealing portfolio website using Next.js and Tailwind CSS, deployed seamlessly on Vercel. Utilized Next.js for server-side rendering and static site generation, ensuring fast load times and excellent performance.</p>
                <div className="flex space-x-2">
                    <Image src={"/img/Home/github.webp"} alt="avatar" className="w-12 h-12 rounded-full" width={100} height={100} />
                </div>
            </div>
        </div>
    )
}