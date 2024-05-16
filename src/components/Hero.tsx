import { Bai_Jamjuree } from "next/font/google"
import Image from "next/image"

export const bai_Jamjuree = Bai_Jamjuree({
    subsets: ['latin'],
    weight: ["200", "300"],
})

export default function Hero() {
    return (
        <>
            <div className="flex justify-center items-center">
                <Image className="rounded-full" src={'/img/self.webp'} alt="alt" width={243} height={243}/>
            </div>
        </>
    )
}