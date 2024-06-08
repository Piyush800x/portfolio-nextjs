import { Bai_Jamjuree, Inter } from 'next/font/google'
import Link from 'next/link'

export const bai_Jamjuree = Bai_Jamjuree({
    subsets: ['latin'],
    weight: ["200", "300", "400", "500", "600", "700"],
})

export const inter = Inter({
    subsets: ['latin'],
    weight: ["100", "200", "300", "400", "500", "600", "700"]
})


export default function Showcase()  {
    return (
        <div className='bg-black'>
            <div className={bai_Jamjuree.className}>
                <div className='flex flex-col justify-between items-center md:flex-row'>
                    <div className="ml-12 mb-5 font-semibold leading-normal sm:text-7xl text-4xl bg-gradient-to-r from-15 from-purple-400 via-red-400 via-55 to-yellow-400 to-100 inline-block text-transparent bg-clip-text">
                        <span className="text-white font-normal text-left ">Design that solves</span>
                        <br />
                        <span className='text-white font-normal text-left'>Problems, one</span>
                        <br />
                        <span className="text-left">product at a time</span>
                    </div>
                    <div className='flex flex-col md:flex-row justify-center md:space-x-5 mr-12 text-lg font-medium'>
                        <div className={inter.className}>
                            <div className='md:space-x-5 justify-center flex flex-col md:flex-row'>
                                <Link href='/contact' className='cursor-none bg-gradient-to-r from-15 from-purple-400 via-red-400 via-55 to-yellow-400 to-100 hover:from-yellow-400 hover:via-red-400 hover:to-purple-400 border-2 border-white py-2 px-4 rounded-full text-white transition ease-in-out duration-300 invert-on-hover'>GET IN TOUCH</Link>
                                <Link href='/projects' className="cursor-none border-2 border-white bg-black text-white py-2 px-4 rounded-full hover:bg-white hover:text-black transition ease-in-out duration-300 invert-on-hover">VIEW ALL WORKS</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}