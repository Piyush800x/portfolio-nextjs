import Image from "next/image";

export default function ProjectCardInv() {
    return (
        <div className="">
            <div className="bg-black text-white flex md:flex-row flex-col md:justify-between justify-center px-5 py-10">
                {/* IMAGE */}
                <div className="border border-1 border-white rounded-2xl overflow-hidden invert-on-hover">
                    <Image src={"/img/projects/freshpaper/freshpaper.webp"} alt="Img" width={720} height={480}/>
                </div>
                <div className="md:w-1/2">
                    <h1 className="md:text-7xl text-6xl pt-2">FreshPaper</h1>
                    <p className="md:text-2xl text-xl pl-1 pt-5">Developed a robust desktop application using Rust and Tauri that simplifies wallpaper management. This app allows users to seamlessly download high-quality wallpapers and set them as their desktop backgrounds with a single click.</p>
                    {/* TECH STACK IMAGES */}
                    <div className="flex flex-row gap-x-5">
                        <div><Image className="" src={"/img/projects/freshpaper/rust.svg"} alt="rust" width={120} height={120} /></div>
                        <div><Image className="pt-6 ml-3" src={"/img/projects/freshpaper/tauri.webp"} alt="tauri" width={65} height={65} /></div>
                        <div><Image className="pt-6 mt-2 ml-5" src={"/img/projects/freshpaper/tailwind_logo.svg"} alt="tailwindcss" width={100} height={100} /></div>
                        <div><Image className="pt-6 ml-3" src={"/img/projects/freshpaper/react.webp"} alt="react" width={80} height={80} /></div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center">
                <div className='w-full h-0.5 bg-white items-center justify-center mx-5'></div>
            </div>
        </div>
    )
}