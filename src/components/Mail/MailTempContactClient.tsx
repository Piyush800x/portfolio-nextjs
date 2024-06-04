import { Inter } from "next/font/google"
import { Html } from "@react-email/components";

export const inter = Inter({
    subsets: ['latin'],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
})

export function MailTemplateContactClient({name}: {name: string})  {
    return (
        <Html lang="en">
            <div style={{width: '100%', height:"100%", backgroundColor: "white", display: 'flex', justifyContent: 'center', alignItems: "center"}}>
                <div style={{width: '100%', height: '100%', position: 'relative', background: 'black'}}>
                    <div style={{justifyContent: "center", alignItems: "center"}}>
                        <div style={{width: 564, height: 91, left: 21, top: 20, paddingLeft:"250px", paddingTop: "25px", textAlign: 'center', color: 'white', fontSize: 36, fontFamily: 'Inter', fontWeight: '500', wordWrap: 'break-word'}}>Dear {name}, Thank you for your interest!</div>
                        {/* <div style={{width: 440, height: 0, left: 85, top: 124, paddingLeft:"250px", border: '3px white solid'}}></div> */}
                        <div style={{width: 553, height: 84, left: 32, top: 145, paddingLeft:"250px", paddingTop: "25px", textAlign: 'center', color: 'white', fontSize: 24, fontFamily: 'Inter', fontWeight: '500', wordWrap: 'break-word'}}>We will get back to you soon.</div>
                    </div>
                </div>
            </div>
        </Html>
    );
}