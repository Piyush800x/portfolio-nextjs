import Image from "next/image"

export default function ProjectCardNew() {
    return (
        <div className="flex md:flex-col flex-row w-full px-10 py-10">
            <div className="bg-black bg-opacity-50 p-8 shadow-lg backdrop-blur-xl border border-white">
                {/* <div className="flex mb-4">
                    <button className="cursor-none bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-l">
                    Library Type
                    </button>
                    <button className="cursor-none bg-gray-700 hover:bg-gray-800 text-white py-2 px-4 rounded-r">
                    File Type
                    </button>
                </div> */}
                <h1 className="text-5xl  mb-4">FreshPaper</h1>
                <p className="text-lg mb-8">Developed a robust desktop application using Rust and Tauri that simplifies wallpaper management. This app allows users to seamlessly download high-quality wallpapers and set them as their desktop backgrounds with a single click.</p>
                <div className="flex space-x-2">
                    <Image src={"/img/Home/github.webp"} alt="avatar" className="w-12 h-12 rounded-full" width={100} height={100} />
                    {/* <Image src={"/img/Home/avatar.svg"} alt="avatar" className="w-12 h-12 rounded-full" width={100} height={100} />
                    <Image src={"/img/Home/avatar.svg"} alt="avatar" className="w-12 h-12 rounded-full" width={100} height={100} />
                    <Image src={"/img/Home/avatar.svg"} alt="avatar" className="w-12 h-12 rounded-full" width={100} height={100} />
                    <Image src={"/img/Home/avatar.svg"} alt="avatar" className="w-12 h-12 rounded-full" width={100} height={100} /> */}
                </div>
            </div>
        </div>
    )
}