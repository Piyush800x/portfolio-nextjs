import { Inter } from "next/font/google";
import Link from "next/link";
import Image from "next/image";


export const inter = Inter({
    subsets: ['latin'],
    weight: ["100", "200", "300", "400", "500", "600", "700"]
  });

export default function Footer() {
    return (
        <div className={`${inter.className} bg-black  text-white`}>
            <div className="flex md:flex-row flex-col justify-between items-center mx-20 pt-10 pb-10">
                <div className="flex flex-wrap">
                    <h1 className="text-2xl md:pb-0 pb-5">OM</h1>
                </div>
                <div className="flex flex-row gap-x-10">
                    <Link href='/' className="cursor-none transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110">Home</Link>
                    <Link href='/' className="cursor-none transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110">About</Link>
                    <Link href='/' className="cursor-none transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110">Contact me</Link>
                </div>
            </div>
            <div className="flex md:flex-row flex-col justify-between items-center mx-20 pb-10">
                <div className="flex flex-wrap">
                    <h1 className="text-md font-light">Developed by Piyush Paul</h1>
                </div>
                <div className="flex flex-row gap-x-10">
                    <Link href='https://x.com/piyushpaul_'><Image className="rounded-full cursor-none transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110" src={'/img/twitter.svg'} alt="Twitter" width={25} height={25}></Image></Link>
                    <Link href='https://github.com/Piyush800x'><Image className="rounded-full cursor-none transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110" src={'/img/github.svg'} alt="GitHub" width={25} height={25}></Image></Link>
                    <Link href='https://linkedin.com/in/piyushpaul'><Image className="rounded-full cursor-none transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110" src={'/img/ll.svg'} alt="LinkedIn" width={25} height={25}></Image></Link>
                </div>
            </div>
        </div>
    )
}