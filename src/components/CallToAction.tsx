import { Bai_Jamjuree, Inter } from "next/font/google"
import Link from "next/link"

export const bai_Jamjuree = Bai_Jamjuree({
    subsets: ['latin'],
    weight: ["200", "300", "400", "500", "600", "700"]
})

export const inter = Inter({
    subsets: ['latin'],
    weight: ["100", "200", "300", "400", "500", "600", "700"]
  })

export default function CTA() {
    return (   // rounded-b-3xl md:mx-16 ////// bg-gradient-to-r from-15 from-purple-400 via-red-400 via-55 to-yellow-400 to-100
        <div className="bg-black">
            <div className={`${bai_Jamjuree.className} bottom-0 left-0  flex flex-col justify-center items-center bg-black`}> 
                <div className="text-white font-semibold md:text-7xl text-4xl text-center md:pt-14 pt-10">
                    <h1>Interested in</h1>
                    <h1>Working with me?</h1>
                </div>
                <div className={`${inter.className} flex justify-center items-center px-10 md:pt-10 md:pb-10 pt-4 pb-10 font-bold`}>
                    <Link href='/hireme' className="cursor-none border-2 hover:border-white bg-white text-black py-2 px-4 rounded-full hover:bg-black hover:text-white transition ease-in-out duration-300 ">GET IN TOUCH</Link>
                </div>
            </div>
            <div className="flex flex-row justify-center items-center">
                <div className='w-11/12 h-0.5 bg-white items-center'></div>
            </div>
        </div>
    )
}