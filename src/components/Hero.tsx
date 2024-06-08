import { Bai_Jamjuree, Inter } from 'next/font/google'
import Image from "next/image"
import Link from 'next/link'

export const bai_Jamjuree = Bai_Jamjuree({
    subsets: ['latin'],
    weight: ["200", "300", "500"],
})

export const inter = Inter({
    subsets: ['latin'],
    weight: ["100", "200", "300", "400", "500", "600", "700"]
  })

export default function Hero() {
    return (
        <div className={bai_Jamjuree.className}>
            <div>
                <div className="flex flex-col justify-center items-center bg-black">
                    <Image className="grayscale rounded-full mt-16 mb-6 hover:filter-none duration-100 ease-in-out invert-on-hover" src={'/img/self-new.webp'} alt="alt" width={420} height={420}/>
                    <div className="mt-5 font-bold leading-normal sm:text-7xl text-4xl bg-gradient-to-r from-15 from-purple-400 via-red-400 via-55 to-yellow-400 to-100 inline-block text-transparent bg-clip-text text-center">
                        <span className="">Hello, </span>
                        <span>{"I'm"} </span>
                        <span className="">Piyush, </span>
                        <span className="text-white font-light"> Full Stack </span>
                        <br />
                        <span className="text-white font-light">developer based in</span>
                        <span className="text-white font-light"> India.</span>
                    </div>
                    <div className={inter.className}>
                        <div className='mt-10 mb-8 justify-center items-center text-center'>
                            <h1 className='text-white font-normal text-md'>I can develop and maintain your services so you can sleep well</h1>
                        </div>
                        <div className='flex flex-row justify-center items-center gap-5 font-medium text-lg mb-8 '>
                            <Link href='/contact' className="cursor-none border-2 hover:border-white bg-white text-black py-2 px-4 rounded-full hover:bg-black hover:text-white transition ease-in-out duration-300 ">CONTACT ME</Link>
                            <Link href='/projects' className="cursor-none overflow-hidden border-2 border-white bg-black text-white py-2 px-4 rounded-full hover:bg-white hover:text-black transition ease-in-out duration-300 invert-on-hover">VIEW PROJECTS</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className={inter.className}>
                    <div className="flex flex-col justify-between items-center bg-black text-white p-4 md:flex-row md:justify-between md:items-center">
                        <span className='text-white font-medium text-xl text-center md:text-center md:ml-10 ml-0'>Participated in</span>
                        <div className='flex flex-wrap justify-center md:justify-end mt-4 md:mt-0 md:space-x-10 mb-10 md:mr-10'>
                            {/* <Image className='grayscale' src={'img/SIH_Logo.svg'} alt='SIH' width={238} height={103}/> */}
                            <Image className='grayscale' src={'img/JISTECH.svg'} alt='SIH' width={216} height={104}/>
                        </div>
                    </div>
            </div>
        </div>
    )
}