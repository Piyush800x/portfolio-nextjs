import Image from "next/image"

export default function ProjectCardNew() {
    return (
        <div className="flex flex-col w-full px-2">
            <div className="bg-black bg-opacity-50 p-8 rounded-lg shadow-lg">
            <div className="flex mb-4">
                <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-l">
                Library Type
                </button>
                <button className="bg-gray-700 hover:bg-gray-800 text-white py-2 px-4 rounded-r">
                File Type
                </button>
            </div>
            <h1 className="text-5xl font-bold mb-4">Specify Your Project Title Here</h1>
            <p className="text-lg mb-8">This field is a small description of your project.</p>
            <div className="flex space-x-2">
                <Image src={"/img/Home/avatar.svg"} alt="avatar" className="w-12 h-12 rounded-full" width={100} height={100} />
                <Image src={"/img/Home/avatar.svg"} alt="avatar" className="w-12 h-12 rounded-full" width={100} height={100} />
                <Image src={"/img/Home/avatar.svg"} alt="avatar" className="w-12 h-12 rounded-full" width={100} height={100} />
                <Image src={"/img/Home/avatar.svg"} alt="avatar" className="w-12 h-12 rounded-full" width={100} height={100} />
                <Image src={"/img/Home/avatar.svg"} alt="avatar" className="w-12 h-12 rounded-full" width={100} height={100} />
            </div>
            </div>
        </div>
    )
}