import { Bai_Jamjuree, Inter } from 'next/font/google'
import Link from 'next/link'

export const bai_Jamjuree = Bai_Jamjuree({
    subsets: ['latin'],
    weight: ["200", "300", "400", "500", "600", "700"],
})

export default function Design() {
    return (
        <div className={`${bai_Jamjuree.className} flex flex-col bg-black justify-center items-center md:text-6xl text-4xl py-20`}>
            <div className='w-11/12 h-0.5 bg-white items-center'></div>
            <div className='bg-gradient-to-r hover:from-purple-500 hover:via-red-400 hover:to-yellow-500 text-white font-semibold md:py-10 py-12 text-left w-11/12 h-36'>
                <Link href='/' className='w-11/12 ml-14 cursor-none select-none'>Web Design</Link>
            </div>
            <div className='w-11/12 h-0.5 bg-white items-center'></div>
            <div className='bg-gradient-to-r hover:from-purple-500 hover:via-red-400 hover:to-yellow-500 text-white font-semibold md:py-10 py-12 text-left w-11/12 h-36'>
                <Link href='/' className='ml-14 cursor-none '>System Design</Link>
            </div>
            <div className='w-11/12 h-0.5 bg-white items-center'></div>
            <div className='bg-gradient-to-r hover:from-purple-500 hover:via-red-400 hover:to-yellow-500 text-white font-semibold md:py-10 py-12 text-left w-11/12 h-36'>
                <Link href='/' className='ml-14 cursor-none '>Product Design</Link>
            </div>
            <div className='w-11/12 h-0.5 bg-white items-center'></div>
        </div>
    )
}