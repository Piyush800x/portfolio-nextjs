import Image from "next/image";

export default function ProjectCard() {
    return (
        <div className="">
            <div className="bg-black text-white flex md:flex-row flex-col md:justify-between justify-center px-5 py-10">
                <div className="md:w-1/2">
                    <h1 className="md:text-7xl text-6xl pt-2">Personal Portfolio</h1>
                    <p className="md:text-2xl text-xl pl-1 pt-5">Created a dynamic and visually appealing portfolio website using Next.js and Tailwind CSS, deployed seamlessly on Vercel.</p>
                    {/* TECH STACK IMAGES */}
                    <div className="flex flex-row gap-x-5">
                        <div><Image className="" src={"/img/projects/portfolio/nextjs_logo.svg"} alt="nextjs" width={100} height={100} /></div>
                        <div><Image className="pt-6" src={"/img/projects/portfolio/tailwind_logo.svg"} alt="tailwindcss" width={100} height={100} /></div>
                        <div><Image className="pt-6 ml-3" src={"/img/projects/portfolio/vercel.svg"} alt="vercel" width={65} height={65} /></div>
                    </div>
                </div>
                {/* IMAGE */}
                <div className="border border-1 border-white rounded-2xl overflow-hidden">
                    <Image src={"/img/projects/portfolio/portfolio.webp"} alt="Img" width={720} height={480}/>
                </div>
            </div>
            <div className="flex justify-center items-center">
                <div className='w-full h-0.5 bg-white items-center justify-center mx-5'></div>
            </div>
        </div>
    )
}