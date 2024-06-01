import { Inter } from "next/font/google"

export const inter = Inter({
    subsets: ['latin'],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
})

export default function MailTemplate({name}: {name: string})  {
    return (
        <>
            <div className={`${inter.className} flex flex-col w-1/3 h-1/3 justify-center items-center bg-black text-white`}>
                <h1 className="text-4xl py-4 px-2 text-center">Dear {name}, Thank you for your interest!</h1>
                <div className="h-px w-2/3 border border-white"></div>
                <h1 className="text-2xl py-2">We will get back to you soon.</h1>
            </div>
        </>
    )
}