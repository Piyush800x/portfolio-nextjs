import { Inter } from "next/font/google"
import Link from "next/link"


export const inter = Inter({
    subsets: ['latin'],
    weight: ["100", "200", "300", "400", "500", "600", "700"]
  })

export default function Footer() {
    return (
        <div className={`${inter.className} bg-black  text-white`}>
            <div className="flex md:flex-row flex-col justify-between items-center mx-20 pt-10 pb-10">
                <div className="flex flex-wrap">
                    <h1 className="text-2xl">PIYUSH PAUL</h1>
                </div>
                <div className="flex flex-row gap-x-10">
                    <Link href='/' className="cursor-none">Home</Link>
                    <Link href='/' className="cursor-none">About</Link>
                    <Link href='/' className="cursor-none">Contact me</Link>
                </div>
            </div>
            <div className="flex md:flex-row flex-col justify-between items-center mx-20 pb-10">
                <div className="flex flex-wrap">
                    <h1 className="text-md font-light">Developed by Piyush Paul</h1>
                </div>
                <div className="flex flex-row gap-x-10">
                    <Link href='/' className="cursor-none relative inline-flex items-center justify-center w-10 h-10 rounded-full bg-black text-white hover:text-black transition-colors">Home</Link>
                    <Link href='/' className="cursor-none relative inline-flex items-center justify-center w-10 h-10 rounded-full bg-black text-white hover:text-black transition-colors">About</Link>
                    <Link href='/' className="cursor-none relative inline-flex items-center justify-center w-10 h-10 rounded-full bg-black text-white hover:text-black transition-colors">Contact me</Link>
                </div>
            </div>
        </div>
    )
}