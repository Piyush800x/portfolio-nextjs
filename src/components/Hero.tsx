import { Bai_Jamjuree } from "next/font/google"
import Image from "next/image"

export const bai_Jamjuree = Bai_Jamjuree({
    subsets: ['latin'],
    weight: ["200", "300", "500"],
})

export default function Hero() {
    return (
        <div className={bai_Jamjuree.className}>
            <div className="flex flex-col justify-center items-center bg-black">
                <Image className="rounded-full mt-16" src={'/img/self-new.webp'} alt="alt" width={243} height={243}/>
                <div className="text-4xl bg-gradient-to-r from-15 from-purple-400 via-red-400 via-55 to-yellow-400 to-100 inline-block text-transparent bg-clip-text text-center">
                    <span className="">Hello, </span>
                    <span>I'm </span>
                    <span className="">Piyush,</span>
                    <span className="text-white"> Full Stack </span>
                    <br />
                    <span className="text-white">developer based in</span>
                    <span className="text-white"> India.</span>
                </div>
            </div>
        </div>
    )
}